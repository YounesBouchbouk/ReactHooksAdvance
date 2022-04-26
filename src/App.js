import "./App.css";
import StepsBar from "./components/StepsBar";

import React, { useState } from "react";
import Step1 from "./components/Steps/Step1";
import Step2 from "./components/Steps/Step2";

import Step3 from "./components/Steps/Step3";
import Buttons from "./components/Buttons";
import { UseContextProvider } from "./Context/stepperContext";
import AfficheData from "./components/AfficheData";

function App() {
  const [step, setStep] = useState(1);
  const wichStepToRender = () => {
    switch (step) {
      case 1:
        return <Step1 />;

      case 2:
        return <Step2 courentstep={step} />;

      case 3:
        return <Step3 courentstep={step} />;
    }
  };

  const back = () => {
    setStep(step - 1);
  };
  const next = () => {
    if (step === 3) return console.log(step);
    setStep(step + 1);
  };
  return (
    <UseContextProvider>
      <div className="w-full h-screen bg-slate-50 flex justify-center items-center flex-col">
        <div className="bg-white w-10/12 h-2/3 flex justify-center items-center flex-col">
          <StepsBar courentstep={step} />
          {wichStepToRender()}
          <Buttons courentsep={step} next={next} back={back} />
          <AfficheData />
        </div>
      </div>
    </UseContextProvider>
  );
}

export default App;
