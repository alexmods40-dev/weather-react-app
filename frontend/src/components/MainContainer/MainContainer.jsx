import './MainContainer.css'
import WeatherContainer from '../WeatherContainer/WeatherContainer'
import ForecastHourlyContainer from '../ForecastHourlyContainer/ForecastHourlyContainer'
import { useState } from 'react'
import { fetchWeatherData } from '../../utils/fetchWeatherData'
import { fetchWeatherForecastData } from '../../utils/fetchWeatherForecastData'
import ForecastDailyContainer from '../ForecastDailyContainer/ForecastDailyContainer'

export default function MainContainer() {
    const [ city, setCity ] = useState('')
    const [ error, setError ] = useState('')
    const [ loading, setLoading ] = useState(false)
    const [ weather, setWeather ] = useState(null)
    const [ forecast, setForecast ] = useState(null)


    function handleCityChange(event) {
        setCity(event.target.value)
    }

    async function handleRefresh() {
        setLoading(true)
        const errorText = 'There was an error communicating with the server. Please try again later.'
        const weatherData = await fetchWeatherData(city)
        const forecastData = await fetchWeatherForecastData(city)

        if (!weatherData || !forecastData) {
            setLoading(false)
            setError(errorText)
            setWeather(null)
            setForecast(null)
        } else if (weatherData.error || forecastData.error) {
            setLoading(false)
            setError(weatherData.error?.message || forecastData.error?.message)
            setWeather(null)
            setForecast(null)
        } else {
            setError('')
            setLoading(false)
            setWeather(weatherData)
            setForecast(forecastData)
        }
    }

    return(
        <div className='main__container'>
            {forecast && <ForecastHourlyContainer forecast={forecast} hourly={true} daily={false}/>}
            <WeatherContainer city={city} error={error} loading={loading} weather={weather} onCityChange={handleCityChange} onRefresh={handleRefresh}/>
            {forecast && <ForecastDailyContainer forecast={forecast} daily={true} hourly={false}/>}
        </div>
    )
}