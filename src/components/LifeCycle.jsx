import React, { useEffect, useState } from 'react'

const LifeCycle = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('mount')
        return () => {
            console.log('unmount')
        }
    }, [])

    // update
    useEffect(() => {
        if (count > 0) {
            console.log(`count update:${count}`)
        }
    }, [count])
    return (
        <div>
            <p>
                클릭수: {count}
            </p>
            <button onClick={()=>setCount(prev=>prev+1)}>클릭</button>
        </div>
    )
}

export default LifeCycle