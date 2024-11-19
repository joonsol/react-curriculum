import {replace, useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header"
import Button from "../components/Button"
import Editor from "../components/Editor"
import { useContext,useEffect,useState } from "react";
import { DiaryDispatchContext ,DiaryStateContext} from "../App";
import useDiary from "../hooks/useDiary";
// import {}
const Edit = () => {
  const params = useParams()
  const nav = useNavigate()
  const {onDelete,onUpdate}= useContext(DiaryDispatchContext)
  const curDiaryItem = useDiary(params.id)



  const onClickDelete=()=>{
    if(window.confirm("일기를 정말 삭제할까요?")){
      onDelete(params.id)

      nav("/", {replace:true})
    }
  }
  const onSubmit =(input)=>{
    if(window.confirm('일기를 정말 수정할까요')){
      onUpdate(
        params.id,
        input.createdDate.getTime(),
        input.emotionId,
        input.content
      )
      nav("/", {replace:true})
    }
  }
  return(
    <div>
      <Header
        title={"편집하기"}
        leftChild={<Button text={"< 뒤로가기"} onClick={()=>nav(-1)}/>}
        rightChild={<Button type="NEGATIVE" onClick={onClickDelete} text={"삭제하기"}/>}
      />
      <Editor initData={curDiaryItem} onSubmit={onSubmit}/>
    </div>
  )
}
export default Edit;
