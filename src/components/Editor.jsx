import "./Editor.css"
import Button from "./Button";
import EmotionItem from "./EmotionItem";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getStringedDate } from "../util/getStringedDate";
import { emotionList  } from "../util/constants";

const Editor = ({ initData,onSubmit }) => {
  // const emotionId = 5; // 예시 감정 ID 삭제

  useEffect(()=>{
    if(initData){

      setInput({
        ...initData,
        createdDate: new Date(Number(initData.createdDate))
      })
    }
  },[initData])


  const nav = useNavigate();
  const [input, setInput] = useState({
    createdDate: new Date(), // 현재 날짜로 초기화
    emotionId: 3,            // 기본 감정 ID
    content: ""              // 초기 내용은 빈 문자열
  });


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
    console.log("onSubmit called with input:", input); // 디버깅용 로그
    if (onSubmit) {
      onSubmit(input);
    } else {
      console.error("onSubmit 함수가 전달되지 않았습니다.");
    }
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
