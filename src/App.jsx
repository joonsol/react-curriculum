
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Notfound from './pages/Notfound'
import Board from './pages/Board'
import Nav from './components/Nav'
import BoardDetail from './pages/BoardDetail'
import Community from './pages/Community'
import CommunityDetail from './pages/CommunityDetail'
function App() {

  return (
    <div className='app'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/board' element={<Board />} />
        <Route path='/board/:id' element={<BoardDetail />} />
        <Route path='/about' element={<About />} />
        <Route path='/community' element={<Community />} />
        <Route path='/community/:id' element={<CommunityDetail />} />
        <Route path='*' element={<Notfound />} />
      </Routes>


    </div>
  )
}

export default App
