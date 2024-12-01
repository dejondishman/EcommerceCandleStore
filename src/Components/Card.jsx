import { useState } from "react";
const Card = ({ title, scent, price, description }) => {
   
    function handleClick(){
        
    }
    return (
      <div className="max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl rounded overflow-hidden shadow-lg p-4 flex flex-col">
        <img className="w-full h-auto" src="https://via.placeholder.com/150" alt="Image" />
        <div className="px-6 py-4 flex flex-col justify-between flex-grow">
          <h2 className="font-bold text-xl sm:text-2xl lg:text-3xl mb-2">{title}</h2>
          <p className="text-sm sm:text-base">{scent}</p>
          
          <p className="text-gray-700 text-base sm:text-lg mb-4">{description}</p>
  
          {/* Price and Button aligned at the bottom */}
          <div className="flex justify-between items-center mt-auto">
            <p className="font-semibold text-sm sm:text-base">{price}</p>
            <button onClick={handleClick} className="bg-slate-500 text-white py-2 px-4 rounded text-sm sm:text-base">Add To Cart</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Card;
  