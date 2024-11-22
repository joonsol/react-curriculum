
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import New from './pages/New';
import Edit from "./pages/Edit"
import Diary from './pages/Diary';
import Notfound from './pages/Notfound';

import { useReducer, useRef, useEffect, useState, createContext } from 'react';
const mockData = [
  {
    id: 1,                     // 일기의 고유 ID
    createdDate: new Date("2024-11-22").getTime(), // 작성된 날짜(밀리초)
    emotionId: 1,              // 감정 ID
    content: "1번 일기 내용",   // 일기 내용
  },
  {
    id: 2,
    createdDate: new Date("2024-11-21").getTime(),
    emotionId: 2,
    content: "2번 일기 내용",
  },
  {
    id: 3,
    createdDate: new Date("2024-10-21").getTime(),
    emotionId: 4,
    content: "3번 일기 내용",
  },
];
function reducer(state, action) {
  switch (action.type) {
    case "INIT":
      return action.data;
    case "CREATE":
      return [action.data, ...state]; // 새로운 일기를 앞에 추가
    case "UPDATE":
      return state.map((item) =>
        String(item.id) === String(action.data.id) // ID가 일치하는지 확인
          ? action.data                          // ID가 일치하면 수정된 데이터로 대체
          : item                                 // 일치하지 않으면 기존 데이터 유지
      );
    case "DELETE":
      return state.filter(
        (item) => String(item.id) !== String(action.id) // id가 일치하지 않는 항목만 유지
      );
    default:
      return state;
  }
  return state;
}
export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();
function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3); // 초기값을 3으로 설정
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    dispatch({
      type: "INIT",
      data: mockData,
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
  return (

    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/diary/:id" element={<Diary />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>

  )
}

export default App
