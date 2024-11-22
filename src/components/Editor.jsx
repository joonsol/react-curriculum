import "./Editor.css"
import Button from "./Button";
import EmotionItem from "./EmotionItem";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const emotionList = [
  { emotionId: 1, emotionName: "완전 좋음" },
  { emotionId: 2, emotionName: "좋음" },
  { emotionId: 3, emotionName: "그럭저럭" },
  { emotionId: 4, emotionName: "나쁨" },
  { emotionId: 5, emotionName: "끔찍함" },
];
const getStringedDate = (targetDate) => {
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  if (month < 10) {
    month = `0${month}`;
  }
  if (date < 10) {
    date = `0${date}`;
  }

  return `${year}-${month}-${date}`;
};
const Editor = ({ onSubmit }) => {
  // const emotionId = 5; // 예시 감정 ID 삭제
  const [input, setInput] = useState({
    createdDate: new Date(), // 현재 날짜로 초기화
    emotionId: 3,            // 기본 감정 ID
    content: ""              // 초기 내용은 빈 문자열
  });
  const nav = useNavigate();
  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "createdDate") {
      value = new Date(value); // 문자열을 Date 객체로 변환
    }

    setInput({
      ...input,
      [name]: value,
    });
  };
  const onSubmitButtonClick = () => {
    onSubmit(input)
  }
  return (
    <div className="Editor">
      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input
          name="createdDate"
          onChange={onChangeInput}
          value={getStringedDate(input.createdDate)}
          type="date" /> {/* 날짜 입력 필드 */}
      </section>
      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_list_wrapper">
          {emotionList.map((item) => (
            <EmotionItem
              onClick={() =>
                onChangeInput({
                  target: {
                    name: "emotionId",
                    value: item.emotionId
                  }
                })
              }
              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === input.emotionId}
              />
            ))}
            {/*   input.emotionId 오타주의 */}
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea
          name="content"
          value={input.content}
          onChange={onChangeInput}
        placeholder="오늘은 어땠나요?" /> {/* 일기 작성 텍스트 필드 */}
      </section>
      {/* 버튼 섹션 */}
      <section className="button_section">
        <Button
          onClick={() => nav(-1)}
          text={"취소하기"}
        />
        <Button text={"작성완료"} type={"POSITIVE"} onClick={onSubmitButtonClick} />
      </section>
    </div>
  )
}
export default Editor
