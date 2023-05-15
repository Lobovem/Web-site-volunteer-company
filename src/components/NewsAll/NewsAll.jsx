// import { New } from '../New/PaginatedItems';
import s from './NewsAll.module.scss';

export const NewsAll = ({ children }) => {
  return (
    <div className={s.NewsAll}>
      <h3 className={s.NewsAll__decor}>Новини</h3>
      {children}
    </div>
  );
};
