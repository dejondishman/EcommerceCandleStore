/* we want to a filter for price if a candle is 
over $15 we want to show candles over 15 
if a candle is under 15 we want to show candles under 15

- also we want a filter for titles, if a title of a candle is selected we want 
price, description and scent to be displayed 
*/
import { useState } from "react";

export default  function Filter({products}){
  // when dropdwon filters is clicked and value is changed we want to update ui with info from value 
  const [selectedPriceRange, setSelectedPriceRange] = useState("All");
  const [selectedTitle, setSelectedTitle] =  useState("All");

  if(selectedPriceRange !== "All" && selectedPriceRange >= 15){
    return false 
  };
  if(selectedPriceRange !== "All" && selectedPriceRange <= 15){
    return false 
  }

  return(
    <div>
       <aside className="w-1/3 bg-black text-white p-4 h-full">
        {/* Price Filter Dropdown */}
        <label htmlFor="Price">Filter by Price:</label>
        <select
          name="Price"
          id="Price"
          className="text-black"
          value={selectedPriceRange}
          onChange={(e) => setSelectedPriceRange(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Under 15">Under $15</option>
          <option value="Over 15">Over $15</option>
        </select>

        {/* Title Filter Dropdown */}
        <label htmlFor="Title" className="mt-4">Filter by Title:</label>
        <select
          name="Title"
          id="Title"
          className="text-black"
          value={selectedTitle}
          onChange={(e) => setSelectedTitle(e.target.value)}
        >
          <option value="All">All</option>
          {products.map((product) => (
            <option key={product.title} value={product.title}>
              {product.title}
            </option>
          ))}
        </select>
      </aside>
        
    </div>
  )
}

