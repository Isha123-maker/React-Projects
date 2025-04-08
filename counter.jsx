import { useState } from "react";

export const Counter = () => {
    const[count , setCount] = useState(0);
    const[step , setStep] = useState(0);

    const handleIncrement = () => {
        setCount(count + step);
    };

    const handleDecrement = () => {
        setCount(count - step);
    };

    const handleReset = () => {
        setCount(0);
    };

    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="border-2 bg-pink-300 w-[700px] h-[350px] flex flex-col rounded-3xl p-6 shadow-lg">
          {/* Heading */}
          <h1 className="text-black text-7xl font-bold text-center mb-6">
            Counter Box
          </h1>
  
          {/* Count Section */}
          <p className="text-black text-4xl font-bold mb-4">
            Count: <span className=" text-5xl font-bold text-blue-500">{count}</span>
          </p>
  
          {/* Step Input */}
          <div className="flex items-center mb-6">
            <label className="text-black text-4xl font-bold mr-3">
              Step:
            </label>
            <input
              type="number"
              value={step}
              onChange={(e) => setStep(Number(e.target.value))}
              placeholder="Enter number"
              className="text-2xl rounded-lg w-[195px] h-[35px] border-gray-500 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"

            />
          </div>
  
          {/* Buttons */}
          <div className="flex justify-center space-x-4 mt-8">
            <button className="bg-blue-500 text-white px-6 py-3 w-[175px]  border-gray-500 text-2xl rounded-lg hover:bg-blue-400 transition duration-200" onClick={handleIncrement} disabled={count >= 100}>
              Increment
            </button>
            <button className="bg-blue-500 text-white px-6 py-3 w-[175px]  border-gray-500 text-2xl rounded-lg hover:bg-blue-400 transition duration-200" onClick={handleDecrement} disabled={count <= 0}>
              Decrement
            </button>
            <button className="bg-blue-500 text-white px-6 py-3 w-[175px]  border-gray-500 text-2xl rounded-lg hover:bg-blue-400 transition duration-200" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    );
  };
  