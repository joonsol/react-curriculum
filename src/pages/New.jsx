import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useNavigate } from "react-router-dom";
import { useContext ,useState} from "react"
import {DiaryDispatchContext} from "../App"
const New = (params) => {
  const nav = useNavigate(); // 네비게이션 객체 생성
  const {onCreate}=useContext(DiaryDispatchContext)


  const onSubmit =(input)=>{
    onCreate(
      input.createdDate.getTime(),
      input.emotionId,
      input.content
    )
    nav("/",{replace:true})
  }
  return(
    <div>
    <Header
      title={"새일기 쓰기"}
      leftChild={<Button text={"< 뒤로가기"} />} // 뒤로가기 버튼
    />
     <Editor onSubmit={onSubmit}/>
  </div>
  )
}
export default New