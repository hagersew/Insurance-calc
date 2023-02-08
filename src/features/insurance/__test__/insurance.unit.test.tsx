import { render, screen } from '@testing-library/react';
import InsuranceApp from '../insurance-app';

it('should render insurance start page', () => {
  render(<InsuranceApp />);

  const startBtn = screen.getByTestId('startBtn');
  expect(startBtn).toBeInTheDocument();
});
