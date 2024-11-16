import "./TodoItem.css";

const TodoItem = ({ id, isDone, content, date }) => {
  return (
    <div className="TodoItem">
      <input readOnly checked={isDone} type="checkbox" /> {/* 완료 상태 */}
      <div className="content">{content}</div>            {/* 할 일 내용 */}
      <div className="date">{new Date(date).toLocaleDateString()}</div> {/* 날짜 */}
      <button>삭제</button>                              {/* 삭제 버튼 */}
    </div>
  );
};


export default TodoItem;
