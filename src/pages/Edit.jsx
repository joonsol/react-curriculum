import { useParams } from "react-router-dom";
const Edit = () => {
  const params = useParams()
    return(
    <div>{params.id}번호의 편집페이지</div>
  )
}
export default Edit;
