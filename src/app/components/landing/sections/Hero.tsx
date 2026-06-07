'use client'

import Link from 'next/link'
import { Play } from 'lucide-react'
import Button from '@/app/components/landing/shared/Button'
import WhatsAppButton from '@/app/components/landing/shared/WhatsAppButton'

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-900 flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Headline */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="text-white">Master Cybersecurity</span>
          <br />
          <span className="text-cybernow-accent">Skills Companies Are Looking For</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
          Learn hands-on cybersecurity skills from industry experts. Build real-world expertise through practical projects in just 8 weeks.
        </p>

        {/* Learning Features */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm md:text-base text-blue-100">
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span> Live Training
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span> Expert Instructors
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span> Real Projects
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span> Practical Labs
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-16">
          <Link href="/auth/register">
            <Button variant="primary" size="lg">
              Start Learning
            </Button>
          </Link>
          <WhatsAppButton size="lg" />
        </div>

        {/* Learning Outcomes */}
        <div className="grid grid-cols-3 gap-8 mb-12">
          <div>
            <div className="text-4xl font-bold text-orange-400">8</div>
            <div className="text-blue-100">Weeks</div>
            <div className="text-sm text-gray-400">Intensive Learning</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-orange-400">50+</div>
            <div className="text-blue-100">Skills Covered</div>
            <div className="text-sm text-gray-400">Industry Standard</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-orange-400">₹3,499</div>
            <div className="text-blue-100">One-Time</div>
            <div className="text-sm text-gray-400">Lifetime Access</div>
          </div>
        </div>

        {/* Video Preview */}
        <div className="relative w-full max-w-2xl mx-auto">
          <div className="bg-gradient-to-b from-blue-600 to-blue-500 rounded-xl overflow-hidden shadow-2xl aspect-video flex items-center justify-center cursor-pointer hover:shadow-orange-500/50 transition-shadow">
            <Play size={64} className="text-white" />
          </div>
          <div className="text-sm text-gray-300 text-center mt-4">See how our platform works (2 min video)</div>
        </div>
      </div>
    </section>
  )
}
