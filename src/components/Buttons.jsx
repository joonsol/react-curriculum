import React, { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'
const Buttons = () => {
    const { setCount } = useContext(CounterContext)
    return (
        <div>
            <button onClick={() => setCount(prev => prev + 1)}>+1</button>
            <button onClick={() => setCount(prev => prev - 1)}>-1</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    )
}

export default Buttons