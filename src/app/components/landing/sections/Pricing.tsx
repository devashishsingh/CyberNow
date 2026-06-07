'use client'

import Link from 'next/link'
import Card from '@/app/components/landing/shared/Card'
import Button from '@/app/components/landing/shared/Button'
import WhatsAppButton from '@/app/components/landing/shared/WhatsAppButton'
import { Check } from 'lucide-react'

export default function Pricing() {
  const features = [
    '8 weeks of live training',
    'Hands-on labs and projects',
    'Expert instructors',
    'Course materials and resources',
    'Certificate of completion',
    'Lifetime access to recordings',
  ]

  return (
    <section id="pricing" className="py-20 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
          Invest in Your <span className="text-cybernow-accent">Learning</span>
        </h2>
        <p className="text-center text-blue-100 mb-12">One-time investment, lifetime value</p>

        <Card hoverEffect className="bg-slate-800 border border-blue-700 p-8 max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">Cybersecurity Mastery Program</h3>
            <div className="flex items-baseline justify-center gap-2 mb-4">
              <span className="text-5xl font-bold text-cybernow-accent">₹3,499</span>
              <span className="text-xl text-blue-100">one-time</span>
            </div>
            <p className="text-blue-100">Complete access to 8-week intensive program</p>
          </div>

          <ul className="space-y-4 mb-8">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <Check size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">{feature}</span>
              </li>
            ))}
          </ul>

          <Link href="/auth/register" className="block w-full mb-4">
            <Button fullWidth variant="primary" size="lg">
              Start Learning Today
            </Button>
          </Link>

          <div className="text-center">
            <p className="text-blue-100 mb-4">Questions about the program?</p>
            <WhatsAppButton size="md" />
          </div>
        </Card>
      </div>
    </section>
  )
}
