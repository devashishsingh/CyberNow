'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/lib/context/authStore';
import { useProtectedRoute } from '@/lib/hooks/useRouteProtection';
import { apiClient } from '@/lib/api/client';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import DashboardHero from '@/components/dashboard/DashboardHero';
import SkillsCard from '@/components/dashboard/SkillsCard';
import JobRecommendations from '@/components/dashboard/JobRecommendations';
import ProgressCard from '@/components/dashboard/ProgressCard';
import { Dashboard as DashboardType } from '@/lib/types';

export default function Dashboard() {
  const router = useRouter();
  useProtectedRoute();

  const { user } = useAuthStore();
  const [dashboardData, setDashboardData] = useState<DashboardType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const response = await apiClient.getStudentDashboard();
        setDashboardData(response.data);
      } catch (error) {
        console.error('Failed to fetch dashboard:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (user) {
      fetchDashboard();
    }
  }, [user]);

  if (isLoading) {
    return (
      <div className="flex h-screen bg-cybernow-light">
        <Sidebar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-cybernow-secondary"></div>
            <p className="mt-4 text-gray-600">Loading your dashboard...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-cybernow-light">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-auto">
          <div className="container-app py-8">
            <DashboardHero user={user} data={dashboardData} />

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="md:col-span-2 space-y-6">
                <ProgressCard data={dashboardData} />
                <SkillsCard data={dashboardData} />
              </div>
              <div>
                <JobRecommendations data={dashboardData} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
