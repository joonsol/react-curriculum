import { useRef } from "react"
const FocusInput = (params) => {
    const refObj = useRef(0)
    const inputRef=useRef(null)

    const handleFocus=()=>{
        inputRef.current.focus()
    }

    console.log(refObj.current + " 랜더링");
    const onClickButton = () => {
        refObj.current++//실행 안됨
        console.log(refObj.current)//실행

    }

    return (
        <div>
            <input type="text" ref={inputRef} placeholder="Click the button to focus"/>
            <button onClick={handleFocus}>Focus input</button>
            <h1>{refObj.current}</h1>
            <button onClick={onClickButton}>ref+1</button>
        </div>
    )
}
export default FocusInput
