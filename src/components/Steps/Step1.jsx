import React from "react";
import { useStepperContext } from "../../Context/stepperContext";

const Step1 = () => {
  const { userData, setUserData } = useStepperContext();

  return (
    <div className="w-full flex justify-center items-center">
      <input
        className="w-1/2 p-4 my-6 outline text-xl "
        type="text"
        placeholder="Email"
        value={userData.email}
        name="email"
        onChange={(e) => {
          setUserData({ ...userData, [e.target.name]: e.target.value });
        }}
      />
    </div>
  );
};

export default Step1;
