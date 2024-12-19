import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} EduPoint. All rights reserved.</p>
        <div className="mt-4 space-x-4">
          <a href="/privacy" className="text-gray-400 hover:text-gray-200">Privacy Policy</a>
          <a href="/terms" className="text-gray-400 hover:text-gray-200">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
