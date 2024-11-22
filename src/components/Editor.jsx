import "./Editor.css"
import Button from "./Button";
import EmotionItem from "./EmotionItem";
const emotionList = [
  { emotionId: 1, emotionName: "완전 좋음" },
  { emotionId: 2, emotionName: "좋음" },
  { emotionId: 3, emotionName: "그럭저럭" },
  { emotionId: 4, emotionName: "나쁨" },
  { emotionId: 5, emotionName: "끔찍함" },
];
const Editor = (params) => {
  const emotionId = 5; // 예시 감정 ID
  return (
    <div className="Editor">
      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input type="date" /> {/* 날짜 입력 필드 */}
      </section>
      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_list_wrapper">
          {emotionList.map((item) => (
            <EmotionItem
              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === emotionId}
            />
          ))}
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea placeholder="오늘은 어땠나요?" /> {/* 일기 작성 텍스트 필드 */}
      </section>
      {/* 버튼 섹션 */}
      <section className="button_section">
        <Button text={"취소하기"} /> {/* 취소 버튼 */}
        <Button text={"작성완료"} type={"POSITIVE"} /> {/* 작성 완료 버튼 */}
      </section>
    </div>
  )
}
export default Editor
