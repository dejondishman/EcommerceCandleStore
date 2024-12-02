import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Card = ({ product, addToCart }) => {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 flex flex-col">
      {/* Image Section */}
      <div className="relative w-full h-64">
        <img
          src={product.image}
          alt={product.title}
          className="absolute top-0 left-0 w-full h-full object-cover rounded-t-lg"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-grow p-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
          {product.title}
        </h2>
        <p className="text-lg font-semibold text-gray-700 dark:text-gray-400 mb-3">
          {product.price}
        </p>
        <p className="text-base text-gray-700 dark:text-gray-400 mb-5 flex-grow">
          {product.description}
        </p>
        
        <Button
          onClick={() => addToCart(product)}
          variant="contained"
          color="primary"
          endIcon={<ShoppingCartIcon />}
          fullWidth
        >
          Buy Now
        </Button>
        
      </div> 
    </div>
  );
};

export default Card;
