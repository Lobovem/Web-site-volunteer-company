import { SliderThird } from '../Sliders/SliderThird/SliderThird';
import { TitleSection } from '../TitleSection/TitleSection';
import s from './WaySupport.module.scss';

export const WaySupport = () => {
  return (
    <div className={s.waySupport}>
      <div className={s.waySupport__wrap}>
        <TitleSection title="напрямки підтримки"></TitleSection>
        <SliderThird></SliderThird>
      </div>
    </div>
  );
};
