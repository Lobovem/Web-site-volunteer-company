import { SliderSecond } from '../Sliders/SliderSecond/SliderSecond';
import { TitleSection } from '../TitleSection/TitleSection';
import s from './OurResult.module.scss';

export const OurResult = () => {
  return (
    <div className={s.ourResult}>
      <div className={s.ourResult__wrap}>
        <TitleSection title="Наші результати"></TitleSection>
        <SliderSecond></SliderSecond>
      </div>
    </div>
  );
};
