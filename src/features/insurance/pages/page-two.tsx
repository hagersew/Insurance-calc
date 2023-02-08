import React, { Dispatch, SetStateAction } from 'react';
import { Insurance } from '../interface/insurance.interface';

interface insuranceInfo {
  setInsurance: Dispatch<SetStateAction<Insurance>>;
  premium: string | undefined;
}

const PageTwo = (prop: insuranceInfo) => {
  const { premium } = prop;

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
        ></input>
      </div>
      <div className="mt-4">
        <label className="block mb-2 text-sm font-medium text-black dark:text-black">
          Where do you live
        </label>
        <select
          name="country"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          onChange={handleFormChange}
          onLoad={handleFormChange}
          id="country"
        >
          <option value="HKD">Hong Kong</option>
          <option value="USD">USA</option>
          <option value="AUD">Australia</option>
        </select>
      </div>
      <div className="flex items-center mt-4">
        <input
          id="package"
          type="radio"
          value="Standard"
          name="package"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          onChange={handleFormChange}
        />
        <label className="ml-2 text-sm font-medium text-black dark:text-black">
          Standard
        </label>
      </div>
      <div className="flex items-center mt-4">
        <input
          id="package"
          type="radio"
          value="Safe"
          name="package"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          onChange={handleFormChange}
        />
        <label className="ml-2 text-sm font-medium text-black dark:text-black">
          Safe (+250HKD, 50%)
        </label>
      </div>
      <div className="flex items-center mt-4">
        <input
          id="package"
          type="radio"
          value="Super Safe"
          name="package"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          onChange={handleFormChange}
        />
        <label className="ml-2 text-sm font-medium text-black dark:text-black">
          Super Safe (+370HKD, 75%)
        </label>
      </div>

      <div className="font-bold text-2xl mb-2 mt-10">
        Your premium is {premium}
      </div>
    </div>
  );
};

export default PageTwo;