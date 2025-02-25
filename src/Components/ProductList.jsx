import React from "react";

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="grid grid-cols-2  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <div key={product.id} className="  p-4 rounded-lg flex flex-col ">
          <div className=" 
         w-full h-48">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
         
         
          <h2 className="text-lg m-1 text-white font-bold">{product.title}</h2>
          
          <p className="text-white m-1">{product.scent}</p>
         
          
          {/* <p className="text-white m-1">{product.description}</p> */}
          <p className="text-white m-1 font-semibold">${product.price}</p>
          <div className="mt-auto">
            
            
            <button
              onClick={() => addToCart(product)}
              type="button"
              className="text-white m-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                className="w-3.5 h-3.5 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 21"
              >
                <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
              </svg>
              Buy now
        
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
