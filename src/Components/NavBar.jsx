import React from "react";
import { Link } from "react-router-dom"; // Assuming you use React Router for navigation

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 flex ">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-white font-bold text-xl">
          <Link className="bg-slate-500" to="/">CandleStore</Link>
        </div>

        {/* Navbar Links */}
        <div className="space-x-4 ">
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

        {/* Cart Icon (optional) */}
        <div className="text-white">
          <Link to="/cart">
            <i className="fas fa-shopping-cart"></i> Cart
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
