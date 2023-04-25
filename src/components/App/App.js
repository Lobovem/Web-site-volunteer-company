import { useSelector } from 'react-redux';
import { burgerMenuSelector } from '../store/reducer';
import s from './app.module.scss';
import { Header } from '../Header/Header';
import { Banner } from '../Banner/Banner';

function App() {
  const burgerMenu = useSelector(burgerMenuSelector);

  return (
    <div className={!burgerMenu ? `${s.body}` : `${s.body} ${s.active}`}>
      <Header></Header>
      <Banner></Banner>
    </div>
  );
}

export default App;
