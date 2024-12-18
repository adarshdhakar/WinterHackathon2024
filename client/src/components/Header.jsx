import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-3xl font-bold">EduPoint</h1>
        <nav>
          <ul className="flex space-x-8">
            <li>
              <a href="/" className="hover:text-gray-200">Home</a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-200">About</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-200">Contact</a>
            </li>
            <li>
              <a href="/login" className="hover:text-gray-200">Login</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
