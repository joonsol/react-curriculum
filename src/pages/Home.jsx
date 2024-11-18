import Header from "../components/Header"
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";
const Home = (params) => {
  return (
    <div>


      <Header
        leftChild={<Button text="<" />}
        title={"2024.11"}
        rightChild={<Button text=">" />}
      />
      <DiaryList />
    </div>
  )
}
export default Home;
