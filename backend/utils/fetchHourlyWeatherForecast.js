import { key } from '../main.js'

export async function fetchHourlyWeatherForecast(city) {
    if (!city || city.trim().length === 0) {
        return { "error": { "message": "No matching location found." } };
    }

    try {
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=2&aqi=no&alerts=no`);
        const data = await response.json();

        if (data.error) return data;

        const allHoursDay1 = data.forecast.forecastday[0].hour;
        const allHoursDay2 = data.forecast.forecastday[1].hour;
        
        const currentHour = (new Date().getHours() + 1) % 24;
        
        const elIdx = allHoursDay1.findIndex((el) => new Date(el.time_epoch * 1000).getHours() === currentHour);

        let result = [];

	if (elIdx === -1) {
    	   result = allHoursDay1.slice(0, 5);
	} else if (elIdx <= 19) {
    	   result = allHoursDay1.slice(elIdx, elIdx + 5);
	} else {
           const hoursLeftInDay = allHoursDay1.slice(elIdx);
           const hoursNeededFromNextDay = 5 - hoursLeftInDay.length;
           const nextDayHours = allHoursDay2.slice(0, hoursNeededFromNextDay);
    
    	result = [...hoursLeftInDay, ...nextDayHours];
	}

        const formattedHourly = result.map(hour => ({
            time: hour.time_epoch,
            max_temp: hour.temp_c,
            min_temp: hour.temp_c, 
            condition: hour.condition.text,
            condition_img: hour.condition.icon,
            rain_chance: hour.chance_of_rain,
            snow_chance: hour.chance_of_snow
        }));

    return formattedHourly;
    } catch (error) {
        console.log(error.message);
        return {
            "error": { "message": "There was an error communicating with the server." }
        };
    }
}