import { useCartStore } from '../store/CartStore';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice } = useCartStore();

  if (cart.length === 0) {
    return (
      <div className="text-center py-20">
        <ShoppingBag size={80} className="mx-auto text-gray-300 mb-6" />
        <h2 className="text-2xl font-bold text-gray-800 mb-4">سلة التسوق فارغة!</h2>
        <Link to="/products" className="text-blue-600 font-bold hover:underline">ابدأ التسوق الآن</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 text-right">سلة المشتريات</h2>
      
      <div className="space-y-4">
        {cart.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
            <img src={item.images[0]} alt={item.title} className="w-24 h-24 rounded-xl object-cover" />
            
            <div className="flex-grow">
              <h3 className="font-bold text-lg text-gray-800">{item.title}</h3>
              <p className="text-blue-600 font-bold">${item.price}</p>
            </div>

            <div className="flex items-center gap-3 bg-gray-50 p-2 rounded-lg">
              <button onClick={() => updateQuantity(item.id, 'dec')} className="p-1 hover:bg-gray-200 rounded"><Minus size={18}/></button>
              <span className="font-bold w-5 text-center">{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, 'inc')} className="p-1 hover:bg-gray-200 rounded"><Plus size={18}/></button>
            </div>

            <button 
              onClick={() => removeFromCart(item.id)}
              className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
            >
              <Trash2 size={22} />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-white p-6 rounded-2xl shadow-md border-t-4 border-blue-600">
        <div className="flex justify-between items-center text-2xl font-bold">
          <span>الإجمالي:</span>
          <span className="text-blue-600">${getTotalPrice()}</span>
        </div>
        <button className="w-full mt-6 bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg">
          إتمام عملية الشراء
        </button>
      </div>
    </div>
  );
};

export default Cart;