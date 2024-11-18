import { useParams } from "react-router-dom";
const New = () => {
  const params = useParams()
  return(
    <div>{params.id}번호 페이지</div>
  )
}
export default  New;
