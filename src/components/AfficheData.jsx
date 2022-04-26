import React, { useContext } from "react";
import { useStepperContext } from "../Context/stepperContext";

const AfficheData = () => {
  const { userData } = useStepperContext();
  return (
    <div className="w-full flex  flex-col justify-center items-center p-4">
      <div className="w-1/2 flex justify-around">
        <p className="w-1/2 flex justify-around">Email </p>
        <h1 className="w-1/2 flex justify-around">{userData.email}</h1>
      </div>

      <div className="w-1/2 flex justify-around">
        <p className="w-1/2 flex justify-around">Full name : </p>
        <h1 className="w-1/2 flex justify-around">{userData.fullname}</h1>
      </div>

      <div className="w-1/2 flex justify-around">
        <p className="w-1/2 flex justify-around">Phone </p>
        <h1 className="w-1/2 flex justify-around">{userData.phone}</h1>
      </div>
    </div>
  );
};

export default AfficheData;
