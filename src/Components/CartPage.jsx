import React from "react";

const CartPage = ({ cartItems }) => {
  // Calculate the subtotal
  const subtotal = cartItems.reduce((total, item) => {
    return total + parseFloat(item.price); // Make sure price is a number
  }, 0);

  const numOfItems = cartItems.length;

  return (
    <div className="container mx-auto p-4">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-slate-50">Shopping Cart</h1>
        <div className="m-1">
          {/* Display subtotal */}
          <h2 className="text-lg text-slate-50 mt-4">Subtotal: ${subtotal.toFixed(2)}</h2>
        </div>

        <div className="m-1">
          <button className="bg-cyan-100 rounded-md p-1">
            Proceed to Checkout ({numOfItems})
          </button>
        </div>
      </div>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li
              key={index}
              className="p-4 rounded-lg flex flex-col border-b border-black"
            >
              <div className="text-white flex justify-between items-start">
                <div className="flex flex-col items-start">
                  {/* Title on top */}
                  <span className="font-bold">{item.title}</span>
                  {/* Image directly under the title */}
                  <img src={item.image} alt={item.title} className="w-20 h-20 object-cover mt-2" />
                </div>

                {/* Text on the right */}
                <div className="flex flex-col items-end ml-4">
                  <p className="text-red-700">Limited Time Deal</p>
                  <span>${item.price}</span>
                  <p className="m-1 items-start">{item.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
