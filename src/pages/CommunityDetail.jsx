import React from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'

const CommunityDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  return (
    <div>
      <h2>
        {id}번 커뮤니티의 페이지
      </h2>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
      <button onClick={() => navigate("/")}>홈으로</button>

    </div>

  )
}

export default CommunityDetail