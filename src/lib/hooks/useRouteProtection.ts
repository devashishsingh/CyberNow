import { useAuthStore } from '../context/authStore';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const useProtectedRoute = () => {
  const router = useRouter();
  const { isAuthenticated, token } = useAuthStore();

  useEffect(() => {
    // Hydrate from storage on mount
    const storedToken = localStorage.getItem(process.env.NEXT_PUBLIC_JWT_TOKEN_KEY || 'cybernow_token');
    
    if (!storedToken && !token) {
      router.push('/auth/login');
    }
  }, [token, router]);

  return { isAuthenticated };
};

export const usePublicRoute = () => {
  const router = useRouter();
  const { isAuthenticated, token } = useAuthStore();

  useEffect(() => {
    const storedToken = localStorage.getItem(process.env.NEXT_PUBLIC_JWT_TOKEN_KEY || 'cybernow_token');
    
    if (storedToken || token) {
      router.push('/dashboard');
    }
  }, [isAuthenticated, token, router]);
};
