import './ForecastDailyContainer.css'
import ForecastItem from '../ForecastItem/ForecastItem'

export default function ForecastDailyContainer({ forecast }) {
    return (
        <div className='forecast__container'>
            {forecast.daily.map(forecast => (
                <ForecastItem key={forecast.time} forecast={forecast} daily={true} />
            ))}
        </div>
    )
}