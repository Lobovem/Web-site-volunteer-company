import facebook from '../../img/facebook.svg';
import instagram from '../../img/instagram.svg';
import s from './SocialLine.module.scss';

export const SocialLine = () => {
  return (
    <div className={s.socialLine}>
      <div className={s.socialLine__wrap}>
        <p className={s.socialLine__title}>Ми в соціальних мережах</p>
        <div className={s.socialLine__socialWrap}>
          <a href="/">
            <img src={facebook} alt="facebook.svg" />
          </a>
          <a href="/">
            <img src={instagram} alt="instagram.svg" />
          </a>
        </div>
      </div>
    </div>
  );
};
