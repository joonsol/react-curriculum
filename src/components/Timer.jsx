import TimerDisplay from "./TimerDisplay";
import { useState } from "react";
import './Timer.css'
const Timer = () => {
    const [time, setTime] = useState(0)


    const formatTime = (time) => {
        const minutes = Math.floor(time / 60)
        const seconds = time % 60
        return `${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`
    }
    return (
        <div className="timer-container">
            <TimerDisplay  time={formatTime(time)}/>
            <div className="button-container">
                <button className="start-button">시작</button>
                <button className="pause-button">일시 정지</button>
                <button className="reset-button">초기화</button>
            </div>
        </div>
    )
}
export default Timer;