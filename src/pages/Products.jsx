import { useState, useEffect } from 'react';
import api from '../services/api';
import ProductCard from '../components/ProductCard';
import Skeleton from '../components/Skeleton';
import { Search, Filter } from 'lucide-react';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await api.get('/products');
        setProducts(res.data);
      } catch (err) {
        console.error("خطأ في جلب البيانات", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);


  const filteredProducts = products.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === 'all' || p.category.name === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white dark:bg-gray-900 p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
        <div className="relative w-full md:w-96">
          <Search className="absolute right-3 top-3 text-gray-400" size={20} />
          <input 
            type="text"
            placeholder="ابحث عن منتج..."
            className="w-full pr-10 pl-4 py-2 rounded-xl border dark:border-gray-700 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none transition"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
s
        <div className="flex items-center gap-2 w-full md:w-auto">
          <Filter className="text-gray-400" size={20} />
          <select 
            className="w-full md:w-48 p-2 rounded-xl border dark:border-gray-700 dark:bg-gray-800 outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">جميع التصنيفات</option>
            <option value="Electronics">إلكترونيات</option>
            <option value="Clothes">ملابس</option>
            <option value="Shoes">أحذية</option>
          </select>
        </div>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => <Skeleton key={i} />)}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {!loading && filteredProducts.length === 0 && (
        <div className="text-center py-20 text-gray-500">
          لا توجد منتجات تطابق بحثك حالياً.
        </div>
      )}
    </div>
  );
};

export default Products;