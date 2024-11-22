import "./EmotionItem.css"
import { getEmotionImage } from "../util/getEmotionImage";
const EmotionItem = ({
  emotionId,
  emotionName,
  isSelected,
}) => {
  return (
    <div className={`EmotionItem ${isSelected ? `EmotionItem_on_${emotionId}` : ""
      }`}
    >
      <img
        className="emotion_img"
        src={getEmotionImage(emotionId)} alt={emotionName} />
      <div>{emotionName}</div>
    </div>
  )
}
export default EmotionItem
