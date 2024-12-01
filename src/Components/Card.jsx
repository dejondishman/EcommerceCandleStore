import React from "react";

const Card = ({ product, addToCart }) => {
  return (
    <div className="border p-3 w-64 h-64 rounded-lg shadow-lg hover:scale-105 transform transition-all flex flex-col justify-between items-center bg-white">
      <h2 className="font-bold text-lg truncate text-center">{product.title}</h2>
      <p className="text-sm text-gray-600 text-center">{product.price}</p>
      <p className="text-xs text-gray-500 text-center">{product.description}</p>
      <button
        onClick={() => addToCart(product)} // Call addToCart when button is clicked
        className="bg-blue-500 text-white p-2 mt-4 rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Card;
