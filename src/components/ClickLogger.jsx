import React ,{useState,useRef}from 'react'

const ClickLogger = () => {
    const clickCount =useRef(0)
    const [text, setText]=useState("")


    const handleClick=()=>{
        clickCount.current +=1
        setText(`버튼이 ${clickCount.current}번 클릭`)
    }
  return (
    <div>
        <p>
            {text}

        </p>
        <button onClick={handleClick}>click</button>
    </div>
  )
}

export default ClickLogger