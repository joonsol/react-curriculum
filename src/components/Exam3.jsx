
import { useState } from "react"
const Exam3 = () => {
const [input, inputState]=useState("")

const onChangeInput=(e)=>{
inputState(e.target.value)
}
  return(
    <div>
      <h1>연습문제 실습</h1>
      <p>내가한 말: {input}</p>
      <input type="text" value={input} placeholder="입력하세요" onChange={onChangeInput}/>
    </div>
  )
}
export default Exam3