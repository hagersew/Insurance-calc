import React, { useContext, useEffect, useState } from 'react';
import { Button } from '../../components/button';
import { Insurance } from './interface/insurance.interface';
import PageThree from './pages/page-three';
import PageTwo from './pages/page-two';
import PageOne from './pages/page-one';
import PageError from './pages/page-error';
import { CountryCurrency, Package } from './models/insurance.model';

const HKD_RATE = 1;
const USD_RATE = 2;
const AUD_RATE = 3;
const AGE_LIMIT = 100;

function calculateInsurancePremium(age: number, rate: number) {
  if (age > 0) return age * 10 * rate;
}

function calculateSafePackage(premium: number) {
  return (premium! * 50) / 100;
}

function calculateSuperPackage(premium: number) {
  return (premium! * 75) / 100;
}

const InsuranceApp = () => {
  const [current, setCurrent] = React.useState(0);

  const [insuranceInfo, setInsuranceInfo] = useState<Insurance>({
    name: '',
    age: 0,
    country: CountryCurrency.Hong_Kong,
    premium: 0,
    package: Package.Standard,
    safePackage: 0,
    superPackage: 0,
  });

  useEffect(() => {
    let premium = 0;
    switch (insuranceInfo?.country) {
      case CountryCurrency.Hong_Kong: {
        premium = calculateInsurancePremium(insuranceInfo.age!, HKD_RATE)!;
        break;
      }
      case CountryCurrency.USA: {
        premium = calculateInsurancePremium(insuranceInfo.age!, USD_RATE)!;
        break;
      }
      case CountryCurrency.Australia: {
        premium = calculateInsurancePremium(insuranceInfo.age!, AUD_RATE)!;
        break;
      }
    }
    setInsuranceInfo((prevState: Insurance) => ({
      ...prevState,
      premium,
      safePackage: calculateSafePackage(premium!),
      superPackage: calculateSuperPackage(premium!),
    }));
  }, [insuranceInfo.country, insuranceInfo.age]);

  useEffect(() => {
    let premium = insuranceInfo.premium!;
    switch (insuranceInfo.package) {
      case Package.Standard: {
        premium = insuranceInfo.premium!;
        break;
      }
      case Package.Safe: {
        premium = premium + insuranceInfo.safePackage!;
        break;
      }
      case Package.Super_Safe: {
        premium = premium + insuranceInfo.superPackage!;
        break;
      }
    }
    setInsuranceInfo((prevState: Insurance) => ({
      ...prevState,
      premium,
    }));
  }, [insuranceInfo.package]);

  const renderStep = (currentStep: number) => {
    switch (currentStep) {
      case 0:
        return <PageOne />;
      case 1:
        return (
          <PageTwo
            setInsurance={setInsuranceInfo}
            insuranceInfo={insuranceInfo}
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
    if (current === 0) {
      return;
    }
    setCurrent(current - 1);
  };

  const handleSubmit = (): void => {
    if (
      insuranceInfo.name === '' ||
      (insuranceInfo.age! <= 0 && !isNaN(insuranceInfo.age!))
    )
      return;
    insuranceInfo?.age! > AGE_LIMIT ? setCurrent(3) : setCurrent(2);

    if (current === 2) setCurrent(0);
  };
  const navigation = () => {
    switch (current) {
      case 0:
        return (
          <Button testId="startBtn" className="w-52" onClick={() => next()}>
            Start
          </Button>
        );
      case 3:
        return (
          <Button testId="okBtn" onClick={() => setCurrent(0)}>
            Ok :(
          </Button>
        );
      default:
        return (
          <>
            {current > 0 && (
              <Button
                testId="backBtn"
                onClick={() => prev()}
                variant="secondary"
              >
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
            {navigation()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsuranceApp;
