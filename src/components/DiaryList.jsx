import "./DiaryList.css"
import Button from "./Button";
import DiaryItem from "./DiaryItem";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const DiaryList = ({ data }) => {
  const nav = useNavigate();
  const [sortType, setSortType] = useState("latest"); // 기본 정렬 타입: 최신순
  const onChangeSortType = (e) => {
    setSortType(e.target.value); // 선택한 정렬 타입으로 업데이트
  };
  const getSortedData = () => {
    return data.toSorted((a, b) => {
      if (sortType === "oldest") {
        return Number(a.createdDate) - Number(b.createdDate); // 오래된 순 정렬
      } else {
        return Number(b.createdDate) - Number(a.createdDate); // 최신순 정렬
      }
    });
  };
  const sortData = getSortedData();
  return (
    <div className="DiaryList">
      <div className="menu_bar">
        <select  value={sortType} onChange={onChangeSortType}>
          <option value={"latest"}>최신순</option>
          <option value={"oldest"}>오래된 순</option>
        </select>
        <Button
          onClick={() => nav("/new")}
          text={"새 일기 쓰기"}
          type={"POSITIVE"} />
      </div>
      <div className="list_wrapper">
        {sortData.map((item) => (
          <DiaryItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}
export default DiaryList
