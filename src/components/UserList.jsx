import React ,{useState,useEffect}from 'react'
import axios from 'axios'
const UserList = () => {
  const [users, setUsers]=useState([])
  const [loading, setLoading]=useState(true)
  const [error, setError]=useState(null)

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res)=>{
      setUsers(res.data)
      setLoading(false)
    })
    .catch((err)=>{
      console.error(err)
      setError('데이터를 가져오지 못했습니다.')
      setLoading(false)
    })
  },[])

  if(loading) return <div>로딩중</div>
  if(error) return <div>{error}</div>
  return (
    <div>
      <h2>사용자 목록</h2>
      <ul>
        {users.map((user)=>(
          <li key={user.id}>
            {user.name}({user.email})
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserList