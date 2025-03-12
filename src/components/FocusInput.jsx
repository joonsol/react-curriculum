import React ,{useRef} from 'react'

const FocusInput = () => {
    const inputRef = useRef(null)

    const focusInput=()=>{
        inputRef.current.focus()
    }
  return (
    <div>
        <input type="text" ref={inputRef} placeholder='클릭하면 포커스' />
        <button onClick={focusInput}>포커스</button>
    </div>
  )
}

export default FocusInput