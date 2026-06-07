import { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { apiClient } from '../api/client';
import { useAuthStore } from '../context/authStore';
import { RegisterResponse, AuthResponse } from '../types';

export const useAuth = () => {
  const router = useRouter();
  const { setUser, setToken, logout: storeLogout, setIsLoading } = useAuthStore();
  const [qrCode, setQrCode] = useState<string | null>(null);
  const [secret, setSecret] = useState<string | null>(null);
  const [cybernowId, setCybernowId] = useState<string | null>(null);

  const register = useCallback(
    async (email: string, dob: string) => {
      setIsLoading(true);
      try {
        const { data } = await apiClient.register(email, dob);
        const result: RegisterResponse = data;

        if (result.success && result.data) {
          // Store the otpauth_url for QR code generation
          setQrCode(result.data.qr_code_url);
          setSecret(result.data.secret);
          setCybernowId(result.data.cybernow_id);
          toast.success('Registration initiated! Set up your authenticator app.');
          return result;
        } else {
          toast.error(result.error || 'Registration failed');
          return null;
        }
      } catch (error: any) {
        console.error('Register error:', error);
        toast.error(error.response?.data?.error || 'Registration failed');
        return null;
      } finally {
        setIsLoading(false);
      }
    },
    [setIsLoading]
  );

  const verifySetup = useCallback(
    async (totp_code: string) => {
      if (!cybernowId) {
        toast.error('CyberNow ID not found');
        return null;
      }

      setIsLoading(true);
      try {
        await apiClient.verifySetup(cybernowId, totp_code);
        toast.success('TOTP setup verified! Proceed to login.');
        return true;
      } catch (error: any) {
        toast.error(error.response?.data?.error || 'Verification failed');
        return null;
      } finally {
        setIsLoading(false);
      }
    },
    [cybernowId, setIsLoading]
  );

  const login = useCallback(
    async (cybernow_id: string, totp_code: string) => {
      setIsLoading(true);
      try {
        const { data } = await apiClient.login(cybernow_id, totp_code);
        const result: AuthResponse = data;

        if (result.success && result.data) {
          setToken(result.data.jwt_token);
          apiClient.setAuthHeader(result.data.jwt_token);

          // Fetch user profile
          try {
            const profileResponse = await apiClient.getUserProfile();
            setUser(profileResponse.data.data);
          } catch {
            // User set without full profile for now
            setUser({
              id: result.data.user_id,
              cybernow_id: result.data.cybernow_id,
              email: '',
              role: (result.data.role as any) || 'student',
            });
          }

          toast.success('Logged in successfully!');
          router.push('/dashboard');
          return result.data;
        } else {
          toast.error(result.error || 'Login failed');
          return null;
        }
      } catch (error: any) {
        toast.error(error.response?.data?.error || 'Login failed');
        return null;
      } finally {
        setIsLoading(false);
      }
    },
    [setToken, setUser, router, setIsLoading]
  );

  const logout = useCallback(async () => {
    apiClient.clearAuthHeader();
    storeLogout();
    router.push('/');
    toast.success('Logged out successfully');
  }, [storeLogout, router]);

  return {
    register,
    verifySetup,
    login,
    logout,
    qrCode,
    secret,
    cybernowId,
  };
};
