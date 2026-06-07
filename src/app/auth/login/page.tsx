'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/lib/hooks/useAuth';
import { usePublicRoute } from '@/lib/hooks/useRouteProtection';

export default function Login() {
  usePublicRoute();

  const { login } = useAuth();
  const [cybernowId, setCybernowId] = useState('');
  const [totpCode, setTotpCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    await login(cybernowId, totpCode);

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cybernow-primary to-cybernow-secondary">
      {/* Navigation Bar */}
      <div className="bg-white/5 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <div className="text-2xl font-bold">
              <span className="text-white">Cyber</span>
              <span className="text-orange-400">Now</span>
            </div>
          </Link>
          <Link href="/" className="text-white hover:text-orange-400 transition text-sm font-medium">
            ← Back to Home
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="flex items-center justify-center p-4 min-h-[calc(100vh-80px)]">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-cybernow-primary mb-2">
          Welcome Back
        </h1>
        <p className="text-gray-600 mb-6">Login to continue your cybersecurity learning</p>

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-cybernow-primary mb-2">
              CyberNow ID
            </label>
            <input
              type="text"
              value={cybernowId}
              onChange={(e) => setCybernowId(e.target.value.toUpperCase())}
              placeholder="CF-2026-XXXXX"
              required
              className="input-field"
            />
            <p className="text-xs text-gray-500 mt-1">Format: CF-YYYY-XXXXX</p>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-cybernow-primary mb-2">
              Authenticator Code (6 digits)
            </label>
            <input
              type="text"
              value={totpCode}
              onChange={(e) => setTotpCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
              placeholder="000000"
              maxLength={6}
              required
              className="input-field text-center text-2xl tracking-widest"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading || cybernowId.length === 0 || totpCode.length !== 6}
            className="btn-primary w-full mb-4"
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>

          <p className="text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link
              href="/auth/register"
              className="text-cybernow-secondary font-medium hover:underline"
            >
              Register here
            </Link>
          </p>
        </form>
      </div>
      </div>
    </div>
  );
}
