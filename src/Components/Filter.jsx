import { useState } from "react";

function Filter({ products }) {
  const [selectedPriceRange, setSelectedPriceRange] = useState("All");
  const [selectedTitle, setSelectedTitle] = useState("All");
//const [selectedReviews, setSelectedReviews] = useState("All")

  // Filter the products based on selected filters
  const filteredProducts = products.filter((product) => {
    // Price filter
    if (selectedPriceRange !== "All") {
      const price = parseFloat(product.price.replace("$", ""));
      if (selectedPriceRange === "Under 15" && price >= 15) return false;
      if (selectedPriceRange === "Above 15" && price <= 15) return false;
    }

    // Title filter
    if (selectedTitle !== "All" && product.title !== selectedTitle) {
      return false;
    }

    // If all conditions pass, include the product
    return true;
  });

  return (
    <div>
      {/* Dropdown for price range */}
      <div>
            <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="border-radius "
            
            >
                <option value="All">All</option>
                <option value="Under 15">Under $15</option>
                <option value="Above 15">Above $15</option>
            </select>

            {/* Dropdown for title */}
            <select
                value={selectedTitle}
                onChange={(e) => setSelectedTitle(e.target.value)}
            >
                <option value="All">All Titles</option>
                {products.map((product) => (
                <option key={product.id} value={product.title}>
                    {product.title}
                </option>
                ))}
            </select>
      </div>
      

      {/* Render filtered products */}
      <div>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id}>
              <h2 className="text-white font-bold">{product.title}</h2>
              <p className="text-white">{product.price}</p>
              <p className="text-white">{product.scent}</p>
            </div>
          ))
        ) : (
          <p>No products match your filter criteria.</p>
        )}
      </div>
    </div>
  );
}

export default Filter;
