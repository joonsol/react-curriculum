// src/data/slides.js
import slide1 from '../assets/slide1.jpeg'
import slide2 from '../assets/slide2.jpeg'
import slide3 from '../assets/slide3.jpeg'

// 한 배열에 모든 메타를 통합 관리
export const homeSlides = [
    {
        id: 'hero1',
        img: slide1,
        title: '첫 번째 슬라이드',
        subtitle: '간단한 설명 텍스트',
        alt: '푸른 바다 사진',
        href: '#',
        target: '_blank',
        badge: 'NEW',
        analyticsId: 'feature-1',
    },
    {
        id: 'hero2',
        img: slide2,
        title: '두 번째 슬라이드',
        subtitle: '반응형 Swiper 예제',
        alt: '해변의 석양 사진',
        href: '#',
        target: '_self',
    },
    {
        id: 'hero3',
        img: slide3,
        title: '세 번째 슬라이드',
        subtitle: '이미지/제목/링크 통합 데이터',
        alt: '산의 전경 사진',
        href: '#',
        target: '_blank',
    },
]

