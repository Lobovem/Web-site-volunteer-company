import facebook from '../../img/facebook.svg';
import instagram from '../../img/instagram.svg';
import s from './SocialLine.module.scss';

export const SocialLine = () => {
  return (
    <div className={s.socialLine}>
      <div className={s.socialLine__wrap}>
        <p className={s.socialLine__title}>Ми в соціальних мережах</p>
        <div className={s.socialLine__socialWrap}>
          <a
            target="blank"
            href="https://www.facebook.com/people/%D0%9C%D0%91%D0%A4-%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D1%81%D1%8C%D0%BA%D0%B8%D0%B9-%D0%B3%D1%83%D0%BC%D0%B0%D0%BD%D1%96%D1%82%D0%B0%D1%80%D0%BD%D0%B8%D0%B9-%D0%B1%D0%B0%D1%82%D0%B0%D0%BB%D1%8C%D0%BE%D0%BD/100085936770532/"
          >
            <img src={facebook} alt="facebook.svg" />
          </a>
          <a target="blank" href="https://www.instagram.com/ukrhumbat/?igshid=YmMyMTA2M2Y=">
            <img src={instagram} alt="instagram.svg" />
          </a>
        </div>
      </div>
    </div>
  );
};
