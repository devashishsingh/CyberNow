'use client';

import { useEffect, useState } from 'react';
import { useAuthStore } from '@/lib/context/authStore';
import { useProtectedRoute } from '@/lib/hooks/useRouteProtection';
import { apiClient } from '@/lib/api/client';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import { Job, JobMatchingResult } from '@/lib/types';
import Link from 'next/link';

export default function JobsPage() {
  useProtectedRoute();

  const { user } = useAuthStore();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [recommendations, setRecommendations] = useState<JobMatchingResult[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'matches' | 'all'>('matches');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [jobsResponse, matchResponse] = await Promise.all([
          apiClient.getJobs(),
          apiClient.getJobMatching(),
        ]);
        setJobs(jobsResponse.data.data || []);
        const recData = matchResponse.data.data;
        setRecommendations(Array.isArray(recData) ? recData : [recData]);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex h-screen bg-cybernow-light">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-auto">
          <div className="container-app py-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-cybernow-primary mb-2">Job Opportunities</h1>
              <p className="text-gray-600">Explore cybersecurity jobs matched to your skill level.</p>
            </div>

            {/* Tabs */}
            <div className="flex gap-4 mb-6 border-b border-gray-200">
              <button
                onClick={() => setActiveTab('matches')}
                className={`px-4 py-2 font-medium border-b-2 transition-colors ${
                  activeTab === 'matches'
                    ? 'border-cybernow-secondary text-cybernow-secondary'
                    : 'border-transparent text-gray-600 hover:text-cybernow-primary'
                }`}
              >
                Your Matches ({recommendations.length})
              </button>
              <button
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 font-medium border-b-2 transition-colors ${
                  activeTab === 'all'
                    ? 'border-cybernow-secondary text-cybernow-secondary'
                    : 'border-transparent text-gray-600 hover:text-cybernow-primary'
                }`}
              >
                All Jobs ({jobs.length})
              </button>
            </div>

            {isLoading ? (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-cybernow-secondary"></div>
                <p className="mt-4 text-gray-600">Loading jobs...</p>
              </div>
            ) : activeTab === 'matches' ? (
              recommendations.length === 0 ? (
                <div className="card text-center">
                  <p className="text-lg text-gray-600 mb-4">No job matches yet.</p>
                  <p className="text-sm text-gray-500">Complete more assessments and build your skills to unlock job opportunities!</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {recommendations.map((rec: any, idx: number) => (
                    <div key={idx} className="card border-2 border-cybernow-secondary">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-cybernow-primary">{rec.job_title}</h3>
                          <p className="text-gray-600">{rec.company_name}</p>
                        </div>
                        <div className="text-center">
                          <div className="text-4xl font-bold text-cybernow-secondary">
                            {rec.match_percentage}%
                          </div>
                          <p className="text-xs text-gray-500">Match</p>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="bg-gray-200 rounded-full h-2 overflow-hidden mb-2">
                          <div
                            className="bg-cybernow-secondary h-full"
                            style={{ width: `${rec.match_percentage}%` }}
                          />
                        </div>
                        <p className="text-sm text-gray-600">{rec.message}</p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 mb-4 pb-4 border-t border-gray-200 pt-4">
                        <div>
                          <p className="text-xs text-gray-500 mb-2">Your Skills</p>
                          <div className="flex flex-wrap gap-2">
                            {rec.matched_skills?.map((skill: string) => (
                              <span key={skill} className="badge-success text-xs">
                                ✓ {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 mb-2">Need to Learn</p>
                          <div className="flex flex-wrap gap-2">
                            {rec.missing_skills?.map((skill: string) => (
                              <span key={skill} className="badge-warning text-xs">
                                + {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <button className="btn-primary w-full">
                        Apply Now
                      </button>
                    </div>
                  ))}
                </div>
              )
            ) : (
              <div className="space-y-4">
                {jobs.length === 0 ? (
                  <div className="card text-center">
                    <p className="text-lg text-gray-600">No jobs available yet.</p>
                  </div>
                ) : (
                  jobs.map((job) => (
                    <div key={job.id} className="card">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-cybernow-primary">{job.job_title}</h3>
                          <p className="text-gray-600">{job.company_name}</p>
                        </div>
                      </div>

                      <p className="text-sm text-gray-600 mb-4">{job.description}</p>

                      <div className="grid md:grid-cols-3 gap-4 mb-4 pb-4 border-t border-gray-200 pt-4">
                        <div>
                          <p className="text-xs text-gray-500">Location</p>
                          <p className="font-medium text-cybernow-primary">{job.location}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Salary</p>
                          <p className="font-medium text-cybernow-secondary">{job.salary_range}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Type</p>
                          <p className="font-medium text-cybernow-primary capitalize">{job.job_type}</p>
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-xs text-gray-500 mb-2">Required Skills</p>
                        <div className="flex flex-wrap gap-2">
                          {job.skills_required?.map((skill: string) => (
                            <span key={skill} className="bg-blue-50 text-blue-700 px-3 py-1 rounded text-xs font-medium">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <button className="btn-primary w-full">View Details</button>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
