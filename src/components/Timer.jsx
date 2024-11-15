import TimerDisplay from "./TimerDisplay";
import { useState,useRef } from "react";
import './Timer.css'
const Timer = () => {
    const [time, setTime] = useState(0)
    const [status, setStatus]=useState("초기화")
    const intervalRef = useRef(null)

    const startTimer =()=>{
        if(status!=="실행중"){
            setStatus("실행중");
            intervalRef.current=setInterval(()=>{
                setTime(prevTime=>prevTime + 1)
            },1000)
        }
    }

    const pauseTimer =()=>{
        if(status==="실행중"){
            clearInterval(intervalRef.current)
            setStatus("일시정지")
        }
    }
    const resetTimer =()=>{

            clearInterval(intervalRef.current)
            setStatus("초기화")
            setTime(0)
    }

    const isRunning = status==="실행중"
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60)
        const seconds = time % 60
        return `${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`
    }
    return (
        <div className="timer-container">
            <TimerDisplay
            time={formatTime(time)}
            isRunning={isRunning}
            status={status}
            />
            <div className="button-container">
                <button className="start-button" onClick={startTimer}>시작</button>
                <button className="pause-button" onClick={pauseTimer}>일시 정지</button>
                <button className="reset-button" onClick={resetTimer}>초기화</button>
            </div>
        </div>
    )
}
export default Timer;