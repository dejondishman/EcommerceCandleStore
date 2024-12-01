import React from "react";
import { Link } from "react-router-dom"; // To handle navigation
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

const Navbar = ({ cartItems }) => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-white font-bold text-xl">
          <Link to="/home">Distric Candles Store</Link>
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

        {/* Cart Icon */}
        <Link to="/cart">
          <div className="relative">
            <ShoppingCartIcon className="h-6 w-6 text-gray-700" />
            {cartItems.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-1">
                {cartItems.length}
              </span>
            )}
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
