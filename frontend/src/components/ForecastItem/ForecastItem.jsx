import './ForecastItem.css'

export default function ForecastItem({ forecast, hourly, daily }) {
    const time = new Date(forecast.time * 1000)
    console.log(time, time.getHours()) 
    let date
    if (hourly) {
        const hours = String(time.getHours()).padStart(2, '0')
        date = `${hours}:00`
    } else if (daily) {
        const day = String(time.getDate()).padStart(2, '0')
        const month = String(time.getMonth() + 1).padStart(2, '0')
        date = `${day}.${month}`
    }
    let precip
    let text
    if (forecast.rain_chance > 0) {
        precip = 'rain'
        text = `💧 ${forecast.rain_chance}%`
    } else if (forecast.snow_chance > 0) {
        precip = 'snow'
        text = `❄️ ${forecast.snow_chance}%`
    } else {
        precip = null
        text = null
    }

    return (
        <div className="forecast__item">
            <div className="forecast__date">{date}</div>

            <div className="forecast__condition">
                <img src={forecast.condition_img} alt="conditionImg" />
                <div className="condition__text">{forecast.condition}</div>
                <div className="forecast__precip">
                    <span className={precip}>{precip ? text : null}</span>
                </div>
            </div>

            <div className='forecast__temps'>
                <div className='max'>{forecast.max_temp}</div>
                <div className='min'>{forecast.min_temp}</div>
            </div>
        </div>
    )
}