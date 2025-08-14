import React from 'react'
import AboutHero from './about/AboutHero';
import './About.css'
const About = () => {
   const infoList = [
    { id: 1, label: "회사명", desc: "React 학습 센터" },
    { id: 2, label: "위치", desc: "서울특별시 중구" },
    { id: 3, label: "설립연도", desc: "2020년" },
    { id: 4, label: "주요 서비스", desc: "웹 개발 교육, 프로젝트 멘토링" },
    { id: 5, label: "연락처", desc: "contact@example.com" },
    { id: 6, label: "대표자", desc: "홍길동" } // 새 데이터 추가
  ];
  return (
    <section className='about'>
      <h1>about Page</h1>
      <AboutHero/>
      <ul className="list">
        {infoList.map(i=>(
          <li key={i.id}>
            {i.id} - {i.label} -             {i.desc}
            </li>
        ))}
      </ul>
    </section>
  )
}

export default About