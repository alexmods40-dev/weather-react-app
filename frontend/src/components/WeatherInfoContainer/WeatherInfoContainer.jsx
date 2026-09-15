import './WeatherInfoContainer.css'

export default function WeatherInfoContainer({ weather }) {
    const thresholds = {
        co: [4000, 10000, 'A product of incomplete combustion of fuel.'],
        no2: [40, 120, 'Harmful gas from exhaust fumes.'],
        o3: [100, 180, 'Ground-level ozone.'],
        so2: [40, 350, 'Gas from burning coal and oil.'],
        pm2_5: [15, 35, 'The smallest particles of soot.'],
        pm10: [45, 100, 'Dust and pollen particles.']
    };

    return (
        <div className="result-card">
            <h2 className="city-name">{weather.city}, {weather.country}</h2>
            <div className="temp__container">
                <img className="img" src={weather.conditionIcon} alt="conditionIcon" />
                <p className="current-temp">Temperature: {weather.currentTemp}°C</p>
                <p>Feels like: {weather.feelsLikeTemp}°C</p>
            </div>
            <div className="condition">Condition: {weather.conditionText}</div>
            <div className="air-title">
                <span>Air quality:</span>
                <ul className='air__Quality'>
                    {Object.entries(thresholds).map(([key, [low, high, title]]) => {
                        const value = weather.airQuality[key];
                        let status;
                        if (value < low) {
                            status = 'good'
                        } else if (value < high) {
                            status = 'average'
                        } else {
                            status = 'poor'
                        }
                        return <li data-tooltip={title} data-direction="top" className={status} key={key}>{key.toLocaleUpperCase()}: {value} µg/m3</li>
                    })}
                </ul>
            </div>
        </div>
    )
}
