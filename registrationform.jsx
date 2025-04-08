import { useState } from "react";

export const RegistrationForm = () => {
    const [user, setUser] = useState({
       firstName: "",
       lastName: "",
       email: "",
       password: "",
       phoneNumber: "",
    });
    
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
        setUser((prev) => ({ ...prev , [name]:value}));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        
    };
  
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        {/* Section */}
        <section className="p-4 mb-16">
          <p className="text-3xl font-medium text-black">
            Hello, My name is
            <span className="text-blue-600 font-semibold">
              {" "}
              {user.firstName} {user.lastName}
            </span>
            . My Email Address is
            <span className="text-blue-600 font-semibold"> {user.email}</span>
            and My phoneNumber is
            <span className="text-blue-600 font-semibold"> {user.phoneNumber}</span>.
          </p>
        </section>
  
        {/* Form */}
        <form className="bg-white w-[450px] h-[640px] p-8 rounded-3xl shadow-lg" onChange={handleFormSubmit}>
          {/* Heading */}
          <h1 className="text-5xl font-bold mb-2">Sign Up</h1>
          <p className="text-2xl text-gray-500 mb-6 mt-6">
            Please fill in this form to create an account.
          </p>
  
          {/* First Name */}
          <label className="block text-black font-bold mb-1">First Name</label>
          <input
            type="text"
            value={user.firstName}
            name="firstName"
            placeholder="Enter first name"
            required
            className="text-2xl text-black w-full h-[39px] px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-slate-300"
            onChange={handleInputChange}
          />
  
          {/* Last Name */}
          <label className="block text-black font-bold mb-1">Last Name</label>
          <input
            type="text"
            value={user.lastName}
            name="lastName"
            placeholder="Enter last name"
            required
            className="text-2xl text-black w-full h-[39px] px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-slate-300"
            onChange={handleInputChange}
          />
  
          {/* Email */}
          <label className="block text-black font-bold mb-1">Email</label>
          <input
            type="email"
            value={user.email}
            name="email"
            placeholder="Enter email"
            required
            className="text-2xl text-black w-full h-[39px] px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-slate-300"
            onChange={handleInputChange}
          />
  
          {/* Password */}
          <label className="block text-black font-bold mb-1">Password</label>
          <input
            type="password"
            value={user.password}
            name="password"
            placeholder="Write strong password"
            required
            className="text-2xl text-black w-full h-[39px] px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-slate-300"
            onChange={handleInputChange}
          />
  
          {/* Phone Number */}
          <label className="block text-black font-bold mb-1">Phone Number</label>
          <input
            type="text"
            value={user.phoneNumber}
            name="phoneNumber"
            placeholder="1234567890"
            required
            className="text-2xl text-black w-full h-[39px] px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-slate-300"
            onChange={handleInputChange}
          />
  
          {/* Terms and Privacy */}
          <p className="text-2xl text-black mb-6 mt-6">
            By creating an account you agree to our{" "}
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
              Sign Up
            </button>
          </div>
        </form>
      </div>
    );
  };
  