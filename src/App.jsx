
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
import { createContext } from 'react'
import { useReducer, useRef, useContext } from 'react';



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
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state]
    case "UPDATE":
      return state.map((item) =>
        String(item.id) === String(action.data.id) ?
          action.data : item
      )
    case "DELETE":
      return state.filter(
        (item) => String(item.id) !== String(action.id)
      )
    default: return state;
  }


  return state;
}
const DiaryStateContext = createContext();
const DiaryDispatchContext = createContext();
function App() {
  const [data, dispatch] = useReducer(reducer, mockData)
  const idRef = useRef(3)


  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content
      },

    })
  }
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id: id,
        createdDate,
        emotionId,
        content
      },

    })
  }
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id,
    })
  }

  return (
    <div>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider
          value={{
            onCreate,
            onUpdate,
            onDelete,
          }}
        >
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/edit/:id' element={<Edit />} />
            <Route path='/new/:id' element={<New />} />
            <Route path='/diary/:id' element={<Diary />} />
            <Route path='*' element={<Notfound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </div>
  )
}

export default App
