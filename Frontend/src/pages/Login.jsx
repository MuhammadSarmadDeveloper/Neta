import React from 'react';
import { Link } from 'react-router-dom';
import net from '../assets/net.png';
import {  FiMail, FiLock, FiCheck, FiHome } from 'react-icons/fi';

const Login = () => {
  return (
    <div className="h-auto bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      {/* Go to Home Button */}
      <div className="absolute top-4 left-4">
        <Link 
          to="/" 
          className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
        >
          <FiHome className="h-5 w-5 mr-1" />
          <span className="text-sm font-medium">Go to Home</span>
        </Link>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md items-center text-center">
        <div><img src={net} className='w-[16rem] h-25 mx-auto' alt="NETA Logo" /></div>
        <h3 className="text-2xl font-semibold text-gray-600 mt-2">Login Your account</h3>
        <p className="mt-2 text-sm text-gray-600">
          Welcome, please enter your details.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-5">
           

            {/* Email Field */}
            <div className="relative">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none mt-5">
                  <FiMail className="h-5 w-5 mt-[-1.4rem] text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="johndoe@gmail.com"
                  required
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="relative">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none mt-5">
                  <FiLock className="h-5 w-5 mt-[-1.4rem] text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* Policy Checkbox */}
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="policy"
                  name="policy"
                  type="checkbox"
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 flex items-center">
                <FiCheck className="h-4 w-4 text-blue-500 mr-1" />
                <label htmlFor="policy" className="block text-sm text-gray-900">
                  Accept Company policy
                </label>
              </div>
            </div>

            {/* Sign Up Button */}
            <div>
              <Link to="/dashboard">
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
              >
                Login
              </button>
              </Link>
            </div>
          </form>

          {/* Login Link */}
          <div className="mt-6 text-center text-sm">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link 
                to="/signup" 
                className="font-medium text-blue-600 hover:text-blue-500 transition-colors duration-200"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;