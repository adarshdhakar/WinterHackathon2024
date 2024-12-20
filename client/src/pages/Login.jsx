import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [userType, setUserType] = useState('student'); // Default to student

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-500 to-teal-600">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login to EduPoint</h2>

        {/* User type selection */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Select User Type</label>
          <div className="flex justify-between mt-2">
            <button
              className={`px-4 py-2 rounded-lg ${userType === 'student' ? 'bg-teal-500 text-white' : 'bg-gray-200'}`}
              onClick={() => setUserType('student')}
            >
              Student
            </button>
            <button
              className={`px-4 py-2 rounded-lg ${userType === 'teacher' ? 'bg-teal-500 text-white' : 'bg-gray-200'}`}
              onClick={() => setUserType('teacher')}
            >
              Teacher
            </button>
          </div>
        </div>

        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition"
          >
            Login as {userType.charAt(0).toUpperCase() + userType.slice(1)}
          </button>
        </form>
        <div className="mt-4 text-center">
          <Link to="/signup" className="text-indigo-600 hover:underline">
            Don't have an account? Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
