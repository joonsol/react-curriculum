
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import New from './pages/New';
import Edit from "./pages/Edit"
import Diary from './pages/Diary';
import Notfound from './pages/Notfound';
import Header from "./components/Header";
import Button from "./components/Button";
function App() {

  return (
    <div>

      <Header
        title="Header"
        leftChild={<Button text="Left" />}
        rightChild={<Button text="Right" />}
      />
      {/* 다양한 스타일의 버튼 */}
      <Button text="123" onClick={() => console.log("123번 버튼 클릭!")} />
      <Button text="123" type="POSITIVE" onClick={() => console.log("POSITIVE 버튼 클릭!")} />
      <Button text="123" type="NEGATIVE" onClick={() => console.log("NEGATIVE 버튼 클릭!")} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  )
}

export default App
