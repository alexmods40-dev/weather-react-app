import { key } from '../main.js'

export async function fetchWeatherForecast(city) {
    if (!city || city.trim().length === 0) {
        return {
            "error": {
                "message": "No matching location found."
            }
        };
    }
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=5&aqi=no&alerts=no`);
        const data = await response.json();
        if (data.error) {
            return data;
        }
        let arr = [];
        for (const el of data.forecast.forecastday) {
            const obj = {
                time: el.date_epoch,
                max_temp: el.day.maxtemp_c,
                min_temp: el.day.mintemp_c,
                avg_temp: el.day.avgtemp_c,
                condition: el.day.condition.text,
                condition_img: el.day.condition.icon,
                will_rain: el.day.daily_will_it_rain,
                rain_chance: el.day.daily_chance_of_rain,
                will_snow: el.day.daily_will_it_snow,
                snow_chance: el.day.daily_chance_of_snow,
            }
            arr.push(obj)
        }
        return arr
    } catch (error) {
        console.log(error.message);
        return {
            "error": {
                "message": "There was an error communicating with the server. Please try again later."
            }
        };
    }
}