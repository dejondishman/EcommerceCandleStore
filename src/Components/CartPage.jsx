import React from "react";

const CartPage = ({ cartItems }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} className="mb-4">
              <div className="flex justify-between">
                <span>{item.title}</span>
                <span>{item.price}</span>
              </div>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
