import Header from "../components/Header";
import Button from "../components/Button";
import { useState, useContext } from "react";
import { DiaryStateContext } from "../App";
import DiaryList from "../components/DiaryList";
const getMonthlyData = (pivotDate, data) => {
  const beginTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    1,
    0,
    0,
    0
  ).getTime();
  const endTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1,
    0,
    23,
    59,
    59
  ).getTime();

  return data.filter(
    (item) => beginTime <= item.createdDate && item.createdDate <= endTime
  );
};
const Home = (params) => {
  const data = useContext(DiaryStateContext);
  const [pivotDate, setPivotDate] = useState(new Date());
  const onIncreaseMonth = () => {
    setPivotDate(
      new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1) // 다음 달로 이동
    );
  };

  const onDecreaseMonth = () => {
    setPivotDate(
      new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1) // 이전 달로 이동
    );
  };

  const monthlyData = getMonthlyData(pivotDate, data); // 특정 월의 데이터 필터링

  return (
    <div>
        <Header
      title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
      leftChild={<Button onClick={onDecreaseMonth} text={"<"} />} // 이전 달로 이동
      rightChild={<Button onClick={onIncreaseMonth} text={">"} />} // 다음 달로 이동
    />
    <DiaryList data={monthlyData} /> {/* 특정 월의 데이터 */}
    </div>
  )
}
export default Home