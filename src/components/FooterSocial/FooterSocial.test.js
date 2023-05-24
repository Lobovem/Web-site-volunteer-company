import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { FooterSocial } from './FooterSocial';
import { Provider } from 'react-redux';
import { store } from '../../redux/config/store';

describe('FooterSocial` component', () => {
  test('renders FooterSocial component', () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const component = render(
      <Provider store={store}>
        <Router>
          <FooterSocial />
        </Router>
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });

  test('should render the title (H2) component contacts', () => {
    render(
      <Provider store={store}>
        <Router>
          <FooterSocial />
        </Router>
      </Provider>
    );
    const titleSection = screen.getByRole('heading', { level: 2 });
    expect(titleSection).toBeInTheDocument();
  });

  test('should render the title component contacts', () => {
    render(
      <Provider store={store}>
        <Router>
          <FooterSocial />
        </Router>
      </Provider>
    );
    const titleSection = screen.getByRole('heading', { name: /СОЦІАЛЬНІ МЕРЕЖІ/i });
    expect(titleSection).toBeInTheDocument();
  });

  test('renders FooterSocial component with 2 images (link elements)', () => {
    render(
      <Provider store={store}>
        <Router>
          <FooterSocial />
        </Router>
      </Provider>
    );
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(2);
  });

  test('renders and search elements links', () => {
    render(
      <Provider store={store}>
        <Router>
          <FooterSocial />
        </Router>
      </Provider>
    );
    const phoneLinks = screen.getAllByRole('link'); // Search all links
    expect(phoneLinks).toHaveLength(2);

    const phoneLink1 = screen.getByText('instagram'); // Search link about text
    expect(phoneLink1).toBeInTheDocument(); // Check out link in DOM

    const phoneLink2 = screen.getByText('facebook');
    expect(phoneLink2).toBeInTheDocument();
  });
});
