import React, { useState, useRef } from 'react'
import './Timer.css'
import TimerDisplay from './TimerDisplay'
import Button from './Button'




const Timer = () => {
    const [time, setTime] = useState(0)
    const [status, setStatus] = useState('초기화')
    const intervalRef = useRef(null)

    const formatTime = () => {
        const minutes = Math.floor(time / 60)
        const seconds = time % 60
        return `${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`

    }

    const startTimer = () => {
        if (status !== '실행중') {
            setStatus('실행중')
            intervalRef.current = setInterval(() => {
                setTime(prevTime => prevTime + 1)
            }, 1000)
        }
    }
    // 타이머 일시 정지 함수
    const pauseTimer = () => {
        if (status === "실행중") {
            clearInterval(intervalRef.current)
            setStatus("일시정지")
        }
    }
    const resetTimer = () => {
        clearInterval(intervalRef.current); // 타이머 정지
        setStatus("초기화"); // 상태를 "초기화"로 설정
        setTime(0); // 시간을 0으로 초기화
    };

    const isRunning = status === '실행중'

    const buttons = [
        { className: 'start', value: '시작', onClick: startTimer },
        { className: 'pause', value: '일시 정지', onClick: pauseTimer },
        { className: 'reset', value: '초기화', onClick: resetTimer },
    ]
    return (
        <div className='timer-container'>
            <TimerDisplay
                isRunning={isRunning}
                status={status}
                time={formatTime(time)} />
            <div className="button-container">
                {buttons.map((button, index) => (
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