import "./TodoList.css";
import TodoItem from "./TodoItem";
import { useState } from "react";

const TodoList = ({ todos, onUpdate }) => {

  const [search, setSearch] = useState("");



  const onChangeSearch = (e) => {
    setSearch(e.target.value); // 입력 값으로 검색어 상태 업데이트
  };
  const getFilteredData = () => {
    if (search === "") {
      return todos; // 검색어가 없으면 전체 할 일 목록 반환
    }
    return todos.filter((todo) =>
      todo.content
        .toLowerCase()
        .includes(search.toLowerCase()) // 대소문자 구분 없이 검색어 포함하는 항목 필터링
    );
  };

  const filteredTodos = getFilteredData();
  return (
    <div className="TodoList">
      <h4>Todo List 🌱</h4>
      <input
        value={search}
        onChange={onChangeSearch} // 입력 시 상태 업데이트
        placeholder="검색어를 입력하세요"
      />

      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              onUpdate={onUpdate} // 각 TodoItem에 onUpdate 전달
            />
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
