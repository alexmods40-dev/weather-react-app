import { useEffect, useState } from 'react'
import './DateAndTime.css'
import { time } from '../../utils/time.js'
import { date } from '../../utils/date.js'

export default function DateAndTime() {
    const [ now, setNow ] = useState(new Date())

    useEffect(() => {

    const interval = setInterval(() => {setNow(new Date())}, 1000)

    return () => {
        clearInterval(interval)
    }
    }, [])

    return(
        <div className='time__container'>
            <span className='time__text'>{time(now)}</span>
            <span className='date__text'>{date(now)}</span>
        </div>
    )
}