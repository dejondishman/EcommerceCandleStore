const Card = ({title, scent, price, description}) => {
    return (
      <div className=" max-w-sm rounded overflow-hidden shadow-lg p-4">
        <img className="w-full" src="https://via.placeholder.com/150" alt="Image" />
        <div className="px-6 py-4">
          <h2 className="font-bold text-xl mb-2">{title}</h2>
          <p>{scent}</p>
          
          <p className="text-gray-700 text-base">
            {description}
          </p>
        </div>
        <div className="flex justify-between items-center"> 
        <p>{price}</p>
            <button className="bg-slate-500 text-white py-2 px-4 rounded">Add To Cart</button>
        </div>
      </div>
    );
  };
  
  export default Card;
  