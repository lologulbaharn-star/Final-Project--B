import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],
      
      addToCart: (product) => {
        const cart = get().cart;
        const findProduct = cart.find((item) => item.id === product.id);
        
        if (findProduct) {
          const updatedCart = cart.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          );
          set({ cart: updatedCart });
        } else {
          set({ cart: [...cart, { ...product, quantity: 1 }] });
        }
      },

      removeFromCart: (id) => {
        set({ cart: get().cart.filter((item) => item.id !== id) });
      },

      updateQuantity: (id, type) => {
        const updatedCart = get().cart.map((item) => {
          if (item.id === id) {
            const newQty = type === 'inc' ? item.quantity + 1 : item.quantity - 1;
            return { ...item, quantity: Math.max(1, newQty) }; 
          }
          return item;
        });
        set({ cart: updatedCart });
      },

      getTotalPrice: () => {
        return get().cart.reduce((total, item) => total + item.price * item.quantity, 0);
      },

      clearCart: () => set({ cart: [] }),
    }),
    { name: 'tech-shop-cart' } 
  )
);