
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Service from './pages/Service'
function App() {

  return (
    <div>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact/:id' element={<Contact/>} />
        <Route path='/service' element={<Service/>} />
        <Route path='/*' element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </div>
  )
}

export default App
