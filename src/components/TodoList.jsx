import "./TodoList.css";
import TodoItem from "./TodoItem";

const TodoList = ({ todos }) => {
  return (
    <div className="TodoList">
      <h4>Todo List 🌱</h4>
      <input placeholder="검색어를 입력하세요" />
      <div className="todos_wrapper">
        {todos.map((todo) => {
          return <TodoItem {...todo} key={todo.id} />; // 각 항목을 TodoItem으로 렌더링
        })}
      </div>
    </div>
  );
};

export default TodoList;
