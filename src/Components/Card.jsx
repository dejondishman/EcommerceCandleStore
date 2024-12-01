import React from "react";

const Card = ({ product, addToCart }) => {
  return (
    <div className="border p-4">
      <h2 className="font-bold">{product.title}</h2>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <button
        onClick={() => addToCart(product)} // Call addToCart when button is clicked
        className="bg-blue-500 text-white p-2 mt-4"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Card;
