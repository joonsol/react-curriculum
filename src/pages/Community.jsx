import React from 'react'
import { Link } from 'react-router-dom';
import './Community.css'

// src/mock/posts.js
export const communityPosts = [
  { id: 1, title: "React Router 시작하기", content: "라우팅 기본 개념과 설정 방법 요약." },
  { id: 2, title: "URL 파라미터 이해하기", content: "useParams로 동적 세그먼트 읽기." },
  { id: 3, title: "NavLink와 활성 스타일", content: "활성 경로에 스타일 주는 방법." },
  { id: 4, title: "중첩 라우트와 Outlet", content: "레이아웃+자식 라우트 구성." },
  { id: 5, title: "404 처리하기", content: "path='*'로 NotFound 페이지 매핑." },
];

const Community = () => {
  return (
    <section className='Community'>
      <h1>
        Community

      </h1>
      <ul className='list'>
        {communityPosts.map((b) => (
          <li key={b.id}>
            <Link to={`/community/${b.id}`}>
              <div className='num'>
                {b.id}
              </div>
              <div className='dsc'>
                {b.title}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Community