import React from 'react'
import './Footer.css'
import {snsLinks} from '../data/sns'
const Footer = () => {
  return (
    <footer>
        <h2>title</h2>
        <ul className="sns-list">
            {snsLinks.map((sns)=>(
                <li key={sns.id}>
                    <a href={sns.url} target='_blank'>
                        <img src={sns.icon} alt={sns.name} />
                        <span>{sns.name}</span>
                    </a>
                </li>
            ))}
        </ul>
    </footer>
  )
}

export default Footer