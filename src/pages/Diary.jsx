import { useParams } from 'react-router-dom';

const Diary = () => {
  const params = useParams(); // URL의 매개변수를 가져옴
  console.log(params);


  return (
    <div>
    <div>{params.id}번호페이지</div>
    </div>
  );
};

export default Diary;
