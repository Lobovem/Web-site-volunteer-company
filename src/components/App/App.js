import { useSelector } from 'react-redux';
import { burgerMenuSelector } from '../store/reducer';
import s from './app.module.scss';
import { Header } from '../Header/Header';
import { Banner } from '../Banner/Banner';
import { useEffect } from 'react';

function App() {
  const burgerMenu = useSelector(burgerMenuSelector);

  useEffect(() => {
    if (burgerMenu) {
      document.body.classList.add('active');
    } else {
      document.body.classList.remove('active');
    }
  }, [burgerMenu]);

  return (
    <div className={!burgerMenu ? `${s.body}` : `${s.body} ${s.active}`}>
      <Header></Header>
      <Banner></Banner>
    </div>
  );
}

export default App;
