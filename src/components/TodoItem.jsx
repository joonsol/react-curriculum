import "./TodoItem.css";

const TodoItem = ({ id, isDone, content, date, onUpdate }) => {

  const onChangeCheckbox = () => {
    onUpdate(id); // 클릭된 항목의 ID를 전달
  };

  return (
    <div className="TodoItem">
      <input
        onChange={onChangeCheckbox} // 체크박스 상태 변경 시 호출
        readOnly
        checked={isDone}           // 현재 isDone 상태 반영
        type="checkbox"
      />
      <div className="content">{content}</div>            {/* 할 일 내용 */}
      <div className="date">{new Date(date).toLocaleDateString()}</div> {/* 날짜 */}
      <button>삭제</button>                              {/* 삭제 버튼 */}
    </div>
  );
};


export default TodoItem;
