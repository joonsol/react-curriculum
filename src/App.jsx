
import './App.css'
import { Routes, Route} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import New from './pages/New'
import Diary from './pages/Diary'
import Edit from './pages/Edit'
import Notfound from './pages/Notfound'

function App() {

  const nav = useNavigate()

  const onClickButton=()=>{
    nav('/new')
  }
  return (
    <div>
      <button onClick={onClickButton}>click</button>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/edit/:id' element={<Edit/>}/>
      <Route path='/new/:id' element={<New/>}/>
      <Route path='/diary/:id' element={<Diary />}/>
      <Route path='*' element={<Notfound/>}/>
    </Routes>
    </div>
  )
}

export default App
