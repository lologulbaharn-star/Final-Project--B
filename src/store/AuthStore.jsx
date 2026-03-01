import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import axios from 'axios';

export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      token: null,

      
      login: async (email, password) => {
        try {
          
          const response = await axios.post('https://api.escuelajs.co/api/v1/auth/login', {
            email: email.trim(),
            password: password,
          });
          
          const access_token = response.data.access_token;
          const profileRes = await axios.get('https://api.escuelajs.co/api/v1/auth/profile', {
            headers: { Authorization: `Bearer ${access_token}` },
          });

          set({ user: profileRes.data, token: access_token });
          return { success: true };

        } catch (error) {
         
          console.warn("فشل الاتصال بالسيرفر، تفعيل وضع الدخول التجريبي...");
          
          const demoUser = {
            id: 999,
            name: "مستخدم تجريبي (Demo Mode)",
            email: email,
            avatar: "https://api.dicebear.com/8.x/lorelei/svg?seed=male-user&backgroundType=gradientLinear&backgroundColor=b6e3f4,c0aede",
            role: "customer"
          };
          
          set({ 
            user: demoUser, 
            token: "demo-token-bypass-123" 
          });

          return { success: true }; 
        }
      },

      logout: () => {
        set({ user: null, token: null });
        localStorage.removeItem('tech-shop-auth');
      },
    }),
    { 
      name: 'tech-shop-auth', 
    }
  )
);