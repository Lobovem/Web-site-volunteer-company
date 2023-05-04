import { SliderThird } from '../Sliders/SliderThird/SliderThird';
import { TitleSection } from '../TitleSection/TitleSection';
import s from './WaySupport.module.scss';

export const WaySupport = () => {
  return (
    <div className={s.waySupport}>
      <div className={s.waySupport__wrap}>
        <h3 className={s.waySupport__decor}>Підтримка</h3>
        <TitleSection title="напрямки підтримки"></TitleSection>
        <SliderThird></SliderThird>
      </div>
    </div>
  );
};
