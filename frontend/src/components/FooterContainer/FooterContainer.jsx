import './FooterContainer.css'

export default function FooterContainer() {
    return (
        <div className="footer__container">
            <div className="image">
                <a href="https://www.weatherapi.com/"> <title>Free Weather API</title> <img src="//cdn.weatherapi.com/v4/images/weatherapi_logo.png" alt="Weather data by WeatherAPI.com" /></a>
                <span className='text'>Powered by <a href="https://www.weatherapi.com/" title="Free Weather API" target='blank'>WeatherAPI.com</a></span>
            </div>
        </div>
    )
}