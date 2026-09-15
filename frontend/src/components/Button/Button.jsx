import './Button.css'
import { fetchWeatherData } from '../../utils/fetchWeatherData'
import { fetchWeatherForecastData } from '../../utils/fetchWeatherForecastData'


export default function Button({ loading, ...props }) {

    return(
        <button disabled={loading} {...props} className="btn__submit" >{loading ? 'Loading...' : 'Refresh'}</button>
    )
}