export async function fetchWeatherData(city) {
    try {
        const response = await fetch(`http://localhost:3000/weather/${city}`)
        if (!response.ok) return null
        const weatherData = await response.json()

        if (weatherData.error) {
            return weatherData
        } else {
            return weatherData
        }
    } catch (e) {
        return null
    }
}