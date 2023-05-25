import { render, screen } from '@testing-library/react';
import { OneNews } from './OneNews';
import { useDispatch, useSelector } from 'react-redux';

// jest.mock('../../api/api', () => ({
//   fetchMenu: jest.fn(),
//   fetchNews: jest.fn(),
// }));

jest.mock('react-redux', () => {
  const originalModule = jest.requireActual('react-redux');
  return {
    ...originalModule,
    useDispatch: jest.fn(),
    useSelector: jest.fn(),
  };
});

describe('OneNews', () => {
  const dispatch = jest.fn();

  test('renders OneNews component', () => {
    const oneNews = { id: 1, title: 'Новина', desc: 'News' };
    useDispatch.mockReturnValue(dispatch);
    useSelector.mockReturnValue(oneNews);

    const { container } = render(<OneNews />);
    expect(container).toMatchSnapshot();
  });

  test('search tag h3 (decor)', () => {
    render(<oneNews />);
    const h3Element = screen.getByRole('heading', { level: 1 });
    expect(h3Element).toBeInTheDocument();
  });
});
