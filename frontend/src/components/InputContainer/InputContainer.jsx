import './InputContainer.css'
import Button from '../Button/Button'


export default function InputContainer({ city, onCityChange, onRefresh, loading }) {

    return(
        <div className='input__container'>
            <input placeholder="City" type="text" value={city} onChange={onCityChange} className="input" />
            <Button loading={loading} onClick={onRefresh}/>
        </div>
    )
}