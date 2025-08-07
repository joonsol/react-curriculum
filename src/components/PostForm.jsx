import React, { useState } from 'react'
import axios from 'axios'
const PostForm = () => {

  const [title, setTitle] = useState('')
  const [result, setResult] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title,
        body: '내용입니다.',
        userId: 1
      })
      setResult(res.data)
      setTitle('')
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div>
      <h2>게시글 등록</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
        <button type='submit'>등록</button>
      </form>
      {result && <pre>{JSON.stringify(result,null,2)}</pre>}
    </div>
  )
}

export default PostForm