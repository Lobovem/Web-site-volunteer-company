import { SliderFourth } from '../Sliders/SliderFourth/SliderFourth';
import { TitleSection } from '../TitleSection/TitleSection';
import s from './Teams.module.scss';

export const Teams = () => {
  return (
    <div className={s.teams}>
      <div className={s.teams__wrap}>
        <h3 className={s.teams__decor}>Командa</h3>
        <TitleSection title="команда"></TitleSection>
      </div>
      <SliderFourth></SliderFourth>
    </div>
  );
};
