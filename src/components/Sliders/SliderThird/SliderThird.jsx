import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Grid, Navigation } from 'swiper';
import { useRef, useState } from 'react';
import { BtnSliders } from '../../kit/BtnSliders/BtnSliders';

import icon1 from '../../../img/icon-slider-waySupport-1.svg';
import icon2 from '../../../img/icon-slider-waySupport-2.svg';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import './styles.scss';
import s from './SliderThird.module.scss';

export const SliderThird = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [init, setInit] = useState();

  return (
    <>
      <Swiper
        className={s.slider}
        onInit={() => setInit(true)}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
          disabledClass: 'swiper-button-disabled',
        }}
        wrapperClass={s.slider__wrapper}
        loop={true}
        autoplay={{
          delay: 22000,
          //option than disable autoplay slides (when click btn or manual changes sliders)
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        grid={{
          rows: 1,
          fill: 'row',
        }}
        breakpoints={{
          440: {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            grid: {
              rows: 1,
            },
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
            loop: true,
            grid: {
              rows: 1,
            },
          },

          994: {
            slidesPerView: 3,
            spaceBetween: 20,
            loop: false,
            grid: {
              rows: 1,
            },
          },

          1400: {
            loop: true,
            slidesPerView: 2,
            spaceBetween: 30,
            grid: {
              rows: 2,
            },
          },
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Navigation, Autoplay]}
      >
        <SwiperSlide>
          <div className={s.slider__itemWrap}>
            <img className={s.slider__img} src={icon2} alt="icon-slider-waySupport-2.svg" />
            <h2 className={s.slider__title}>купівля обладнання</h2>
            <p className={s.slider__desc}>
              За допомогою онлайн -генератора тексту ви можете обробляти свій особистий Lorem Ipsum , збагачуючи його html -елементами, які визначають його
              структуру...
            </p>
            <a className={s.slider__link} href="/">
              Читати повністю
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={s.slider__itemWrap}>
            <img className={s.slider__img} src={icon1} alt="icon-slider-waySupport-1.svg" />
            <h2 className={s.slider__title}>збір коштів</h2>
            <p className={s.slider__desc}>
              За допомогою онлайн -генератора тексту ви можете обробляти свій особистий Lorem Ipsum , збагачуючи його html -елементами...
            </p>
            <a className={s.slider__link} href="/">
              Читати повністю
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={s.slider__itemWrap}>
            <img className={s.slider__img} src={icon2} alt="icon-slider-waySupport-2.svg" />
            <h2 className={s.slider__title}>купівля обладнання</h2>
            <p className={s.slider__desc}>
              За допомогою онлайн -генератора тексту ви можете обробляти свій особистий Lorem Ipsum , збагачуючи його html -елементами, які визначають його
              структуру...
            </p>
            <a className={s.slider__link} href="/">
              Читати повністю
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={s.slider__itemWrap}>
            <img className={s.slider__img} src={icon1} alt="icon-slider-waySupport-1.svg" />
            <h2 className={s.slider__title}>збір коштів</h2>
            <p className={s.slider__desc}>
              За допомогою онлайн -генератора тексту ви можете обробляти свій особистий Lorem Ipsum , збагачуючи його html -елементами...
            </p>
            <a className={s.slider__link} href="/">
              Читати повністю
            </a>
          </div>
        </SwiperSlide>

        <BtnSliders nextRef={nextRef} prevRef={prevRef} className={'btnSlider'}></BtnSliders>
      </Swiper>
    </>
  );
};
