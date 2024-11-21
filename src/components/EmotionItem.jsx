import "./EmotionItem.css";
import { getEmotionImage } from "../util/getEmotionImage";

const EmotionItem = ({
  emotionId,
  emotionName,
  isSelected,
  onClick
}) => {
  return (
    <div
    onClick={onClick}
    className={`EmotionItem ${isSelected? `EmotionItem_on_${emotionId}`:""}`}>
      <img src={getEmotionImage(emotionId)} alt={emotionName} />
      <div>{emotionName}</div>
    </div>
  );
};

export default EmotionItem;
