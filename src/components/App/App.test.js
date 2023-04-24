import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders app component', () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const component = render(<App />);
    expect(component).toMatchSnapshot();
  });
});
