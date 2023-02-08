import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from '../index';

it('should render a button with the class of primary', () => {
  render(<Button>Primary Button</Button>);

  const button = screen.getByRole('button', { name: /primary button/i });
  expect(button).toHaveClass('bg-black text-white');
});

it('should render a button with the class of secondary', () => {
  render(<Button variant="secondary">Secondary Button</Button>);

  const button = screen.getByRole('button', { name: /Secondary button/i });
  expect(button).toHaveClass('bg-white text-black border border-black');
});

it('eventHandler should be called on click', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Buy</Button>);

  fireEvent.click(screen.getByText(/Buy/i));
  expect(handleClick).toHaveBeenCalledTimes(1);
  expect(handleClick).not.toHaveBeenCalledTimes(2);
});
