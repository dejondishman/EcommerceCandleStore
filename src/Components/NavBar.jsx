import React from "react";
import { Link } from "react-router-dom"; // To handle navigation
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const Navbar = ({ cartItems }) => {
  return (
    <nav className="w-full bg-white shadow dark:bg-gray-800">
      <div className="flex items-center justify-between px-6 py-4 mx-auto max-w-screen-2xl text-gray-600 capitalize dark:text-gray-300">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Districts Candles
        </h1>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link
            to="/home"
            className="text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-blue-500"
          >
            Home
          </Link>
          <a
            href="#"
            className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500"
          >
            Features
          </a>
          <a
            href="#"
            className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500"
          >
            Pricing
          </a>
          <a
            href="#"
            className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500"
          >
            Blog
          </a>
        </div>

        {/* Cart Icon aligned to the right */}
        <Link to="/cart" className="relative">
          <ShoppingCartIcon className="h-6 w-6 text-gray-700" />
          {cartItems.length > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-1">
              {cartItems.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
