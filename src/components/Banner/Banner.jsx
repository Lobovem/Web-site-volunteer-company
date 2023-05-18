import { Btn } from '../kit/Btn/Btn';
import flag from '../../img/ukraine-flag.png';
import { SocialLine } from '../SocialLine/SocialLine';
import s from './Banner.module.scss';

export const Banner = () => {
  return (
    <>
      <div className={s.banner}>
        <img className={s.banner__img} src={flag} alt="" />
        <div className={s.banner__textWrap}>
          <h1 className={s.banner__title}>Єдність країни забезпечує її Перемогу!</h1>
          <p className={s.banner__desc}>
            Міжнародний благодійний фонд «Український гуманітарний батальйон» – об’єднання однодумців, яке має на меті допомагати в ім’я Української Перемоги,
            Свободи та Демократії. Приєднуйтесь до нас, щоб жити, допомагаючи іншим і творити зміни на краще разом!
          </p>

          <Btn title="Про проєкт" className="btn" type="button" />
        </div>
      </div>
      <SocialLine />
    </>
  );
};
