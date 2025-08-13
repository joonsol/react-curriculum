import React, { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'

const Display = () => {
    const {count} =useContext(CounterContext)
  return (
    <div>현재 카운드 {count}</div>
  )
}

export default Display