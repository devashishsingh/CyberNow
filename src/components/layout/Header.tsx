'use client';

import { useAuthStore } from '@/lib/context/authStore';
import { Bell, Settings, User } from 'lucide-react';

export default function Header() {
  const { user } = useAuthStore();

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold text-cybernow-primary">Dashboard</h1>
        <p className="text-sm text-gray-600">Welcome back, {user?.cybernow_id}</p>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
          <Bell size={20} />
        </button>
        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
          <Settings size={20} />
        </button>
        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
          <User size={20} />
        </button>
      </div>
    </header>
  );
}
