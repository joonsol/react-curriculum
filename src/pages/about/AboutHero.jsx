import React from 'react'
import { aboutSlides } from '../../data/aboutSlide'

import { Swiper, SwiperSlide } from 'swiper/react'           // Swiper 컴포넌트
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules' // 필요한 모듈들
import 'swiper/css'                                          // Swiper 기본 CSS
import 'swiper/css/navigation'                               // 네비게이션(좌우) CSS
import 'swiper/css/pagination'
import './AboutHero.css'
const AboutHero = () => {
    return (
        <div className="about-slider-wrap">
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {aboutSlides.map(({ id, img, title, subtitle, href }) => {
                    const card = (
                        <figure className="slide-card">
                            <div
                                className="slide-bg"                         // 배경이미지 컨테이너
                                role="img"                                   // 접근성: 이미지 역할
                                aria-label={title}                    // 접근성: 대체 텍스트
                            // 인라인 스타일로 배경이미지 적용
                            />

                            <div className="slide-overlay" />              {/* 어둡게 오버레이(텍스트 가독성) */}
                            <figcaption className="slide-caption">         {/* 슬라이드 상단/하단 텍스트 영역 */}
                                <h2>{title}</h2>                             {/* 제목 */}
                                <p>{subtitle}</p> {/* 부제목(있을 때만 표시) */}
                            </figcaption>
                        </figure>
                    )
                    return (

                        <SwiperSlide key={id} >
                            <a style={{ backgroundImage: `url(${img})` }}
                                href={href}
                                className="slide-link"
                            >
                                {card}
                            </a>
                        </SwiperSlide>
                    )
                }
                )}
            </Swiper>
        </div>
    )
}

export default AboutHero