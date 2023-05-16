import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { App } from './components/App/App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './components/App/reportWebVitals';
import { store } from './redux/config/store';
import { ScrollToTop } from './components/ScrollTop/ScrollTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ScrollToTop />
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
