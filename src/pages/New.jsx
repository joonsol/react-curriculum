import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
const New = (params) => {

  return(
    <div>
    <Header
      title={"새일기 쓰기"}
      leftChild={<Button text={"< 뒤로가기"} />} // 뒤로가기 버튼
    />
    <Editor /> {/* 일기 작성 컴포넌트 */}
  </div>
  )
}
export default New