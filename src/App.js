import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/NavBar";
import ProductList from "./Components/ProductList";
import CartPage from "./Components/CartPage";
import { useState } from "react";

function App() {
  // Setting up the cart state to store the items added to the cart
  const [cartItems, setCartItems] = useState([]);

  // Function to add items to the cart
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  return (
    <>
      {/* Pass the cartItems to Navbar to show cart count */}
      <Navbar cartItems={cartItems} />
      <Routes>
        {/* When user navigates to /cart, display the CartPage */}
        <Route path="/cart" element={<CartPage cartItems={cartItems} />} />
        {/* Default route for ProductList */}
        <Route path="/home" element={<ProductList addToCart={addToCart} />} />
      </Routes>
    </>
  );
}

export default App;
