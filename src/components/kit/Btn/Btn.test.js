import { render, screen } from '@testing-library/react';
import { Btn } from './Btn';

describe('Btn', () => {
  //render component
  test('renders app component', () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const component = render(<Btn />);
    expect(component).toMatchSnapshot();
  });

  //test title
  test('renders app component with title', () => {
    render(<Btn title="test" />);
    const title = screen.getByText(/test/i);
    expect(title).toBeInTheDocument();
  });

  //test click
  test('renders app component with click', () => {
    const handleClick = jest.fn();
    render(<Btn onClick={handleClick} />);
    const btn = screen.getByRole('button');
    btn.click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
