'use client'

import Card from '@/app/components/landing/shared/Card'
import { BookOpen, Users, Code2, Zap } from 'lucide-react'

export default function WhyCyberNow() {
  const features = [
    {
      icon: BookOpen,
      title: 'Hands-On Learning',
      description: 'Learn through practical labs and real-world projects. Apply concepts immediately, not just theory.',
    },
    {
      icon: Users,
      title: 'Expert Instructors',
      description: 'Learn from cybersecurity professionals with real industry experience. Get guidance and feedback live.',
    },
    {
      icon: Code2,
      title: 'Industry-Relevant Skills',
      description: 'Focus on skills that companies are actively looking for. Build expertise that matters in the field.',
    },
    {
      icon: Zap,
      title: 'Intensive & Efficient',
      description: '8 weeks of focused learning. Intensive curriculum designed to get you job-ready in a short timeframe.',
    },
  ]

  return (
    <section id="why-us" className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          Why Learn With <span className="text-cybernow-accent">CyberNow?</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} hoverEffect className="bg-slate-700 border border-blue-600">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Icon size={32} className="text-cybernow-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-blue-100">{feature.description}</p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
