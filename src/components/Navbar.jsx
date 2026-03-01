import { Link } from 'react-router-dom';
import { ShoppingCart, User, ShoppingBag, Moon, Sun } from 'lucide-react';
import { useCartStore } from '../store/CartStore'; 
import { useAuthStore } from '../store/AuthStore';
import { useThemeStore } from '../store/ThemeStore';

const Navbar = () => {
  const cart = useCartStore((state) => state.cart);
  const user = useAuthStore((state) => state.user);
  const { isDarkMode, toggleDarkMode } = useThemeStore();
  
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-gray-800 p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        
        <Link to="/" className="text-2xl font-black text-blue-600 dark:text-blue-400 flex items-center gap-2 hover:opacity-80">
          <div className="bg-blue-600 p-1.5 rounded-lg text-white">
            <ShoppingBag size={24} />
          </div>
          <span className="tracking-tighter hidden sm:block">TechShop</span>
        </Link>
        
        <div className="flex gap-2 md:gap-5 items-center font-bold text-gray-700 dark:text-gray-200">
          
          <button 
            onClick={toggleDarkMode} 
            className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-yellow-500 dark:text-blue-400 hover:scale-110 transition-transform"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <Link to="/products" className="hidden md:block hover:text-blue-600 dark:hover:text-blue-400">المنتجات</Link>

          {user ? (
            <Link to="/profile" className="flex items-center gap-1.5 bg-blue-50 dark:bg-blue-900/30 px-3 py-2 rounded-xl border border-blue-100 dark:border-blue-800">
              <img src={user.avatar} alt="user" className="w-6 h-6 rounded-full" />
              <span className="hidden sm:inline text-sm">حسابي</span>
            </Link>
          ) : (
            <Link to="/login" className="flex items-center gap-1.5 px-4 py-2 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 transition-all">
              <User size={20} />
              <span className="hidden sm:inline text-sm">دخول</span>
            </Link>
          )}

          <Link to="/cart" className="relative p-2.5 bg-blue-600 text-white rounded-xl active:scale-95 shadow-md shadow-blue-200 dark:shadow-none transition-all">
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] rounded-full h-5 w-5 flex items-center justify-center font-bold border-2 border-white dark:border-gray-900">
                {cartCount}
              </span>
            )}
          </Link>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;