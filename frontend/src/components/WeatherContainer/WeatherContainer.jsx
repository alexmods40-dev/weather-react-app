import './WeatherContainer.css'
import DateAndTime from '../DateTimeContainer/DateAndTime'
import InputContainer from '../InputContainer/InputContainer'
import Error from '../Error/Error'
import WeatherInfoContainer from '../WeatherInfoContainer/WeatherInfoContainer'
import DateInfo from '../DateInfo/DateInfo'

export default function WeatherContainer({ city, error, loading, weather, onCityChange, onRefresh }) {
    return(
        <div className='weather__container'>
            <DateAndTime />
            <InputContainer loading={loading} city={city} onCityChange={onCityChange} onRefresh={onRefresh}/>
            {error && <Error error={error}/>}
            {weather && <div className='weather__info'><WeatherInfoContainer weather={weather}/></div>}
            {weather && <DateInfo weather={weather} />}
        </div>
    )
}