
import './App.css'
import {   Routes,
  Route,
  Link,
 } from 'react-router-dom'
import Header from './components/Header'
import Button from './components/Button'
import Home from './pages/Home'
import New from './pages/New'
import Diary from './pages/Diary'
import Edit from './pages/Edit'
import Notfound from './pages/Notfound'
import { getEmotionImage } from './util/getEmotionImage'
function App() {

  return (
    <div>
      <Header
      leftChild={<Button text="Left"/>}
      title={"Header"}
      rightChild={<Button text="right"/>}
      />

      <Button text="123" type="POSITIVE" onClick={()=>console.log('positive')}/>
      <Button text="456" type="NEGATIVE" onClick={()=>console.log('negative')}/>
      <div>
        <img src={getEmotionImage(1)} alt="Emotion 1" />
        <img src={getEmotionImage(2)} alt="Emotion 2" />
        <img src={getEmotionImage(3)} alt="Emotion 3" />
        <img src={getEmotionImage(4)} alt="Emotion 4" />
        <img src={getEmotionImage(5)} alt="Emotion 5" />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='/new/:id' element={<New />} />
        <Route path='/diary/:id' element={<Diary />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
    </div>
  )
}

export default App
