'use client';

import { Dashboard as DashboardType, Skill } from '@/lib/types';
import Link from 'next/link';
import { Award } from 'lucide-react';

interface SkillsCardProps {
  data: DashboardType | null;
}

export default function SkillsCard({ data }: SkillsCardProps) {
  const skills = data?.data?.acquired_skills || [];

  if (skills.length === 0) {
    return (
      <div className="card text-center">
        <Award className="mx-auto mb-4 text-gray-400" size={48} />
        <h3 className="text-lg font-bold text-cybernow-primary mb-2">No Skills Yet</h3>
        <p className="text-gray-600 mb-4">
          Complete your first assessment to start building your skill profile.
        </p>
        <Link href="/curriculum" className="btn-primary">
          Start Learning
        </Link>
      </div>
    );
  }

  return (
    <div className="card">
      <h2 className="text-2xl font-bold text-cybernow-primary mb-6">Your Skills</h2>

      <div className="space-y-3">
        {skills.map((skill: Skill) => (
          <div
            key={skill.id}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200"
          >
            <div>
              <p className="font-medium text-cybernow-primary">{skill.skill_name}</p>
              <div className="flex items-center gap-2 mt-1">
                <span
                  className={`text-xs font-medium px-2 py-1 rounded ${
                    skill.proficiency_level === 'advanced'
                      ? 'bg-green-100 text-green-800'
                      : skill.proficiency_level === 'intermediate'
                      ? 'bg-amber-100 text-amber-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}
                >
                  {skill.proficiency_level.charAt(0).toUpperCase() + skill.proficiency_level.slice(1)}
                </span>
                {skill.verified && <span className="text-xs text-green-600">✓ Verified</span>}
              </div>
            </div>
            <div className="text-right text-sm text-gray-600">
              {new Date(skill.acquired_at).toLocaleDateString()}
            </div>
          </div>
        ))}
      </div>

      <Link href="/skills" className="btn-secondary w-full mt-4">
        View All Skills & Progress
      </Link>
    </div>
  );
}
