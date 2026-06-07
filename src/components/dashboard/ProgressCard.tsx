'use client';

import { Dashboard as DashboardType } from '@/lib/types';
import Link from 'next/link';

interface ProgressCardProps {
  data: DashboardType | null;
}

export default function ProgressCard({ data }: ProgressCardProps) {
  const course = data?.data?.current_course;
  const progress = data?.data?.progress_percentage || 0;

  if (!course) {
    return (
      <div className="card text-center">
        <div className="text-4xl mb-4">📚</div>
        <h3 className="text-lg font-bold text-cybernow-primary mb-2">No Active Course</h3>
        <p className="text-gray-600 mb-4">Enroll in a course to start learning and building your skills.</p>
        <Link href="/curriculum" className="btn-primary">
          Browse Courses
        </Link>
      </div>
    );
  }

  return (
    <div className="card">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-cybernow-primary mb-2">{course.name}</h3>
        <p className="text-sm text-gray-600 mb-4">{course.description}</p>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-cybernow-primary">Progress</span>
            <span className="text-sm font-bold text-cybernow-secondary">{progress}%</span>
          </div>
          <div className="bg-gray-200 rounded-full h-4 overflow-hidden">
            <div
              className="bg-gradient-to-r from-cybernow-secondary to-cybernow-accent h-full transition-all duration-300 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="text-center">
          <p className="text-2xl font-bold text-cybernow-secondary">{course.duration_weeks}</p>
          <p className="text-xs text-gray-600">weeks</p>
        </div>
        <div className="text-center border-l border-r border-gray-200">
          <p className="text-2xl font-bold text-cybernow-secondary">
            {data?.data?.acquired_skills?.length || 0}
          </p>
          <p className="text-xs text-gray-600">skills</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-cybernow-secondary">
            {data?.data?.job_recommendations?.length || 0}
          </p>
          <p className="text-xs text-gray-600">matches</p>
        </div>
      </div>

      <Link href="/curriculum" className="btn-primary w-full mt-4">
        Continue Learning
      </Link>
    </div>
  );
}
