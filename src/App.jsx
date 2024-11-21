
import './App.css'
import {
  Routes,
  Route,

} from 'react-router-dom'
import { useReducer, useRef, createContext, useState, useEffect } from 'react';

import Home from './pages/Home'
import New from './pages/New'
import Diary from './pages/Diary'
import Edit from './pages/Edit'
import Notfound from './pages/Notfound'





function reducer(state, action) {
  let nextState;
  switch (action.type) {
    case "INIT":
      return action.data;
    case "CREATE":
      nextState = [action.data, ...state]; // 새로운 일기를 앞에 추가
      break;
    case "UPDATE":
      nextState = state.map((item) =>
        String(item.id) === String(action.data.id) // ID가 일치하는지 확인
          ? action.data                          // ID가 일치하면 수정된 데이터로 대체
          : item                                 // 일치하지 않으면 기존 데이터 유지
      );
      break
    case "DELETE":
      nextState = state.filter(
        (item) => String(item.id) !== String(action.id) // id가 일치하지 않는 항목만 유지
      );
      break
    default:
      return state;
  }
  localStorage.setItem("diary", JSON.stringify(nextState))
  return nextState;
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();
function App() {

  const [data, dispatch] = useReducer(reducer, [])
  const idRef = useRef(0);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const storedData = localStorage.getItem("diary");
    if (!storedData) {
      setIsLoading(true);
      return;
    }
    const parsedData = JSON.parse(storedData);
    if (!Array.isArray(parsedData)) {
      setIsLoading(false);
      return;
    }
    let maxId = 0;
    parsedData.forEach((item) => {
      if (Number(item.id) > maxId) {
        maxId = item.id;
      }
    });
    idRef.current = maxId + 1;
    dispatch({
      type: "INIT",
      data: parsedData,
    })
    setIsLoading(true)
  }, [])
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content
      }
    });
  };

  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,           // 수정할 일기의 고유 ID
        createdDate,  // 수정된 작성 날짜
        emotionId,    // 수정된 감정 ID
        content       // 수정된 일기 내용
      }
    });
  };

  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id
    });
  };

  if (!isLoading) {
    return <div>데이터를 불러오는 중입니다.</div>
  }
  else {

    return (
      <div>

        <DiaryStateContext.Provider value={data}>
          <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/edit/:id' element={<Edit />} />
              <Route path='/new' element={<New />} />
              <Route path='/diary/:id' element={<Diary />} />
              <Route path='*' element={<Notfound />} />
            </Routes>
          </DiaryDispatchContext.Provider>
        </DiaryStateContext.Provider>
      </div>
    )
  }
}

export default App
