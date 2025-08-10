import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
const BoardDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate();
  return (
    <div>
      <h1>게시글 상세</h1>
      <p>현재 글 ID: {id}</p>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
      <button onClick={() => navigate("/")}>홈으로</button>
    </div>
  )
}

export default BoardDetail