import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/NavBar";
import ProductList from "./Components/ProductList";
import CartPage from "./Components/CartPage";
import { useState } from "react";
import Footer from "./Components/Footer";

function App() {
  // Setting up the cart state to store the items added to the cart
  const [cartItems, setCartItems] = useState([]);

  // Function to add items to the cart
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  return (
    <div className="min-h-screen bg-customNavyBlue">
      {" "}
      {/* Ensure the page takes the full height */}
      {/* Centering the content and adding equal space on both sides */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 max-w-screen-lg">
        {/* Pass the cartItems to Navbar to show cart count */}
        <Navbar cartItems={cartItems} />
        <Routes>
          {/* When user navigates to /cart, display the CartPage */}
          <Route path="/cart" element={<CartPage cartItems={cartItems} />} />
          {/* Default route for ProductList */}
          <Route path="/home" element={<ProductList addToCart={addToCart} />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
