import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
function App() {

  return (
    <div>

      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact/:id" element={<Contact/>}/>
        <Route path="/*" element={<h1>404 Page Not Found</h1>}/>
      </Routes>

    </div>
  )
}

export default App
