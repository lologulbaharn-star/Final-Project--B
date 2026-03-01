import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';
import { useCartStore } from '../store/CartStore';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    api.get(`/products/${id}`).then(res => setProduct(res.data));
  }, [id]);

  if (!product) return <div className="text-center py-20 text-xl font-bold">جاري تحميل التفاصيل...</div>;

  return (
    <div className="flex flex-col md:flex-row gap-10 bg-white p-6 rounded-2xl shadow-lg">
      <div className="md:w-1/2">
        <img src={product.images[0]} alt={product.title} className="w-full rounded-xl object-cover h-[400px]" />
      </div>
      <div className="md:w-1/2 flex flex-col justify-center">
        <span className="text-blue-600 font-semibold mb-2">{product.category.name}</span>
        <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
        <p className="text-gray-600 text-lg mb-6 leading-relaxed">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900">${product.price}</span>
          <button 
            onClick={() => addToCart(product)}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-bold"
          >
            إضافة إلى السلة
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;