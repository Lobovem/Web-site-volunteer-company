import { Btn } from '../kit/Btn/Btn';
import photo from '../../img/form-photo.jpg';
import s from './Form.module.scss';

export const Form = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
  };

  return (
    <div className={s.form}>
      <div className={s.form__wrap}>
        <div className={s.form__imgWrap}>
          <img className={s.form__img} src={photo} alt="" />
        </div>

        <form className={s.form__inner} onSubmit={onSubmit} method="post" action="/">
          <h2 className={s.form__title}>зв'яжіться з нами</h2>
          <p className={s.form__desc}>Форма зворотнього зв'язку</p>

          <label className={s.form__inputTitle} htmlFor="name">
            Імʼя
          </label>
          <input className={s.form__input} type="text" name="name" id="name" />

          <label className={s.form__inputTitle} htmlFor="email">
            Email
          </label>
          <input className={s.form__input} type="email" name="email" id="email" />

          <label className={s.form__inputTitle} htmlFor="area">
            Коментар
          </label>
          <textarea className={s.form__textArea} name="textarea" id="area"></textarea>

          <div className={s.form__btnWrap}>
            <Btn title="надіслати" className="btn" onClick={onSubmit}></Btn>
          </div>
        </form>
      </div>
    </div>
  );
};
