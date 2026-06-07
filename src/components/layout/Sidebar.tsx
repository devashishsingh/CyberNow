'use client';

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useAuthStore } from '@/lib/context/authStore';
import { useAuth } from '@/lib/hooks/useAuth';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const menuItems = [
  { href: '/dashboard', label: 'Dashboard', icon: '📊' },
  { href: '/curriculum', label: 'Curriculum', icon: '📚' },
  { href: '/jobs', label: 'Job Matching', icon: '🎯' },
  { href: '/skills', label: 'My Skills', icon: '⭐' },
  { href: '/mentors', label: 'Mentors', icon: '👨‍🏫' },
  { href: '/community', label: 'Community', icon: '💬' },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { logout } = useAuth();
  const { user } = useAuthStore();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
    router.push('/');
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-cybernow-secondary text-white rounded-lg"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 fixed md:relative w-64 h-screen bg-cybernow-primary text-white transition-transform duration-300 z-40 flex flex-col`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-blue-900">
          <Link href="/dashboard" className="text-2xl font-bold">
            Cyber<span className="text-cybernow-accent">Now</span>
          </Link>
          <p className="text-xs text-blue-300 mt-2">v0.1.0 - MVP</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-6 space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-cybernow-secondary text-white'
                    : 'text-blue-200 hover:bg-blue-900'
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* User Section */}
        <div className="p-6 border-t border-blue-900">
          <div className="bg-blue-900 rounded-lg p-4 mb-4">
            <p className="text-xs text-blue-300">Logged in as</p>
            <p className="text-sm font-medium text-white truncate">{user?.cybernow_id}</p>
            <p className="text-xs text-blue-300 capitalize">{user?.role}</p>
          </div>
          <button
            onClick={handleLogout}
            className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
