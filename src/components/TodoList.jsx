import React, { useReducer, useState } from 'react'
const reducer = (state, action) => {
    switch (action.type) {
        case "add":
            return [...state, { id: Date.now(), text: action.text, completed: false }];
        case "toggle":
            return state.map((todo) =>
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
            );
        case "delete":
            return state.filter((todo) => todo.id !== action.id);
        default:
            return state;
    }
};
const TodoList = () => {
    const [todos, dispatch] = useReducer(reducer, []);
    const [text, setText] = useState("");
    const handleAdd = () => {
        if (!text.trim()) return;
        dispatch({ type: "add", text });
        setText("");
    };
    return (
        <div>
            <h2>useReducer Todo List</h2>
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="할 일을 입력하세요"
                onKeyUp={(e) => {
                    if (e.key === 'Enter') handleAdd();
                }}
            />
            <button onClick={handleAdd}>추가</button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} style={{ margin: "5px 0" }}>
                        <span
                            onClick={() => dispatch({ type: "toggle", id: todo.id })}
                            style={{
                                cursor: "pointer",
                                textDecoration: todo.completed ? "line-through" : "none",
                            }}
                        >
                            {todo.text}
                        </span>
                        <button onClick={() => dispatch({ type: "delete", id: todo.id })}>
                            삭제
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList