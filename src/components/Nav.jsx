import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  return (
    <nav>
      <NavLink to="/">홈</NavLink>
      <NavLink to="/about">소개</NavLink>
      <NavLink to="/community">커뮤니티</NavLink>
      <NavLink to="/board">게시판리스트</NavLink>
    </nav>
  )
}

export default Nav