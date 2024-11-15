import TimerDisplay from "./TimerDisplay";
import './Timer.css'
const Timer = () => {
    return (
        <div className="timer-container">
            <TimerDisplay />
            <div className="button-container">
                <button className="start-button">시작</button>
                <button className="pause-button">일시 정지</button>
                <button className="reset-button">초기화</button>
            </div>
        </div>
    )
}
export default Timer;