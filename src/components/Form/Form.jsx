import photo from '../../img/form-photo.jpg';
import sending from '../../img/form-sending.svg';
import { Btn } from '../kit/Btn/Btn';
import { useState } from 'react';
import s from './Form.module.scss';

export const Form = () => {
  const [sendState, setSendState] = useState(false);
  const [inputDataForm, setInputDataForm] = useState({ name: '', email: '', textarea: '' });
  const [dataForm, setDataForm] = useState([]);

  const handleChangeState = () => {
    setSendState(!sendState);
    setTimeout(setSendState, 3000);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleChangeState();
    setDataForm([...dataForm, inputDataForm]);
    setInputDataForm({ name: '', email: '', textarea: '' });
  };

  const handleChange = (e) => {
    setInputDataForm({ ...inputDataForm, [e.target.name]: e.target.value });
  };

  return (
    <div className={s.form}>
      <div className={s.form__wrap}>
        <div className={s.form__imgWrap}>
          <img className={s.form__img} src={photo} alt="" />
        </div>

        {sendState ? (
          <div className={s.form__sending}>
            <img className={s.form__sendingImg} src={sending} alt="form-sending.svg" />
            <p className={s.form__sendingTitle}>
              <span>вітаємо!</span> дані успішно відправлені!
            </p>
          </div>
        ) : (
          <form className={s.form__inner} onSubmit={onSubmit} method="post" action="/">
            <h2 className={s.form__title}>зв'яжіться з нами</h2>
            <p className={s.form__desc}>Форма зворотнього зв'язку</p>

            <label className={s.form__inputTitle} htmlFor="name">
              Імʼя
            </label>
            <input className={s.form__input} type="text" name="name" id="name" required value={inputDataForm.name} onChange={handleChange} />

            <label className={s.form__inputTitle} htmlFor="email">
              Email
            </label>
            <input
              className={s.form__input}
              type="email"
              name="email"
              id="email"
              required
              pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              value={inputDataForm.email}
              onChange={handleChange}
            />

            <label className={s.form__inputTitle} htmlFor="area">
              Коментар
            </label>
            <textarea className={s.form__textArea} name="textarea" id="area" required value={inputDataForm.textarea} onChange={handleChange}></textarea>

            <div className={s.form__btnWrap}>
              <p className={s.form__text}>
                Відправляючи форму, я приймаю{' '}
                <a className={s.form__link} href="/">
                  умови угоди користувача
                </a>
              </p>
              <Btn title="надіслати" className="btn" type="submit" />
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
