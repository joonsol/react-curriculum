
import { useState } from "react"
const Exam2 = () => {
  const [text, setText]=useState("hello")

  const onClickButton=()=>{
    /*조건문이용*/
    // if(text==="hello"){
    //   setText("goodbye")
    // }
    // else{
    //   setText("hello")

    // }
    //3항연산자
    text==="hello"? setText("goodbye"):setText("hello")
  }
  return(
    <div>
      <h1>버튼 바뀌게 해보기</h1>
      <p>text : {text}</p>
      <button onClick={onClickButton}>click</button>
    </div>
  )
}
export default Exam2