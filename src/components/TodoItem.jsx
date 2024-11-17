import "./TodoItem.css"
const TodoItem = ({id, isDone, content, date,onUpdate,onDelete}) => { 


  const onChangeCheckbox =()=>{
    onUpdate(id)
  }

  const onDeleteButton=()=>{
    onDelete(id)
  }
  return(
    <div className={`TodoItem ${isDone ? "done" : ""}`}>
      <input 
      onChange={onChangeCheckbox}
      type="checkbox" 
      checked={isDone} 
      readOnly/>
      <div className="content">{content}</div>
      <div className="date">
        {new Date(date).toLocaleDateString()}
        </div>
      <button onClick={onDeleteButton}>삭제</button>
    </div>
  )
 }
 export default TodoItem