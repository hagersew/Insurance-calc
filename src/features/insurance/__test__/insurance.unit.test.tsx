import { fireEvent, render, screen } from '@testing-library/react';
import InsuranceApp from '../insurance-app';
import { Country, CountryCurrency, Package } from '../models/insurance.model';

it('should render insurance start page', () => {
  render(<InsuranceApp />);

  const startBtn = screen.getByTestId('startBtn');
  expect(startBtn).toBeInTheDocument();
});

it('should render insurance information page with next and back buttons', () => {
  render(<InsuranceApp />);

  const startBtn = screen.getByTestId('startBtn');
  fireEvent.click(startBtn);

  const nextBtn = screen.getByTestId('nextBtn');
  const backBtn = screen.getByTestId('backBtn');
  expect(backBtn).toBeInTheDocument();
  expect(nextBtn).toBeInTheDocument();
});

it('should render error page', () => {
  render(<InsuranceApp />);
  const startBtn = screen.getByTestId('startBtn');

  fireEvent.click(startBtn);

  const nextBtn = screen.getByTestId('nextBtn');

  const setName = screen.getByTestId('setName');
  const setAge = screen.getByTestId('setAge');

  fireEvent.change(setName, { target: { value: 'Abel' } });
  fireEvent.change(setAge, { target: { value: '101' } });

  fireEvent.click(nextBtn);

  const errorPage = screen.getByTestId('error-page');

  expect(errorPage).toBeInTheDocument();
});

it('should render start page', () => {
  render(<InsuranceApp />);
  const startBtn = screen.getByTestId('startBtn');

  fireEvent.click(startBtn);

  const nextBtn = screen.getByTestId('nextBtn');

  const setName = screen.getByTestId('setName');
  const setAge = screen.getByTestId('setAge');

  fireEvent.change(setName, { target: { value: 'Abel' } });
  fireEvent.change(setAge, { target: { value: '101' } });

  fireEvent.click(nextBtn);

  const okBtn = screen.getByTestId('okBtn');
  fireEvent.click(nextBtn);

  expect(startBtn).toBeInTheDocument();
});

it('should render summary page', () => {
  render(<InsuranceApp />);
  const startBtn = screen.getByTestId('startBtn');

  fireEvent.click(startBtn);

  const nextBtn = screen.getByTestId('nextBtn');

  const setName = screen.getByTestId('setName');
  const setAge = screen.getByTestId('setAge');
  const setCountry = screen.getByTestId('setCountry');
  const setPackage = screen.getByTestId('setPackageSuper');

  fireEvent.change(setName, { target: { value: 'Abel' } });
  fireEvent.change(setAge, { target: { value: '30' } });
  fireEvent.change(setCountry, {
    target: { value: CountryCurrency.Australia },
  });
  fireEvent.click(setPackage);

  fireEvent.click(nextBtn);

  const getName = screen.getByTestId('getName');
  const getAge = screen.getByTestId('getAge');
  const getCountry = screen.getByTestId('getCountry');
  const getPackage = screen.getByTestId('getPackage');
  const getPremium = screen.getByTestId('getPremium');

  expect(getName).toHaveTextContent('Abel');
  expect(getAge).toHaveTextContent('30');
  expect(getCountry).toHaveTextContent(Country.Australia);
  expect(getPackage).toHaveTextContent(Package.Super_Safe);
  expect(getPremium).toHaveTextContent('Premium: 1575AUD');
});
