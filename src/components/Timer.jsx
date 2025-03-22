import React,{useState} from 'react'
import './Timer.css'
import TimerDisplay from './TimerDisplay'
import Button from './Button'


    

const Timer = () => {
    const [time, setTime]=useState(0)

    const formatTime=()=>{
        const minutes = Math.floor(time/60)
        const seconds =time%60
        return `${minutes.toString().padStart(2,'0')} : ${seconds.toString().padStart(2,'0')}`

    }


    const buttons=[

        {
            className:'start',
            value:'시작'
        },

        {
            className:'pause',
            value:'일시 정지'
        },

        {
            className:'reset',
            value:'초기화'
        },
        
    ]
  return (
    <div className='timer-container'>
        <TimerDisplay time={formatTime(time)}/>
        <div className="button-container">
            {buttons.map((button,index)=>(
                <Button 
                key={index}
                className={button.className}
                value={button.value}
                />

            ))

            }
        </div>
    </div>
  )
}

export default Timer