import { useContext } from "react"
import {DiaryDispatchContext} from "../App"
import Editor from "../components/Editor"
import Header from "../components/Header"
import Button from "../components/Button"
import { useNavigate } from "react-router-dom"
const New = () => {

  const {onCreate }=useContext(DiaryDispatchContext)
  const nav =useNavigate()

  const onSubmit =(input)=>{
    onCreate(
      input.createdDate.getTime(),
      input.emotionId,
      input.content
    )
    nav("/", {replace:true})
  }
  return(
    <div>
      <Header
      leftChild={<Button text={"< 뒤로가기"}/>}
      title="새 일기 쓰기"
      />
      <Editor onSubmit={onSubmit}/>
    </div>
  )
}
export default  New;
