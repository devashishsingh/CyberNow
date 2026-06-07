'use client';

import { useEffect, useState } from 'react';
import { useAuthStore } from '@/lib/context/authStore';
import { useProtectedRoute } from '@/lib/hooks/useRouteProtection';
import { apiClient } from '@/lib/api/client';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import { Course } from '@/lib/types';
import Link from 'next/link';

export default function CurriculumPage() {
  useProtectedRoute();

  const { user } = useAuthStore();
  const [courses, setCourses] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await apiClient.getCourses();
        setCourses(response.data.data || []);
      } catch (error) {
        console.error('Failed to fetch courses:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="flex h-screen bg-cybernow-light">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-auto">
          <div className="container-app py-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-cybernow-primary mb-2">Learning Paths</h1>
              <p className="text-gray-600">
                Choose a course and start building your cybersecurity skills aligned with real job opportunities.
              </p>
            </div>

            {isLoading ? (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-cybernow-secondary"></div>
                <p className="mt-4 text-gray-600">Loading courses...</p>
              </div>
            ) : courses.length === 0 ? (
              <div className="card text-center">
                <p className="text-lg text-gray-600 mb-4">No courses available yet.</p>
                <p className="text-sm text-gray-500">Check back soon for our SOC Analyst and other cybersecurity courses!</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course) => (
                  <div key={course.id} className="card hover:shadow-xl transition-shadow">
                    <div className="mb-4">
                      <div className="text-4xl mb-2">📚</div>
                      <h3 className="text-xl font-bold text-cybernow-primary mb-2">{course.name}</h3>
                      <p className="text-sm text-gray-600 line-clamp-2">{course.description}</p>
                    </div>

                    <div className="space-y-2 mb-4 pb-4 border-b border-gray-200">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Duration:</span>
                        <span className="font-medium text-cybernow-secondary">{course.duration_weeks} weeks</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Level:</span>
                        <span className="font-medium text-cybernow-secondary capitalize">
                          {course.difficulty_level}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Price:</span>
                        <span className="font-medium text-cybernow-accent">₹{course.price}</span>
                      </div>
                    </div>

                    <Link
                      href={`/curriculum/${course.id}`}
                      className="btn-primary w-full"
                    >
                      View Details →
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
