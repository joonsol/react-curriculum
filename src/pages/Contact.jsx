import React from 'react'
import { useParams } from 'react-router-dom'

const Contact = () => {
// const params = useParams()
const {id}=useParams()
    return (
        // <div>{params.id}페이지</div>
        <div>{id}페이지</div>
  )
}

export default Contact