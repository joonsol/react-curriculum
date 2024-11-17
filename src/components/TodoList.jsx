import TodoItem from "./TodoItem";
import "./TodoList.css";
import { useState } from "react";
const TodoList = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };


  
  const filteredTodos = getFilteredData();
// 작업 수 계산

const totalTodos = todos.length;
const compeletedTodos = todos.filter(todo=>todo.isDone).length
const incompletedTodos = todos.filter(todo=>!todo.isDone).length


  return (
    <div className="TodoList">
      <h4>Todo List 🌱</h4>
      <input
        value={search}
        onChange={onChangeSearch}
        type="text"
        placeholder="검색어를 입력하세요"
      />
      <div className="todo-stats">
        <div>전체 작업: {totalTodos}</div>
        <div>완료된 작업: {compeletedTodos}</div>
        <div>미완료 작업: {incompletedTodos}</div>
      </div>
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return (
            <TodoItem
              onUpdate={onUpdate}
              onDelete={onDelete}
              {...todo}
              key={todo.id}
            />
          );
        })}
      </div>
    </div>
  );
};
export default TodoList;
