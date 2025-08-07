import React, { useState, useMemo } from 'react'




const SortableList = () => {
    const [keyword, setKeyword] = useState('');
    const [names] = useState(['David', 'Alice', 'Charlie', 'Bob']);


    const filtered = useMemo(() => {
        console.log("정렬필터중")
        return names
            .filter((name) => name.toLowerCase().includes(keyword.toLowerCase()))
            .sort()
    }, [keyword, names])
    return (
        <div>
            <h2>useMemo 예제: 정렬 리스트</h2>
            <input type="text" placeholder='이름검색' value={keyword}
            onChange={(e)=>setKeyword(e.target.value)}
            />
            <ul>
                {filtered.map((name, index)=>(
                    <li key={index}>
                        {name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SortableList