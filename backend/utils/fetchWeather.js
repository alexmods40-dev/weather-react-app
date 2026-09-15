import { key } from '../main.js'

export async function fetchWeather(city) {
    if (!city || city.trim().length === 0) {
        return {
            "error": {
                "message": "No matching location found."
            }
        };
    }
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=yes`);
        const data = await response.json();
        if (data.error) {
            return data;
        } else {
            return {
                city: data.location.name,
                country: data.location.country,
                lastUpdated: data.current.last_updated,
                currentTemp: data.current.temp_c,
                feelsLikeTemp: data.current.feelslike_c,
                conditionText: data.current.condition.text,
                conditionIcon: data.current.condition.icon,
                airQuality: data.current.air_quality,
            }
        }
    } catch (error){
        console.log(error.message);
        return {
            "error": {
                "message": "There was an error communicating with the server. Please try again later."
            }
        };
    }
}