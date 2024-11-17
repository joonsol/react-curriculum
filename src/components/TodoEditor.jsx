import './TodoEditor.css'
import { useRef,useState } from 'react'
const TodoEditor = ({onCreate}) => { 

const [content, setContent]=useState("")
const inputRef =useRef(3)

const onChangeContent=(e)=>{
  setContent(e.target.value)
}

const onSubmit=()=>{
  if(content===""){
    inputRef.current.focus();
    return
  }
  onCreate(content)
  setContent("")
}

const onKeydown=(e)=>{
  if(e.keyCode===13){
    onSubmit()
  }

}

  return(
    <div className='TodoEditor'>
      <input 
      onKeyDown={onKeydown}
      ref={inputRef}
      value={content}
      onChange={onChangeContent}
      type="text" 
      placeholder='새로운 Todo' />
      <button onClick={onSubmit}>추가</button>
    </div>
  )
 }
 export default TodoEditor