'use client';

import { User, Dashboard as DashboardType } from '@/lib/types';

interface DashboardHeroProps {
  user: User | null;
  data: DashboardType | null;
}

export default function DashboardHero({ user, data }: DashboardHeroProps) {
  const progressPercentage = data?.data?.progress_percentage || 0;

  return (
    <div className="card bg-gradient-to-r from-cybernow-secondary to-blue-900 text-white">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Welcome back, {user?.cybernow_id}!</h1>
          <p className="text-blue-100 mb-4">
            You're on track to master cybersecurity. Keep learning to unlock more job opportunities!
          </p>

          <div className="space-y-2">
            <p className="text-sm font-medium">Current Progress</p>
            <div className="bg-blue-900 rounded-full h-3 overflow-hidden w-48">
              <div
                className="bg-cybernow-accent h-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <p className="text-xs text-blue-200">{progressPercentage}% Complete</p>
          </div>
        </div>

        <div className="text-6xl opacity-20">🔒</div>
      </div>
    </div>
  );
}
