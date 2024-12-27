import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/NavBar";
import ProductList from "./Components/ProductList";
import CartPage from "./Components/CartPage";
import { useState } from "react";
import Footer from "./Components/Footer";
import Filter from "./Components/Filter";

function App() {
  const products = [
    {
      id: 1,
      title: "Midnight Velvet",
      scent: "Black amber, warm vanilla, and a hint of smoky oud",
      price: "15",
      description:
        "Wrap yourself in the luxurious embrace of Midnight Velvet, where sensual amber meets the mysterious allure of smoky oud, softened by creamy vanilla.",
      image: "/assets/candle7.jpg",
    },
    {
      title: "Ocean Mist & Driftwood",
      id: 2,
      scent: "Salty sea breeze, sun-bleached driftwood, and fresh eucalyptus.",
      price: "12",
      description:
        "A coastal escape in a jar, blending the crisp freshness of the ocean with the earthy calm of driftwood.",
      image: "/assets/candle2.jpg",
    },
    {
      title: "Golden Hour",
      id: 3,
      scent: "Black amber, warm vanilla, and a hint of smoky oud",
      price: "20",
      description:
        "Wrap yourself in the luxurious embrace of Midnight Velvet, where sensual amber meets the mysterious allure of smoky oud, softened by creamy vanilla.",
      image: "/assets/candle3.jpg",
    },
    {
      title: "Lush Meadow",
      id: 4,
      scent: "Fresh-cut grass, wild mint, and blooming jasmine.",
      price: "2",
      description:
        "Immerse yourself in the serene freshness of a dewy meadow, where floral whispers meet the crispness of wild greens.",
      image: "/assets/candle4.jpg",
    },
    {
      title: "Cozy Hearth",
      id: 5,
      scent: "Smoked cedar, clove, and toasted marshmallow.",
      price: "27",
      description:
        "The comforting crackle of a wood-burning fireplace with the sweetness of marshmallows roasting over glowing embers.",
      image: "/assets/candle5.jpg",
    },
    {
      title: "Moonlit Garden",
      id: 6,
      scent: "Night-blooming jasmine, white musk, and soft pear.",
      price: "29",
      description:
        "A dreamy, ethereal scent that evokes the romance of a moonlit garden kissed by the night air.",
      image: "/assets/candle6.jpg",
    },
    {
      title: "Spiced Orchard",
      id: 7,
      scent: "Ripe apple, cinnamon bark, and caramel drizzle.",
      price: "7",
      description:
        "The warmth of a fall orchard brought to life with juicy apples and the cozy spice of cinnamon.",
      image: "/assets/candle7.jpg",
    },
    {
      title: "Urban Noir",
      id: 8,
      scent: "Leather, bergamot, and tobacco leaf.",
      price: "12",
      description:
        "Edgy and sophisticated, this bold fragrance blends the smoky allure of leather with a dash of citrusy intrigue.",
      image: "/assets/candle8.jpg",
    },
    {
      title: "Morning Bloom",
      id: 9,
      scent: "Peony, green tea, and dew-kissed lilies.",
      price: "14",
      description:
        "A refreshing floral awakening, perfect for starting your day with elegance and clarity.",
      image: "/assets/candle9.jpg",
    },
    {
      title: "Frosted Forest",
      id: 10,
      scent: "Pine needles, crisp mint, and frosted eucalyptus.",
      price: "13",
      description:
        "The serene chill of a snowy forest, where fresh pine mingles with a cool, invigorating mint breeze.",
      image: "/assets/candle10.jpg",
    },
  ];
  // Setting up the cart state to store the items added to the cart
  const [cartItems, setCartItems] = useState([]);

  //managing state for sekecred filter values (scent, price range)

  // Function to add items to the cart
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  return (
    <div className="min-h-screen bg-customNavyBlue">
      <Navbar cartItems={cartItems} />
      <div className="flex">
        {/* Sidebar for filtering */}
        {/* <div className="h-screen my-8">
          <Filter products={products} />
        </div> */}

        {/* Main content for Product List */}
        <div className="  p-4 h-screen overflow-y-auto">
          <Routes>
            {/* When user navigates to /cart, display the CartPage */}
            <Route path="/cart" element={<CartPage cartItems={cartItems} />} />
            {/* Default route for ProductList, passing the filters */}
            <Route
              path="/"
              element={
                <ProductList products={products} addToCart={addToCart} />
              }
            />
            <Route
              path="/home"
              element={
                <ProductList
                  products={products}
                  addToCart={addToCart}
                  className="max-h-180"
                />
              }
            />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
