import './TodoEditor.css';
import { useRef, useState } from "react";
const TodoEditor = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const inputRef = useRef(3);

  const onChangeContent = (e) => {
    setContent(e.target.value); // 입력 필드의 변경된 값을 content에 반영
  };
  const onSubmit = () => {
    if (content === "") {        // 입력 내용이 비어 있는지 확인
      inputRef.current.focus();  // 비어 있을 경우 입력 필드로 포커스 이동
      return;
    }
    onCreate(content);           // 유효한 내용이 있으면 할 일 추가
    setContent("");              // 추가 후 입력 필드 초기화
  };

  const onKeydown = (e) => {
    if (e.keyCode === 13) { // Enter 키 확인
      onSubmit();           // Enter 키가 눌리면 onSubmit 호출
    }
  };

  return (
    <div className="Editor">
      <input
       onKeyDown={onKeydown}
        ref={inputRef}  //아이디값
        value={content}              // 상태에 따른 입력 값 설정
        onChange={onChangeContent}    // 입력 내용이 변경될 때 onChangeContent 호출
        placeholder="새로운 Todo..."  // 안내 문구
      />

      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default TodoEditor;
