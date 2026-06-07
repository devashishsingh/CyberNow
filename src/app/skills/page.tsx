'use client';

import { useEffect, useState } from 'react';
import { useAuthStore } from '@/lib/context/authStore';
import { useProtectedRoute } from '@/lib/hooks/useRouteProtection';
import { apiClient } from '@/lib/api/client';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import { Skill } from '@/lib/types';

export default function SkillsPage() {
  useProtectedRoute();

  const { user } = useAuthStore();
  const [skills, setSkills] = useState<Skill[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await apiClient.getUserSkills();
        setSkills(response.data.data || []);
      } catch (error) {
        console.error('Failed to fetch skills:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSkills();
  }, []);

  const skillsByLevel = {
    advanced: skills.filter((s) => s.proficiency_level === 'advanced'),
    intermediate: skills.filter((s) => s.proficiency_level === 'intermediate'),
    beginner: skills.filter((s) => s.proficiency_level === 'beginner'),
  };

  return (
    <div className="flex h-screen bg-cybernow-light">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-auto">
          <div className="container-app py-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-cybernow-primary mb-2">My Skills</h1>
              <p className="text-gray-600">Track your cybersecurity skills progression and readiness for jobs.</p>
            </div>

            {isLoading ? (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-cybernow-secondary"></div>
                <p className="mt-4 text-gray-600">Loading skills...</p>
              </div>
            ) : skills.length === 0 ? (
              <div className="card text-center">
                <p className="text-lg text-gray-600 mb-4">No skills acquired yet.</p>
                <p className="text-sm text-gray-500">Complete assessments in the curriculum to start building your skill profile.</p>
              </div>
            ) : (
              <div className="space-y-8">
                {/* Skills Overview */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="card text-center">
                    <div className="text-4xl font-bold text-cybernow-secondary mb-2">
                      {skillsByLevel.advanced.length}
                    </div>
                    <p className="text-sm text-gray-600">Advanced Skills</p>
                  </div>
                  <div className="card text-center">
                    <div className="text-4xl font-bold text-cybernow-accent mb-2">
                      {skillsByLevel.intermediate.length}
                    </div>
                    <p className="text-sm text-gray-600">Intermediate Skills</p>
                  </div>
                  <div className="card text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">
                      {skillsByLevel.beginner.length}
                    </div>
                    <p className="text-sm text-gray-600">Beginner Skills</p>
                  </div>
                </div>

                {/* Advanced Skills */}
                {skillsByLevel.advanced.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-bold text-cybernow-primary mb-4">Advanced Skills</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      {skillsByLevel.advanced.map((skill) => (
                        <div key={skill.id} className="card border-2 border-green-200 bg-green-50">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg font-bold text-cybernow-primary">{skill.skill_name}</h3>
                            <span className="badge-success">Advanced</span>
                          </div>
                          {skill.verified && (
                            <p className="text-sm text-green-600">✓ Industry Verified</p>
                          )}
                          <p className="text-xs text-gray-500 mt-2">
                            Acquired: {new Date(skill.acquired_at).toLocaleDateString()}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Intermediate Skills */}
                {skillsByLevel.intermediate.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-bold text-cybernow-primary mb-4">Intermediate Skills</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      {skillsByLevel.intermediate.map((skill) => (
                        <div key={skill.id} className="card border-2 border-amber-200 bg-amber-50">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg font-bold text-cybernow-primary">{skill.skill_name}</h3>
                            <span className="badge-warning">Intermediate</span>
                          </div>
                          {skill.verified && (
                            <p className="text-sm text-amber-600">✓ Industry Verified</p>
                          )}
                          <p className="text-xs text-gray-500 mt-2">
                            Acquired: {new Date(skill.acquired_at).toLocaleDateString()}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Beginner Skills */}
                {skillsByLevel.beginner.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-bold text-cybernow-primary mb-4">Beginner Skills</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      {skillsByLevel.beginner.map((skill) => (
                        <div key={skill.id} className="card border-2 border-blue-200 bg-blue-50">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg font-bold text-cybernow-primary">{skill.skill_name}</h3>
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                              Beginner
                            </span>
                          </div>
                          {skill.verified && (
                            <p className="text-sm text-blue-600">✓ Industry Verified</p>
                          )}
                          <p className="text-xs text-gray-500 mt-2">
                            Acquired: {new Date(skill.acquired_at).toLocaleDateString()}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
