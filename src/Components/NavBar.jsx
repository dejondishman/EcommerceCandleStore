import React from "react";
import { Link } from "react-router-dom"; // Assuming you use React Router for navigation
import { ShoppingCartIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-white font-bold text-xl">
          <Link to="/">Distric Candles Store</Link>
        </div>

        {/* Navbar Links */}
        <div className="flex flex-grow justify-center space-x-4">
          <Link
            to="/home"
            className="text-white hover:text-gray-300 transition duration-200"
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="text-white hover:text-gray-300 transition duration-200"
          >
            Shop
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-gray-300 transition duration-200"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-gray-300 transition duration-200"
          >
            Contact
          </Link>
        </div>

        {/* Cart and Search Icons */}
        <div className="flex ml-auto space-x-4 text-white">
          <ShoppingCartIcon className="h-6 w-6 text-gray-700" />
          <MagnifyingGlassIcon className="h-6 w-6 text-gray-700" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
