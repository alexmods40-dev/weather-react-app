import './ForecastHourlyContainer.css'
import ForecastItem from '../ForecastItem/ForecastItem'

export default function ForecastHourlyContainer({ forecast }) {
    return (
        <div className='forecast__hourly__container'>
            {forecast.hourly.map(forecast => (
                <ForecastItem key={forecast.time} forecast={forecast} hourly={true} />
            ))}
        </div>
    )
}