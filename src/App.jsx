
import './App.css'
import Button from './components/Button'
import InputComponent from './components/InputComponent'
function App() {


  const buttonProps={
    text:"뉴스",
    color:"blue",
    a:1,
    b:2
  }
  return (
    <div>
      <InputComponent inputValue={"hello react"}/>
      <Button {...buttonProps}/>
      <Button text={"카페"}/>
      <Button text={"블로그"}>
        <strong>중요</strong>
        </Button>
    </div>
  )
}

export default App
