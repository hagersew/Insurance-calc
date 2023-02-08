import React from 'react';

function PageError() {
  return (
    <div>
      <div className="flex flex-col items-center px-10 py-10 space-y-10">
        <div className="font-bold text-2xl mb-2">Ooops</div>
        <div className="grid place-items-center align-center font-thin">
          <p>Your age is over our accepted limit. </p>
          <p>We are sorry but we cannot insure you now</p>
        </div>
      </div>
    </div>
  );
}

export default PageError;
