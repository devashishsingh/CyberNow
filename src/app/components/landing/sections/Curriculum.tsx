'use client'

import Card from '@/app/components/landing/shared/Card'
import { BookOpen } from 'lucide-react'

export default function Curriculum() {
  const weeks = [
    {
      week: 'Week 1-2',
      title: 'Fundamentals',
      topics: 'Networking basics, Firewalls, Security principles',
    },
    {
      week: 'Week 3-4',
      title: 'Systems & Monitoring',
      topics: 'Windows & Linux, SIEM platforms, Log analysis',
    },
    {
      week: 'Week 5-6',
      title: 'Threat Detection',
      topics: 'Alert investigation, Threat hunting, Detection rules',
    },
    {
      week: 'Week 7-8',
      title: 'Incident Response',
      topics: 'Digital forensics, Incident handling, Capstone project',
    },
  ]

  return (
    <section id="curriculum" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
          What You'll Learn in <span className="text-cybernow-accent">8 Weeks</span>
        </h2>
        <p className="text-center text-blue-100 mb-12">Practical cybersecurity skills taught week-by-week</p>

        <div className="grid md:grid-cols-2 gap-6">
          {weeks.map((item, idx) => (
            <Card key={idx} hoverEffect className="border-l-4 border-cybernow-accent bg-slate-800">
              <div className="flex gap-3 mb-4">
                <BookOpen className="text-cybernow-accent flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-white">{item.week}</h3>
                  <p className="text-cybernow-accent font-semibold">{item.title}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <p className="text-sm text-blue-200">What you'll learn:</p>
                  <p className="font-semibold text-blue-100">{item.topics}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
