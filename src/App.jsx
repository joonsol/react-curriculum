
import './App.css'
import {
  Routes,
  Route,

} from 'react-router-dom'
import Header from './components/Header'
import Button from './components/Button'
import Home from './pages/Home'
import New from './pages/New'
import Diary from './pages/Diary'
import Edit from './pages/Edit'
import Notfound from './pages/Notfound'
import { useReducer } from 'react';



const mockData = [
  {
    id: 1,
    createdDate: new Date().getTime(),
    emotionId: 1,
    content: "1번 일기 내용",
  },
  {
    id: 2,
    createdDate: new Date().getTime(),
    emotionId: 2,
    content: "2번 일기 내용",
  },
];

function reducer(state, action) {
  return state;
}
function App() {

  const [data, dispatch]= useReducer(reducer,mockData)
  return (
    <div>
      <Header
        leftChild={<Button text="Left" />}
        title={"Header"}
        rightChild={<Button text="right" />}
      />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='/new/:id' element={<New />} />
        <Route path='/diary/:id' element={<Diary />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
    </div>
  )
}

export default App
