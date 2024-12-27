import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function HamburgerIcon() {
  // State to track whether the menu is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleMenu} className="focus:outline-none">
        <GiHamburgerMenu

           style={{width: "1.5rem", height: "1.5rem", marginTop:"1rem", display:"flex",}} color="rgb(55 65 81)"
        />
      </button>

      {/* Optional Dropdown/Menu */}
      {isOpen && (
        <div className="mt-4 bg-gray-100 rounded-lg p-4 shadow">
          <ul>
            <li className="py-2">Home</li>
            <li className="py-2">About</li>
            <li className="py-2">Contact</li>
          </ul>
        </div>
      )}
    </div>
  );
}
