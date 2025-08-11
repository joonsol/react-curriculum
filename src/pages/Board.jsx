import React from 'react'
import { Link } from 'react-router-dom';
const Board = () => {
  const dummy = [
  { id: 1, title: "React Router 시작하기" },
  { id: 2, title: "URL 파라미터 이해하기" },
  { id: 3, title: "NavLink와 활성 스타일" },
];

  return (
    <section>
      <h1>Board</h1>
        <ul className='list'>
        {dummy.map(p => (
          <li key={p.id}>
            <Link to={`/board/${p.id}`}>{p.id} * {p.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Board