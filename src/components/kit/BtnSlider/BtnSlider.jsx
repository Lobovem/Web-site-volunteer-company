import s from './BtnSlider.module.scss';

export const BtnSlider = ({ prevRef, nextRef }) => {
  return (
    <div className={s.btnSlider}>
      <button className={s.btnSlider__prev} ref={prevRef}></button>
      <button className={s.btnSlider__next} ref={nextRef}></button>
    </div>
  );
};
