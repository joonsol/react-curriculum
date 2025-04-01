import React from 'react'
import { useParams } from 'react-router-dom'

const Contact = () => {
    const params =useParams()
  return (
    <div>{params.id}의 Contact</div>
  )
}

export default Contact