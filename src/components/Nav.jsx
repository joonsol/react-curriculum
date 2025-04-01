import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
    const userId=42
  return (
    <nav>
        <ul>
            <li>
                <Link to="/">home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to={`/contact/${userId}`}>Contact</Link>
            </li>
            <li>
                <Link to="/service">Service</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Nav