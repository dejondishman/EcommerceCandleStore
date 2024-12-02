import React from "react";
import Card from "./Card";

export default function ProductList({ addToCart }) {
  const products = [
    {
      id: 1,
      title: "Midnight Velvet",
      scent: "Black amber, warm vanilla, and a hint of smoky oud",
      price: "$12",
      description: "Wrap yourself in the luxurious embrace of Midnight Velvet, where sensual amber meets the mysterious allure of smoky oud, softened by creamy vanilla.",
      image: "/assets/candle1.jpg" 
    },
    {
      title: "Ocean Mist & Driftwood",
      id: 2,
      scent: "Salty sea breeze, sun-bleached driftwood, and fresh eucalyptus.",
      price: "$12",
      description: "A coastal escape in a jar, blending the crisp freshness of the ocean with the earthy calm of driftwood.",
      image: "/assets/candle2.jpg" 
    },
    {
      title: "Golden Hour",
      id: 3,
      scent: "Black amber, warm vanilla, and a hint of smoky oud",
      price: "$12",
      description: "Wrap yourself in the luxurious embrace of Midnight Velvet, where sensual amber meets the mysterious allure of smoky oud, softened by creamy vanilla.",
      image: "/assets/candle3.jpg" 
    },
    {
      title: "Lush Meadow",
      id: 4,
      scent: "Fresh-cut grass, wild mint, and blooming jasmine.",
      price: "$12",
      description: "Immerse yourself in the serene freshness of a dewy meadow, where floral whispers meet the crispness of wild greens.",
      image: "/assets/candle4.jpg" 
    },
    {
      title: "Cozy Hearth",
      id: 5,
      scent: "Smoked cedar, clove, and toasted marshmallow.",
      price: "$12",
      description: "The comforting crackle of a wood-burning fireplace with the sweetness of marshmallows roasting over glowing embers.",
      image: "/assets/candle5.jpg" 
    },
    {
      title: "Moonlit Garden",
      id: 6,
      scent: "Night-blooming jasmine, white musk, and soft pear.",
      price: "$12",
      description: "A dreamy, ethereal scent that evokes the romance of a moonlit garden kissed by the night air.",
      image: "/assets/candle6.jpg" 
    },
    {
      title: "Spiced Orchard",
      id: 7,
      scent: "Ripe apple, cinnamon bark, and caramel drizzle.",
      price: "$12",
      description: "The warmth of a fall orchard brought to life with juicy apples and the cozy spice of cinnamon.",
      image: "/assets/candle7.jpg" 
    },
    {
      title: "Urban Noir",
      id: 8,
      scent: "Leather, bergamot, and tobacco leaf.",
      price: "$12",
      description: "Edgy and sophisticated, this bold fragrance blends the smoky allure of leather with a dash of citrusy intrigue.",
      image: "/assets/candle8.jpg" 
    },
    {
      title: "Morning Bloom",
      id: 9,
      scent: "Peony, green tea, and dew-kissed lilies.",
      price: "$12",
      description: "A refreshing floral awakening, perfect for starting your day with elegance and clarity.",
      image: "/assets/candle9.jpg" 
    },
    {
      title: "Frosted Forest",
      id: 10,
      scent: "Pine needles, crisp mint, and frosted eucalyptus.",
      price: "$12",
      description: "The serene chill of a snowy forest, where fresh pine mingles with a cool, invigorating mint breeze.",
      image: "/assets/candle10.jpg" 
    }
  ];

  return (
    <div className="container mx-auto p-6">
      {/* Grid container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card
            image={product.image}
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}
