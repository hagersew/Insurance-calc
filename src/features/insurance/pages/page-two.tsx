import React, { Dispatch, SetStateAction } from 'react';
import { Insurance } from '../interface/insurance.interface';
import { Country, CountryCurrency, Package } from '../models/insurance.model';

interface insuranceInfo {
  setInsurance: Dispatch<SetStateAction<Insurance>>;
  insuranceInfo: Insurance;
}

const PageTwo = (prop: insuranceInfo) => {
  const { insuranceInfo } = prop;
  const handleFormChange = (e: any) => {
    prop.setInsurance((prevState: Insurance) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="items-center px-10 py-10 space-y-4">
      <div className="font-bold text-2xl mb-2">Tell us about yourself</div>
      <div>
        <label className="block mb-2 text-sm font-medium text-black dark:text-black">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
          placeholder="Add name"
          onChange={handleFormChange}
          required
          data-testid="setName"
        ></input>
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-black dark:text-black">
          Age
        </label>
        <input
          type="text"
          id="age"
          name="age"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
          placeholder="Add Age"
          required
          onChange={handleFormChange}
          data-testid="setAge"
        ></input>
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-black dark:text-black">
          Where do you live
        </label>
        <select
          name="country"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          onChange={handleFormChange}
          onLoad={handleFormChange}
          id="country"
          data-testid="setCountry"
        >
          <option value={CountryCurrency.Hong_Kong}>{Country.Hong_Kong}</option>
          <option value={CountryCurrency.USA}>{Country.USA}</option>
          <option value={CountryCurrency.Australia}>{Country.Australia}</option>
        </select>
      </div>

      <div onChange={handleFormChange}>
        <div className="flex items-center mt-4">
          <input
            id="package"
            type="radio"
            value={Package.Standard}
            name="package"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            data-testid="setPackageStandard"
            defaultChecked
          />
          <label className="ml-2 text-sm font-medium text-black dark:text-black">
            {Package.Standard}
          </label>
        </div>
        <div className="flex items-center mt-4">
          <input
            id="package"
            type="radio"
            value={Package.Safe}
            name="package"
            data-testid="setPackageSafe"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label className="ml-2 text-sm font-medium text-black dark:text-black">
            {Package.Safe} (+{insuranceInfo.safePackage}
            {insuranceInfo.country}, 50%)
          </label>
        </div>
        <div className="flex items-center mt-4">
          <input
            id="package"
            type="radio"
            value={Package.Super_Safe}
            name="package"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            data-testid="setPackageSuper"
          />
          <label className="ml-2 text-sm font-medium text-black dark:text-black">
            {Package.Super_Safe} (+{insuranceInfo.superPackage}
            {insuranceInfo.country}, 75%)
          </label>
        </div>
      </div>

      <div className="font-bold text-2xl mb-2 mt-10" data-testid="getPremium">
        Your premium is{' '}
        {insuranceInfo.premium! > 0
          ? insuranceInfo.premium! + insuranceInfo.country!
          : ''}
      </div>
    </div>
  );
};

export default PageTwo;
