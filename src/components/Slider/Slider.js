// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import slide from '../../img/slider-news-1.jpg';
import slide2 from '../../img/slider-news-2.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Navigation } from 'swiper';

export const Slider = () => {
  return (
    <>
      <Swiper
        navigation
        slidesPerView={1}
        centeredSlides={false}
        spaceBetween={10}
        breakpoints={{
          440: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1400: {
            slidesPerView: 2.4,
            spaceBetween: 30,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
