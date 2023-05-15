import s from './PageError.module.scss';

export const PageError = () => {
  return (
    <div className={s.pageError}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
    </div>
  );
};
