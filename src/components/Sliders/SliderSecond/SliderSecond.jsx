import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Grid, Navigation } from 'swiper';
import { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import './styles.scss';
import s from './SliderSecond.module.scss';

export const SliderSecond = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [init, setInit] = useState();

  return (
    <>
      <Swiper
        onInit={() => setInit(true)}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
          disabledClass: 'swiper-button-disabled',
        }}
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
            slidesPerView: 2,
            spaceBetween: 20,
            grid: {
              rows: 1,
            },
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
            grid: {
              rows: 1,
            },
          },

          994: {
            slidesPerView: 4,
            spaceBetween: 20,
            grid: {
              rows: 1,
            },
          },

          1400: {
            slidesPerView: 4,
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
        className="mySwiper"
      >
        <SwiperSlide>
          <div className={s.wrap}>
            <h2 className={s.title}>500 тонн</h2>
            <p className={s.desc}>Гуманітарної допомоги видано більше ніж 15 000 ВПО, інвалідам та малозабезпеченим</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={s.wrap}>
            <h2 className={s.title}>56</h2>
            <p className={s.desc}>Тепловізорів та прицілів загалом куплено для ЗСУ</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={s.wrap}>
            <h2 className={s.title}>120</h2>
            <p className={s.desc}>Автівок передано до військових частин</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={s.wrap}>
            <h2 className={s.title}>64</h2>
            <p className={s.desc}>Дронів закуплено та передано на потреби армії</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={s.wrap}>
            <h2 className={s.title}>4</h2>
            <p className={s.desc}>Реанімобіля,вже передано на фронт та рятують життя наших героїв</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={s.wrap}>
            <h2 className={s.title}>64</h2>
            <p className={s.desc}>Дронів закуплено та передано на потреби армії</p>
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
