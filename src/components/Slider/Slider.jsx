import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import slide from '../../img/slider-news-1.jpg';
import slide2 from '../../img/slider-news-2.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './styles.scss';

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
          <div className="sliderWrap">
            <img src={slide} alt="slider-news-1.jpg" />
            <h2 className="sliderTitle">Якась дуже важлива новина перша</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sliderWrap">
            <img src={slide2} alt="slider-news-2.jpg" />
            <h2 className="sliderTitle">Якась новина друга</h2>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="sliderWrap">
            <img src={slide} alt="slider-news-1.jpg" />
            <h2 className="sliderTitle">Якась дуже важлива новина перша</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sliderWrap">
            <img src={slide2} alt="slider-news-2.jpg" />
            <h2 className="sliderTitle">Якась новина друга</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sliderWrap">
            <img src={slide} alt="slider-news-1.jpg" />
            <h2 className="sliderTitle">Якась дуже важлива новина перша</h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
