import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
const BoardDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate();
  return (
    <section>
      <h1>Board Detail</h1>
      <p>현재 글 ID: {id}</p>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
      <button onClick={() => navigate("/")}>홈으로</button>
    </section>
  )
}

export default BoardDetail