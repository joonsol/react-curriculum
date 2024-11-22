import "./Diary.css"
import { useParams } from 'react-router-dom';
const Diary = () => {
  const params = useParams(); // URL의 매개변수를 가져옴
  console.log(params); // { id: 'URL에서 전달된 값' }
  return(
    <div>{params.id}번 페이지 Diary</div>
  )
}
export default Diary