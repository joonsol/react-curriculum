import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'           // Swiper 컴포넌트
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules' // 필요한 모듈들
import 'swiper/css'                                          // Swiper 기본 CSS
import 'swiper/css/navigation'                               // 네비게이션(좌우) CSS
import 'swiper/css/pagination'                               // 페이징 점 CSS
import './HomeSlider.css'                                    // 커스텀 스타일
import { homeSlides } from '../data/homeSlide'               // 슬라이드 데이터 배열

const HomeSlider = () => {
  return (
    <div className="slider-wrap">                            {/* 전체 슬라이더 래퍼(스타일용) */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay, A11y]}   // 사용할 Swiper 모듈 등록
        navigation                                           // 좌우 화살표(기본 버튼) 활성화
        pagination={{ clickable: true }}                     // 하단 점(클릭 가능)
        // autoplay={{ delay: 3000 }}                        // 자동 넘김(원하면 주석 해제)
        loop                                                 // 무한 루프
        slidesPerView={1}                                    // 한 화면에 1장
        a11y={{ enabled: true }}                             // 접근성 옵션
      >
        {homeSlides.map(({ id, img, title, subtitle, alt, href, target }) => {
          // 각 아이템을 카드 형태로 구성
          const card = (
            <figure className="slide-card">
              <div
                className="slide-bg"                         // 배경이미지 컨테이너
                role="img"                                   // 접근성: 이미지 역할
                aria-label={alt || title}                    // 접근성: 대체 텍스트
                style={{ backgroundImage: `url(${img})` }}   // 인라인 스타일로 배경이미지 적용
              />
              {/* ✅ 클래스명 통일 */}
              <div className="slide-overlay" />              {/* 어둡게 오버레이(텍스트 가독성) */}
              <figcaption className="slide-caption">         {/* 슬라이드 상단/하단 텍스트 영역 */}
                <h2>{title}</h2>                             {/* 제목 */}
                <p>{subtitle && <span>{subtitle}</span>}</p> {/* 부제목(있을 때만 표시) */}
              </figcaption>
            </figure>
          )

          return (
            <SwiperSlide key={id ?? title}>                  {/* 각 슬라이드 래퍼 */}
              {href ? (                                      // 링크가 있으면 클릭 시 이동
                <a
                  href={href}
                  target={target || '_self'}
                  rel={target === '_blank' ? 'noopener noreferrer' : undefined}
                  className="slide-link"
                >
                  {card}
                </a>
              ) : (
                card                                         // 링크가 없으면 카드만 렌더
              )}
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default HomeSlider
