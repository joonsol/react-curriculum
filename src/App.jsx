
import './App.css'
import { useState } from 'react'
import LifeCycle from './components/LifeCycle'
function App() {

  const [show, setShow] = useState(false)
  return (
    <div>
      <button onClick={() => setShow(prev => !prev)}>
        {show ? '언마운트' : '마운트'}
      </button>
      {
        show && <LifeCycle />
      }

    </div>
  )
}

export default App
