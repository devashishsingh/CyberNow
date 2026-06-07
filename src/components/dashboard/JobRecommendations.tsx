'use client';

import { Dashboard as DashboardType } from '@/lib/types';
import Link from 'next/link';
import { TrendingUp } from 'lucide-react';

interface JobRecommendationsProps {
  data: DashboardType | null;
}

export default function JobRecommendations({ data }: JobRecommendationsProps) {
  const recommendations = data?.data?.job_recommendations || [];

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-cybernow-primary">Job Matches</h2>
        <TrendingUp className="text-cybernow-accent" size={24} />
      </div>

      {recommendations.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-600 mb-4">No job matches yet. Keep learning to unlock opportunities!</p>
          <Link href="/jobs" className="btn-primary">
            View All Jobs
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {recommendations.slice(0, 5).map((job: any, index: number) => (
            <div
              key={index}
              className="p-4 border-2 border-gray-200 rounded-lg hover:border-cybernow-secondary transition-colors"
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="font-bold text-cybernow-primary">{job.job_title}</p>
                  <p className="text-sm text-gray-600">{job.company_name}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-cybernow-secondary">
                    {job.match_percentage}%
                  </div>
                  <p className="text-xs text-gray-500">match</p>
                </div>
              </div>

              <div className="mb-3">
                <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-cybernow-secondary to-cybernow-accent h-full"
                    style={{ width: `${job.match_percentage}%` }}
                  />
                </div>
              </div>

              <p className="text-xs text-gray-600">{job.message}</p>
            </div>
          ))}

          <Link href="/jobs" className="btn-ghost w-full text-center border border-cybernow-secondary text-cybernow-secondary">
            View All Matches →
          </Link>
        </div>
      )}
    </div>
  );
}
