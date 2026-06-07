import { create } from 'zustand';
import { User } from '../types';

interface AuthStore {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  
  setUser: (user: User | null) => void;
  setToken: (token: string | null) => void;
  setIsLoading: (loading: boolean) => void;
  logout: () => void;
  hydrateFromStorage: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: false,

  setUser: (user) =>
    set({
      user,
      isAuthenticated: user !== null,
    }),

  setToken: (token) => {
    if (token) {
      localStorage.setItem(process.env.NEXT_PUBLIC_JWT_TOKEN_KEY || 'cybernow_token', token);
    } else {
      localStorage.removeItem(process.env.NEXT_PUBLIC_JWT_TOKEN_KEY || 'cybernow_token');
    }
    set({ token });
  },

  setIsLoading: (loading) => set({ isLoading: loading }),

  logout: () => {
    localStorage.removeItem(process.env.NEXT_PUBLIC_JWT_TOKEN_KEY || 'cybernow_token');
    set({
      user: null,
      token: null,
      isAuthenticated: false,
    });
  },

  hydrateFromStorage: () => {
    const token = localStorage.getItem(process.env.NEXT_PUBLIC_JWT_TOKEN_KEY || 'cybernow_token');
    if (token) {
      set({ token, isAuthenticated: true });
    }
  },
}));
