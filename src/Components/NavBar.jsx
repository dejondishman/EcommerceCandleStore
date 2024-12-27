import React from "react";
import { Link } from "react-router-dom"; // To handle navigation
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { IoPersonOutline } from "react-icons/io5";
import HamburgerIcon from "./HamburgerIcon";

const Navbar = ({ cartItems }) => {
  return (
    <nav className="w-full bg-white shadow dark:bg-gray-800">
      <div className="flex items-center justify-between px-6 py-4 mx-auto max-w-screen-2xl text-gray-600 capitalize dark:text-gray-300 relative">
        {/* Hamburger Icon (visible only on small screens) */}
        <div className=" absolute left-4">
          <HamburgerIcon />
        </div>

        {/* Centering the H1 */}
        <div className="flex-grow text-center">
          <Link to="/home">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-lg">
              Districts Candles
            </h1>
          </Link>
        </div>

        {/* Cart and Profile Icons */}
        <div className="flex items-center space-x-4 sm:space-x-6 absolute right-6">
          {/* Cart Icon */}
          <Link to="/cart" className="relative">
            <ShoppingCartIcon className="m-2 h-6 w-6 text-gray-700" />
            {cartItems.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-1">
                {cartItems.length}
              </span>
            )}
          </Link>
          
          {/* Search Icon */}
          <svg
            color="rgb(55 65 81)"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24" strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 m-2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>

          {/* Profile Icon */}
          <IoPersonOutline className="m-2" style={{ width: "1.5rem", height: "1.5rem" }} color="rgb(55 65 81)" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
