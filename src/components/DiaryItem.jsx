import { getEmotionImage } from "../util/getEmotionImage";
import Button from "./Button";
import "./DiaryItem.css";
import { useNavigate } from "react-router-dom";
const DiaryItem = ({ id, emotionId, createdDate, content}) => {
  const nav = useNavigate();
  return (
    <div className="DiaryItem">
      <div
        onClick={() => nav(`/diary/${id}`)}
      className={`img_section img_section_${emotionId}`}>
        <img src={getEmotionImage(emotionId)} alt="Emotion Icon" />
      </div>
      <div className="info_section"   onClick={() => nav(`/diary/${id}`)}>
        <div className="created_date">
          {new Date(createdDate).toLocaleDateString()} {/* 현재 날짜 표시 */}
        </div>
        <div className="content">{content}</div> {/* 일기 내용 요약 */}
      </div>
      <div className="button_section">
        <Button   onClick={() => nav(`/edit/${id}`)}  text={"수정하기"} /> {/* "수정하기" 버튼 */}
      </div>
    </div>
  );
};

export default DiaryItem;
