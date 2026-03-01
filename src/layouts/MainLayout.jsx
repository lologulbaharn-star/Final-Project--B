import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useThemeStore } from '../store/ThemeStore';

const MainLayout = () => {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300" dir="rtl">
      <Toaster position="top-center" />
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8 md:px-6 lg:px-8">
        <div className="animate-in fade-in duration-700">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;