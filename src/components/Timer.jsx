import React from 'react'
import './Timer.css'
import TimerDisplay from './TimerDisplay'
import Button from './Button'

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
    

const Timer = () => {
  return (
    <div className='timer-container'>
        <TimerDisplay/>
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