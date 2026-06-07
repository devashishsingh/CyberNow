'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/hooks/useAuth';
import { usePublicRoute } from '@/lib/hooks/useRouteProtection';
import QRCode from 'qrcode.react';

export default function Register() {
  usePublicRoute();

  const router = useRouter();
  const { register, verifySetup, qrCode, secret, cybernowId } = useAuth();
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [step, setStep] = useState<'register' | 'verify'>('register');
  const [totpCode, setTotpCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const result = await register(email, dob);
    if (result) {
      setStep('verify');
    }

    setIsLoading(false);
  };

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const result = await verifySetup(totpCode);
    if (result) {
      router.push('/auth/login');
    }

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
          Create Account
        </h1>
        <p className="text-gray-600 mb-6">Join CyberNow and start your cybersecurity journey</p>

        {step === 'register' ? (
          <form onSubmit={handleRegister}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-cybernow-primary mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="your@email.com"
                className="input-field"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-cybernow-primary mb-2">
                Date of Birth
              </label>
              <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                required
                className="input-field"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="btn-primary w-full mb-4"
            >
              {isLoading ? 'Setting up...' : 'Continue'}
            </button>

            <p className="text-center text-sm text-gray-600">
              Already have an account?{' '}
              <Link href="/auth/login" className="text-cybernow-secondary font-medium hover:underline">
                Login here
              </Link>
            </p>
          </form>
        ) : (
          <div>
            <div className="mb-6">
              {cybernowId && (
                <div className="bg-green-50 p-3 rounded border border-green-200 mb-4">
                  <p className="text-xs text-gray-600 mb-1">Your CyberNow ID:</p>
                  <p className="text-sm font-mono font-bold text-green-900 text-center">{cybernowId}</p>
                </div>
              )}
              <p className="text-sm text-gray-600 mb-4">
                Scan this QR code with your authenticator app (Google Authenticator, Authy, Microsoft Authenticator):
              </p>
              {qrCode && (
                <div className="flex justify-center mb-4">
                  <QRCode value={qrCode} size={200} level="H" />
                </div>
              )}
              {secret && (
                <div className="bg-blue-50 p-4 rounded border border-blue-200 mb-4">
                  <p className="text-xs font-mono text-center text-blue-900">{secret}</p>
                  <p className="text-xs text-center text-blue-700 mt-2">
                    Or enter this code manually
                  </p>
                </div>
              )}
            </div>

            <form onSubmit={handleVerify}>
              <div className="mb-6">
                <label className="block text-sm font-medium text-cybernow-primary mb-2">
                  Verification Code (6 digits)
                </label>
                <input
                  type="text"
                  value={totpCode}
                  onChange={(e) => setTotpCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                  placeholder="000000"
                  maxLength={6}
                  className="input-field text-center text-2xl tracking-widest"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading || totpCode.length !== 6}
                className="btn-primary w-full"
              >
                {isLoading ? 'Verifying...' : 'Verify & Continue'}
              </button>
            </form>
          </div>
        )}
      </div>
      </div>
    </div>
  );
}
