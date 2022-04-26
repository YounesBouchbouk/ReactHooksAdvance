import React from "react";

const StepsBar = ({ courentstep }) => {
  const steps = [{ step: 1 }, { step: 2 }, { step: 3 }];
  return (
    <div className="flex justify-around items-center w-3/4 ">
      {steps.map(({ step }) => {
        return (
          <div
            key={step}
            className={`rounded-full w-24 h-24 border-2 flex items-center justify-center ${
              courentstep === step
                ? "bg-green-500 text-white"
                : courentstep > step
                ? "border-green-500"
                : "border-red-300  "
            } `}
          >
            <h1 className="font-mono text-2xl">{step}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default StepsBar;
