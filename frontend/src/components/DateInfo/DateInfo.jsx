import './DateInfo.css'

export default function DateInfo({ weather }) {
    return (
        <p className='date__info'>The data is current as of: {weather.lastUpdated}</p>
    )
}