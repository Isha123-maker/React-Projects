import { useState } from "react";

export const LoginForm = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    
  
    

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const loginData = {
            userName,
            password,
        };
        console.log(loginData);
        
    };
  
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        
  
        {/* Form */}
        <form className="bg-white w-[550px] h-[370px] p-8 rounded-3xl shadow-lg" onSubmit={handleFormSubmit}>
          {/* Heading */}
          <h1 className="text-5xl font-bold mb-2">Login Form</h1>
          <p className="text-2xl text-gray-500 mb-6 mt-6">
            Please fill in this form to login into your account.
          </p>
  
          {/* Email */}
          <label className="block text-black font-bold mb-1">Email</label>
          <input
            type="email"
            value={userName}
            name="email"
            placeholder="Enter email"
            required
            className="text-2xl text-black w-full h-[39px] px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-slate-300"
             onChange={(e) => setUserName(e.target.value)}
          />
  
          {/* Password */}
          <label className="block text-black font-bold mb-1">Password</label>
          <input
            type="password"
            value={password}
            name="password"
            placeholder="Write strong password"
            required
            className="text-2xl text-black w-full h-[39px] px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-slate-300"
            onChange={(e) => setPassword(e.target.value)}
          />
  
         
  
          {/* Terms and Privacy */}
          <p className="text-2xl text-black mb-6 mt-6">
            By Login into account you agree to our{" "}
            <a href="#" className="text-2xl text-blue-500 hover:underline">
              Terms & Privacy
            </a>
            .
          </p>
  
          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="text-3xl w-full h-[45px] bg-blue-500 text-white py-2 rounded-2xl hover:bg-blue-600 transition duration-200"
            >
            Login
            </button>
          </div>
        </form>
      </div>
    );
  };
  