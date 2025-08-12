import { useReducer } from 'react'
// Reducer 함수 정의
const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 };
        case "decrement":
            return { count: state.count - 1 };
        case "reset":
            return { count: 0 };
        default:
            throw new Error("Unhandled action type");
    }
};
const Counter = () => {
    const initialState = { count: 0 };
    // useReducer 호출
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: "increment" })}>+</button>
            <button onClick={() => dispatch({ type: "decrement" })}>-</button>
            <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        </div>
    )
}

export default Counter