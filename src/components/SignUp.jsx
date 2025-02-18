import { FaUser, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";
import React, { useState } from "react";

import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {

  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`bu sini emailnigiz: ${email} bu sizning parolingiz: ${password}`);
  };
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Create Account</h2>

        <form className="grid gap-7" onSubmit={handleSubmit}>


          <div className="relative w-full">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 pt-3 pb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 peer"
              placeholder=" "
            />    

            <FaUser className="absolute right-3 top-1/2 text-gray-400" />
          </div>


          <div className="relative w-full">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 text-gray-400 focus:outline-none"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <div className="relative w-full mt-4">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-9 text-gray-400 focus:outline-none"
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {password !== confirmPassword && password && confirmPassword && (
            <p className="text-red-500 text-sm mt-2">Passwords do not match!</p>
          )}

          <button className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition">
            Sign up
          </button>
        </form>
        <p className="text-center text-gray-500 my-4">Or sign in with</p>

        <div className="flex justify-center gap-4">
          <button className="flex items-center justify-center bg-white border rounded-md p-2 shadow-sm hover:shadow-md transition w-20">
            <FcGoogle size={24} />
          </button>
          <button className="flex items-center justify-center bg-white border rounded-md p-2 shadow-sm hover:shadow-md transition w-20">
            <FaFacebook size={24} className="text-blue-600" />
          </button>
          <button className="flex items-center justify-center bg-white border rounded-md p-2 shadow-sm hover:shadow-md transition w-20">
            <FaApple size={24} className="text-black" />
          </button>
        </div>

        <p className="text-center text-gray-600 mt-4">
          Don't have an account yet?{" "}
          <a href="#" className="text-green-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;