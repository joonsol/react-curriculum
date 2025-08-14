import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './HomeSlider.css'
import { homeSlides } from '../data/homeSlide'   // ✅ 경로/파일명 통일

const HomeSlider = () => {
  return (
    <div className="slider-wrap">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, A11y]}
        navigation
        pagination={{ clickable: true }}
        // autoplay={{ delay: 3000 }}
        loop
        slidesPerView={1}
        a11y={{ enabled: true }}
      >
        {homeSlides.map(({ id, img, title, subtitle, alt, href, target }) => {
          const card = (
            <figure className="slide-card">
              <div
                className="slide-bg"
                role="img"
                aria-label={alt || title}
                style={{ backgroundImage: `url(${img})` }}
              />
              {/* ✅ 클래스명 통일 */}
              <div className="slide-overlay" />
              <figcaption className="slide-caption">
                <h2>{title}</h2>
                <p>{subtitle && <span>{subtitle}</span>}</p>
              </figcaption>
            </figure>
          )

          return (
            <SwiperSlide key={id ?? title}>
              {href ? (
                <a
                  href={href}
                  target={target || '_self'}
                  rel={target === '_blank' ? 'noopener noreferrer' : undefined}
                  className="slide-link"
                >
                  {card}
                </a>
              ) : (
                card
              )}
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default HomeSlider
