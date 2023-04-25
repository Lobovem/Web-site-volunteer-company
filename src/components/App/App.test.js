import { render } from '@testing-library/react';
import App from './App';
import { useDispatch } from 'react-redux';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe('App', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders app component', () => {
    useDispatch.mockReturnValue(dispatch);
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const component = render(<App />);
    expect(component).toMatchSnapshot();
  });
});
