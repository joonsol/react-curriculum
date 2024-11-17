import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact/:id" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
