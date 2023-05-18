import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';

import slide from '../../../img/slider-news-1.jpg';
import slide2 from '../../../img/slider-news-2.jpg';

import 'swiper/scss';
import 'swiper/scss/navigation';
// import './styles.scss';
import s from './SliderFirst.module.scss';
import { useRef, useState } from 'react';
import { BtnSliders } from '../../kit/BtnSliders/BtnSliders';
import { Link, useParams } from 'react-router-dom';

export const SliderFirst = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const { newsId } = useParams();

  console.log('newsId=====>', newsId);

  const [init, setInit] = useState();

  return (
    <>
      <Swiper
        className={s.slider}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
          disabledClass: 'swiper-button-disabled',
        }}
        autoplay={{
          delay: 2000,
          //option than disable autoplay slides (when click btn or manual changes sliders)
          disableOnInteraction: false,
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
            loop: true,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
            loop: true,
          },
          1400: {
            slidesPerView: 2.4,
            centeredSlides: false,
            spaceBetween: 30,
            loop: true,
          },
        }}
        modules={[Navigation, Autoplay]}
      >
        <SwiperSlide className={s.slider__item}>
          <div className={s.slider__itemWrap}>
            <Link to="/news/:newsId">
              <img className={s.slider__img} src={slide} alt="slider-news-1.jpg" />
            </Link>

            <Link to="/:newsId">
              <h2 className={s.slider__title}>Якась дуже важлива новина перша</h2>
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide className={s.sslider_item}>
          <div className={s.slider__itemWrap}>
            <Link to="/:newsId">
              <img className={s.slider__img} src={slide2} alt="slider-news-2.jpg" />
            </Link>

            <Link to="/:newsId">
              <h2 className={s.slider__title}>Якась новина друга</h2>
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide className={s.slider__item}>
          <div className={s.slider__itemWrap}>
            <Link to="/:newsId">
              <img className={s.slider__img} src={slide} alt="slider-news-1.jpg" />
            </Link>

            <Link to="/:newsId">
              <h2 className={s.slider__title}>Якась дуже важлива новина перша</h2>
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide className={s.slider__item}>
          <div className={s.slider__itemWrap}>
            <Link to="/:newsId">
              <img className={s.slider__img} src={slide2} alt="slider-news-2.jpg" />
            </Link>

            <Link to="/:newsId">
              <h2 className={s.slider__title}>Якась новина друга</h2>
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide className={s.slider__item}>
          <div className={s.slider__itemWrap}>
            <Link to="/:newsId">
              <img className={s.slider__img} src={slide} alt="slider-news-1.jpg" />
            </Link>

            <Link to="/:newsId">
              <h2 className={s.slider__title}>Якась дуже важлива новина перша</h2>
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide className={s.slider__item}>
          <div className={s.slider__itemWrap}>
            <Link to="/:newsId">
              <img className={s.slider__img} src={slide2} alt="slider-news-2.jpg" />
            </Link>

            <Link to="/:newsId">
              <h2 className={s.slider__title}>Якась новина друга</h2>
            </Link>
          </div>
        </SwiperSlide>

        <BtnSliders nextRef={nextRef} prevRef={prevRef} className={'btnSlider'}></BtnSliders>
      </Swiper>
    </>
  );
};
