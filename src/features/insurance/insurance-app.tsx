import React, { useContext, useEffect, useState } from 'react';
import { Button } from '../../components/button';
import { Insurance } from './interface/insurance.interface';
import PageThree from './components/page-three';
import PageTwo from './components/page-two';
import PageOne from './components/page-one';
import PageError from './components/page-error';
import { CountryType, Package } from './models/insurance.model';

const HKD_RATE = 1;
const USD_RATE = 2;
const AUD_RATE = 3;
const AGE_LIMIT = 100;

const InsuranceApp = () => {
  const [current, setCurrent] = React.useState(0);

  const [insuranceInfo, setInsuranceInfo] = useState<Insurance>({
    name: '',
    age: 0,
    country: CountryType.Hong_Kong,
    premium: '',
    package: Package.Standard,
  });

  useEffect(() => {
    if (insuranceInfo?.country === CountryType.Hong_Kong) {
      setInsuranceInfo((prevState: any) => ({
        ...prevState,
        premium: insuranceInfo.age! * 10 * HKD_RATE + CountryType.Hong_Kong,
      }));
    } else if (insuranceInfo.country === CountryType.USA) {
      setInsuranceInfo((prevState: any) => ({
        ...prevState,
        premium: insuranceInfo.age! * 10 * USD_RATE + CountryType.USA,
      }));
    } else if (insuranceInfo?.country === CountryType.Australia) {
      setInsuranceInfo((prevState: any) => ({
        ...prevState,
        premium: insuranceInfo.age! * 10 * AUD_RATE + CountryType.Australia,
      }));
    }
  }, [insuranceInfo.country, insuranceInfo.age]);

  const renderStep = (currentStep: number) => {
    switch (currentStep) {
      case 0:
        return <PageOne />;
      case 1:
        return (
          <PageTwo
            setInsurance={setInsuranceInfo}
            premium={insuranceInfo.premium}
          />
        );
      case 2:
        return <PageThree insuranceInfo={insuranceInfo} />;
      case 3:
        return <PageError />;
      default:
        return <PageOne />;
    }
  };
  const next = () => {
    if (current === 1) {
      handleSubmit();
    }
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const handleSubmit = (): void => {
    if (insuranceInfo.name === '' && insuranceInfo.age! === 0) return;

    insuranceInfo?.age! > AGE_LIMIT ? setCurrent(3) : setCurrent(2);

    if (current === 2) setCurrent(0);
  };
  const currentSteps = () => {
    if (current === 0) {
      return (
        <Button testId="startBtn" className="w-52" onClick={() => next()}>
          Start
        </Button>
      );
    } else if (current === 3) {
      return <Button onClick={() => setCurrent(0)}>Ok :(</Button>;
    } else {
      return (
        <>
          {current > 0 && (
            <Button testId="backBtn" onClick={() => prev()} variant="secondary">
              Back
            </Button>
          )}
          <Button testId="nextBtn" onClick={handleSubmit}>
            {current === 2 ? 'Buy' : 'Next'}
          </Button>
        </>
      );
    }
  };

  return (
    <div className="grid place-items-center h-screen">
      <div className="w-xl rounded overflow-hidden bg-gray-50">
        <div className="flex flex-col items-center">
          <div className="flex flex-row justify-evenly">
            <form onSubmit={handleSubmit}>{renderStep(current)}</form>
          </div>
          <div className="flex mt-10 mb-10 space-x-3 md:mt-6 w-1/2 justify-center">
            {currentSteps()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsuranceApp;
