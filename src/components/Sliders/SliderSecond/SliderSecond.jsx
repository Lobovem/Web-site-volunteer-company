// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Navigation } from 'swiper';

// import slide from '../../../img/slider-news-1.jpg';
// import slide2 from '../../../img/slider-news-2.jpg';

// import 'swiper/scss';
// import 'swiper/scss/navigation';
// import './styles.scss';
import s from './SliderSecond.module.scss';
// import { useRef, useState } from 'react';

// export const SliderSecond = () => {
//   const prevRef = useRef(null);
//   const nextRef = useRef(null);

//   const [init, setInit] = useState();

//   return (
//     <>
//       <Swiper
//         navigation={{
//           prevEl: prevRef.current,
//           nextEl: nextRef.current,
//           disabledClass: 'swiper-button-disabled',
//         }}
//         autoplay={{
//           delay: 2000,
//           //option than disable autoplay slides (when click btn or manual changes sliders)
//           disableOnInteraction: false,
//         }}
//         loop={true}
//         onInit={() => setInit(true)}
//         slidesPerView={1}
//         centeredSlides={false}
//         spaceBetween={10}
//         breakpoints={{
//           440: {
//             slidesPerView: 2,
//             spaceBetween: 20,
//           },
//           768: {
//             slidesPerView: 3,
//             spaceBetween: 20,
//           },
//           1400: {
//             slidesPerView: 2.4,
//             spaceBetween: 30,
//           },
//         }}
//         modules={[Navigation, Autoplay]}
//         className={s.swiperSlider}
//       >
//         <SwiperSlide>
//           <div className={s.swiperSlider__wrap}>
//             <img className={s.swiperSlider__img} src={slide} alt="slider-news-1.jpg" />
//             <h2 className={s.swiperSlider__title}>Якась дуже важлива новина перша</h2>
//           </div>
//         </SwiperSlide>

//         <SwiperSlide>
//           <div className={s.swiperSlider__wrap}>
//             <img className={s.swiperSlider__img} src={slide2} alt="slider-news-2.jpg" />
//             <h2 className={s.swiperSlider__title}>Якась новина друга</h2>
//           </div>
//         </SwiperSlide>

//         <SwiperSlide>
//           <div className={s.swiperSlider__wrap}>
//             <img className={s.swiperSlider__img} src={slide} alt="slider-news-1.jpg" />
//             <h2 className={s.swiperSlider__title}>Якась дуже важлива новина перша</h2>
//           </div>
//         </SwiperSlide>

//         <SwiperSlide>
//           <div className={s.swiperSlider__wrap}>
//             <img className={s.swiperSlider__img} src={slide2} alt="slider-news-2.jpg" />
//             <h2 className={s.swiperSlider__title}>Якась новина друга</h2>
//           </div>
//         </SwiperSlide>

//         <SwiperSlide>
//           <div className={s.sliderWrap}>
//             <img className={s.swiperSlider__img} src={slide} alt="slider-news-1.jpg" />
//             <h2 className={s.swiperSlider__title}>Якась дуже важлива новина перша</h2>
//           </div>
//         </SwiperSlide>

//         <div className={s.swiperSlider__btnWrap}>
//           <button className={s.swiperSlider__btnPrev} ref={prevRef}></button>
//           <button className={s.swiperSlider__btnNext} ref={nextRef}></button>
//         </div>
//       </Swiper>
//     </>
//   );
// };

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import './styles.scss';

// import required modules
import { Grid } from 'swiper';

export const SliderSecond = () => {
  return (
    <>
      <Swiper
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
        modules={[Grid]}
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
      </Swiper>
    </>
  );
};
