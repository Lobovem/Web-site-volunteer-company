import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';

import slide from '../../img/slider-news-1.jpg';
import slide2 from '../../img/slider-news-2.jpg';
// import btn from '../../img/btn-left1.svg';

import 'swiper/scss';
import 'swiper/scss/navigation';
import './styles.scss';
import s from './Slider.module.scss';
import { useRef, useState } from 'react';

export const Slider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [init, setInit] = useState();

  return (
    <>
      <Swiper
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
          disabledClass: 'swiper-button-disabled',
        }}
        autoplay={{
          delay: 2000,
          //option than disable autoplay slides (when click btn or manual changes sliders)
          // disableOnInteraction: false,
        }}
        loop={true}
        onInit={() => setInit(true)}
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
        modules={[Navigation, Autoplay]}
        className={s.swiperSlider}
      >
        <SwiperSlide>
          <div className={s.swiperSlider__wrap}>
            <img className={s.swiperSlider__img} src={slide} alt="slider-news-1.jpg" />
            <h2 className={s.swiperSlider__title}>Якась дуже важлива новина перша</h2>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={s.swiperSlider__wrap}>
            <img className={s.swiperSlider__img} src={slide2} alt="slider-news-2.jpg" />
            <h2 className={s.swiperSlider__title}>Якась новина друга</h2>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={s.swiperSlider__wrap}>
            <img className={s.swiperSlider__img} src={slide} alt="slider-news-1.jpg" />
            <h2 className={s.swiperSlider__title}>Якась дуже важлива новина перша</h2>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={s.swiperSlider__wrap}>
            <img className={s.swiperSlider__img} src={slide2} alt="slider-news-2.jpg" />
            <h2 className={s.swiperSlider__title}>Якась новина друга</h2>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={s.sliderWrap}>
            <img className={s.swiperSlider__img} src={slide} alt="slider-news-1.jpg" />
            <h2 className={s.swiperSlider__title}>Якась дуже важлива новина перша</h2>
          </div>
        </SwiperSlide>
        <div className={s.swiperSlider__btnWrap}>
          <button className={s.swiperSlider__btnPrev} ref={prevRef}></button>
          <button className={s.swiperSlider__btnNext} ref={nextRef}></button>
        </div>
      </Swiper>
    </>
  );
};
