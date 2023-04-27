import { useSelector } from 'react-redux';
import { burgerMenuSelector } from '../store/reducer';
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
    <div>
      <Header></Header>
      <Banner></Banner>
    </div>
  );
}

export default App;
