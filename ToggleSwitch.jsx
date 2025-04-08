// import "./ToggleSwitch.css";
import { useState } from "react";
import { FaToggleOn } from "react-icons/fa";

export const ToggleSwitch = () => {
  const [isOn, setisOn] = useState(false);

  const handleToggleSwitch = () => {
    setisOn(!isOn);
  };

  return (
    <>
      <h1 className="flex items-center justify-center font-bold text-8xl text-gray-950 text-center">
        <FaToggleOn className="text-blue-600 mr-4" />
        Toggle Switch
      </h1>
      <div className="flex items-center justify-center h-screen pb-96 ">
        <div
          className={`toggle-switch w-[245px] h-[98px] flex items-center rounded-full cursor-pointer border-2 border-black  ${
            isOn ? "bg-green-500" : "bg-red-500"
          }`}
          onClick={handleToggleSwitch}
        >
          <div
            className={`w-[75px] h-[78px] ${
              isOn ? "bg-green-500" : "bg-red-500"
            }  border-8 border-gray-300 text-white  rounded-full shadow-md flex items-center justify-center text-2xl font-bold transform transition-transform duration-300 ${
              isOn ? "translate-x-[140px]" : "translate-x-[15px]"
            }`}
          >
            {isOn ? "ON" : "OFF"}
          </div>
        </div>
      </div>
    </>
  );
};
