import React from 'react'
import { useState, useMemo } from 'react'

const SquareCalculator = () => {

    const [number, setNumber] = useState(0)
    const [count, setCount] = useState(0)


    const squared = useMemo(() => {
        console.log('제곱 계산중...')
        return number * number
    }, [number])


    return (
        <div style={{ padding: '2rem' }}>
            <h2>useMemo 예제: 숫자의 제곱</h2>
            <input type="text"
                value={number}
                onChange={(e) => setNumber(Number(e.target.value))}
            />
            <p>
                {number}의 제곱은 {squared}
            </p>
            <button onClick={()=>setCount(count+1)}>
                카운트 증가:{count}
            </button>
        </div>
    )
}

export default SquareCalculator