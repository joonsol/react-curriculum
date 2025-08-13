import React, { useContext, useState } from 'react'
import { MyContext } from '../context/MyContext'

const MyComponent = () => {
    const { value, setValue } = useContext(MyContext)
    return (
        <div>
            <p>
                {value}
            </p>
            <button onClick={()=>setValue("Update from MyComponent!")}>update</button>
        </div>
    )
}

export default MyComponent