import './Error.css'
import errorIcon from './error-icon-25243.png'

export default function Error({ error }) {
    return (
        <div className='error'>
            <img className='error__img' src={errorIcon} alt="error" />
            <span className='error_text'>{error}</span>
        </div>
    )
}