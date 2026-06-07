'use client'

import Card from '@/app/components/landing/shared/Card'
import { CheckCircle } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      step: 1,
      title: 'Enroll',
      description: 'Register and pay ₹3,499 one-time. Gain lifetime access to all course materials and recordings.',
    },
    {
      step: 2,
      title: 'Learn',
      description: 'Attend live training sessions twice a week. Engage with instructors. Complete hands-on labs and projects.',
    },
    {
      step: 3,
      title: 'Practice',
      description: 'Build real-world projects. Apply concepts in practical scenarios. Get feedback from experts.',
    },
    {
      step: 4,
      title: 'Develop Skills',
      description: 'Master cybersecurity techniques that companies are looking for. Build portfolio of completed projects.',
    },
    {
      step: 5,
      title: 'Earn Certificate',
      description: 'Complete the program and earn your certificate. You\'re now equipped with job-ready cybersecurity skills.',
    },
  ]

  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
          How the <span className="text-cybernow-accent">Learning Path</span> Works
        </h2>
        <p className="text-center text-blue-100 mb-12">Simple, structured 8-week program</p>

        <div className="space-y-4">
          {steps.map((item, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cybernow-accent text-white font-bold">
                  {item.step}
                </div>
              </div>
              <Card hoverEffect={false} className="flex-1 bg-slate-700 border border-blue-600">
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-blue-100">{item.description}</p>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-900 to-slate-800 rounded-lg p-8 text-center border border-cybernow-accent">
          <CheckCircle size={40} className="text-cybernow-accent mx-auto mb-4" />
          <p className="text-blue-100">
            <span className="font-bold text-white">You'll be job-ready in 8 weeks</span>
            <br />
            <span className="text-sm">With practical skills companies are looking for</span>
          </p>
        </div>
      </div>
    </section>
  )
}
