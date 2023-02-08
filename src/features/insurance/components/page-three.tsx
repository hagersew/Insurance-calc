import React, { useEffect, FC } from 'react';
import { Insurance } from '../interface/insurance.interface';
import { CountryType } from '../models/insurance.model';

type IPageThree = {
  insuranceInfo: Insurance;
};

const PageThree: React.FC<IPageThree> = ({ insuranceInfo }) => {
  return (
    <div className="flex flex-col items-center px-16 py-10 ">
      <div className="font-bold text-2xl mb-2">Summary</div>
      <div className="font-bold text-lg mb-2">${`{name}`},</div>
      <p className="align-center font-thin">Name: {insuranceInfo.name}</p>
      <p className="align-center font-thin">Age: {insuranceInfo.age}</p>
      <p className="align-center font-thin">
        Where do you live:{' '}
        {insuranceInfo.country === CountryType.Australia ? 'Australia' : ''}
        {insuranceInfo.country === CountryType.Hong_Kong ? 'Hong Kong' : ''}
        {insuranceInfo.country === CountryType.USA ? 'USA' : ''}
      </p>
      <p className="align-center font-thin">Package: {insuranceInfo.package}</p>
      <p className="align-center font-thin">Premium: {insuranceInfo.premium}</p>
    </div>
  );
};

export default PageThree;
