import { useAuthStore } from '../store/AuthStore';
import { LogOut, Mail, User, ShieldCheck, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Profile = () => {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success('تم تسجيل الخروج بنجاح');
    navigate('/login');
  };

  if (!user) return null;

  return (
    <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="relative mb-24">
        <div className="h-48 w-full bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl shadow-lg"></div>
        <div className="absolute -bottom-16 right-8 flex items-end gap-6">
          <img 
            src={user.avatar} 
            alt={user.name} 
            className="w-32 h-32 rounded-2xl border-4 border-white dark:border-gray-900 shadow-2xl object-cover bg-white"
          />
          <div className="mb-4">
            <h1 className="text-3xl font-black text-gray-900 dark:text-white">{user.name}</h1>
            <p className="text-blue-600 dark:text-blue-400 font-medium">{user.role === 'admin' ? 'مدير النظام' : 'عميل مميز'}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 space-y-4">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800">
            <h3 className="font-bold text-gray-800 dark:text-white mb-4">إعدادات الحساب</h3>
            <button 
              onClick={handleLogout}
              className="w-full flex items-center justify-center gap-2 p-3 rounded-xl bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/40 transition-all font-bold"
            >
              <LogOut size={20} />
              تسجيل الخروج
            </button>
          </div>
        </div>

        <div className="md:col-span-2 space-y-6">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800">
            <h3 className="text-xl font-black text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <User className="text-blue-600" size={24} />
              المعلومات الشخصية
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/50">
                <div className="p-3 bg-white dark:bg-gray-700 rounded-xl text-blue-600 shadow-sm">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">البريد الإلكتروني</p>
                  <p className="font-bold text-gray-800 dark:text-gray-200">{user.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/50">
                <div className="p-3 bg-white dark:bg-gray-700 rounded-xl text-green-600 shadow-sm">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">حالة الحساب</p>
                  <p className="font-bold text-gray-800 dark:text-gray-200">موثق ونشط</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/50">
                <div className="p-3 bg-white dark:bg-gray-700 rounded-xl text-purple-600 shadow-sm">
                  <Calendar size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">تاريخ الانضمام</p>
                  <p className="font-bold text-gray-800 dark:text-gray-200">فبراير 2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;