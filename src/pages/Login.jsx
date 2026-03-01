import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/AuthStore';
import toast from 'react-hot-toast';

const Login = () => {
  const [email, setEmail] = useState('john@mail.com'); 
  const [password, setPassword] = useState('changeme');
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await login(email, password);
    
    if (result.success) {
      toast.success('تم تسجيل الدخول بنجاح');
      setTimeout(() => {
        navigate('/profile');
      }, 500);
    } else {
      toast.error(result.error || 'بيانات الدخول غير صحيحة');
    }
  };

  return (
    <div className="flex justify-center items-center py-20 animate-in fade-in duration-700">
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 w-full max-w-md">
        <h2 className="text-2xl font-black text-center mb-8 dark:text-white">تسجيل الدخول</h2>
        <div className="space-y-4">
          <input 
            type="email" 
            placeholder="البريد الإلكتروني" 
            className="w-full p-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border-none outline-none focus:ring-2 ring-blue-500 text-gray-900 dark:text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input 
            type="password" 
            placeholder="كلمة المرور" 
            className="w-full p-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border-none outline-none focus:ring-2 ring-blue-500 text-gray-900 dark:text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="w-full bg-blue-600 text-white font-bold p-4 rounded-2xl hover:bg-blue-700 transition-all shadow-lg active:scale-95">
            دخول
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;