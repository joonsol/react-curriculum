
import Editor from "../components/Editor"
import Header from "../components/Header"
import Button from "../components/Button"
const New = () => {



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
