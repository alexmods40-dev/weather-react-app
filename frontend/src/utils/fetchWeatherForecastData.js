export async function fetchWeatherForecastData(city) {
    try {
        const responseForecast = await fetch(`http://localhost:3000/weather-forecast/${city}`)
        if(!responseForecast.ok) return null
        const forecastData = await responseForecast.json()

        if (responseForecast.error) {
            return responseForecast
        } else {
           return forecastData 
        }
    } catch (e) {
        return null
    }
}