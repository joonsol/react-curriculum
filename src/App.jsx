
import './App.css'
import Exam1 from './components/Exam1'
import Exam2 from './components/Exam2'
import Exam3 from './components/Exam3'
function App() {

  const info={
    name:"Elice",
    age:20
  }

  return (
    <div>
      <Exam3/>
      <Exam2/>
      <Exam1 {...info}/>
    </div>
  )
}

export default App
