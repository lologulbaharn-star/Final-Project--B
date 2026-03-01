import { Link } from 'react-router-dom';
import { useCartStore } from '../store/CartStore';
import { ShoppingCart } from 'lucide-react';
import { toast } from 'react-hot-toast';

const ProductCard = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`تم إضافة ${product.title} للسلة`, {
      style: {
        borderRadius: '12px',
        background: 'rgba(51, 51, 51, 1)',
        color: 'rgba(255, 255, 255, 1)',
      },
    });
  };

  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group">
      <Link to={`/product/${product.id}`} className="block overflow-hidden">
        <img 
          src={product.images[0]} 
          alt={product.title} 
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </Link>
      
      <div className="p-5">
        <h3 className="font-bold text-lg truncate mb-1 text-gray-800 dark:text-gray-100">
          {product.title}
        </h3>
        <p className="text-blue-600 dark:text-blue-400 font-extrabold text-xl mb-4">
          ${product.price}
        </p>
        
        <button 
          onClick={handleAddToCart}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 active:scale-95 transition-all shadow-lg shadow-blue-200 dark:shadow-none"
        >
          <ShoppingCart size={18} />
          إضافة للسلة
        </button>
      </div>
    </div>
  );
};

export default ProductCard;