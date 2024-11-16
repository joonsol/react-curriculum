import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact"
import Navbar from './components/Navbar';
function App() {
  return (
    <div>
      <h1>hello route</h1>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/> } />
        <Route path='/contact/:id' element={<Contact/> } />
        <Route path='/about' element={<About/> } />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />

      </Routes>
    </div>
  )
}

export default App
