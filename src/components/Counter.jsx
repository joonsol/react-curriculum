import { useState } from "react";
const Counter = (params) => {
    const [count, setCount]=useState(0)

    const incrementCount=()=>{
        setCount(count+1)
    }
    const decrementCount=()=>{
        setCount(count-1)
    }
    const resetCount=()=>{
        setCount(0)
    }
  return(
    <div>
        <h1>Counter: {count}</h1>
        <button onClick={incrementCount}>Increase</button>
        <button onClick={resetCount}>reset</button>
        <button onClick={decrementCount}>Decrease</button>
    </div>
  )
}
export default Counter;
