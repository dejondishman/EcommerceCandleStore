import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-lg text-center">
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Your Brand</h3>
        </div>
        <div className="space-x-4 mb-4">
          <a href="#home" className="text-gray-400 hover:text-white">
            Home
          </a>
          <a href="#about" className="text-gray-400 hover:text-white">
            About
          </a>
          <a href="#services" className="text-gray-400 hover:text-white">
            Services
          </a>
          <a href="#contact" className="text-gray-400 hover:text-white">
            Contact
          </a>
        </div>
        <div>
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Your Brand. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
