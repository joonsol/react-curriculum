
const TimerDisplay =({time,isRunning,status})=>{
    return(
      <div className="timer-display">
        <div className="time">{time}</div>
        <div className={`timer-status  ${status==='실행중'? 'running':status==='일시정지'?'paused':'reset'}`}>

        </div>
      </div>
    )
  }
  export default TimerDisplay;