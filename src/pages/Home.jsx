import { Link } from 'react-router-dom';
import { ShoppingBag, Zap, ShieldCheck, Truck } from 'lucide-react';

const Home = () => {
  return (
    <div className="space-y-16">
      
      <section className="text-center py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-[2rem] shadow-2xl px-6 relative overflow-hidden">
        
        <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mt-16"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-400/20 rounded-full -mr-20 -mb-20"></div>

        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            أهلاً بك في <span className="text-yellow-400">Tech-Shop</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-blue-100 max-w-2xl mx-auto leading-relaxed">
            وجهتك الأولى لأحدث التقنيات والأجهزة الذكية بأفضل الأسعار وأعلى جودة.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/products" 
              className="bg-white text-blue-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <ShoppingBag size={22} />
              تسوق الآن
            </Link>
            <button className="bg-transparent border-2 border-white/50 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
              تعرف علينا
            </button>
          </div>
        </div>
      </section>

      
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Zap className="text-blue-600" size={30} />
          </div>
          <h3 className="text-xl font-bold mb-3">أداء فائق</h3>
          <p className="text-gray-500">نوفر لك أحدث الأجهزة ذات المواصفات العالمية والقوية.</p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShieldCheck className="text-green-600" size={30} />
          </div>
          <h3 className="text-xl font-bold mb-3">ضمان حقيقي</h3>
          <p className="text-gray-500">جميع منتجاتنا تأتي مع ضمان شامل وخدمة ما بعد البيع.</p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
          <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Truck className="text-purple-600" size={30} />
          </div>
          <h3 className="text-xl font-bold mb-3">توصيل سريع</h3>
          <p className="text-gray-500">نصل إليك أينما كنت في وقت قياسي وبأمان تام.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;