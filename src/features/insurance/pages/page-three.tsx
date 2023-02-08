import React, { useEffect, FC } from 'react';
import { Insurance } from '../interface/insurance.interface';
import { CountryCurrency, Country } from '../models/insurance.model';

type IPageThree = {
  insuranceInfo: Insurance;
};

const PageThree: React.FC<IPageThree> = ({ insuranceInfo }) => {
  return (
    <div className="flex flex-col items-center px-16 py-10 ">
      <div className="font-bold text-2xl mb-2">Summary</div>
      <div className="font-bold text-lg mb-2">{insuranceInfo.name}</div>
      <p className="align-center font-thin" data-testid="getName">
        Name: {insuranceInfo.name}
      </p>
      <p className="align-center font-thin" data-testid="getAge">
        Age: {insuranceInfo.age}
      </p>
      <p className="align-center font-thin" data-testid="getCountry">
        Where do you live:{' '}
        {insuranceInfo.country === CountryCurrency.Australia
          ? Country.Australia
          : ''}
        {insuranceInfo.country === CountryCurrency.Hong_Kong
          ? Country.Hong_Kong
          : ''}
        {insuranceInfo.country === CountryCurrency.USA ? Country.USA : ''}
      </p>
      <p className="align-center font-thin" data-testid="getPackage">
        Package: {insuranceInfo.package}
      </p>
      <p className="align-center font-thin" data-testid="getPremium">
        Premium: {insuranceInfo.premium}
        {insuranceInfo.country}
      </p>
    </div>
  );
};

export default PageThree;
