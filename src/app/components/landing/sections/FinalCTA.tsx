'use client'

import Link from 'next/link'
import Button from '@/app/components/landing/shared/Button'
import WhatsAppButton from '@/app/components/landing/shared/WhatsAppButton'

export default function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Start <span className="text-cybernow-accent">Learning?</span>
        </h2>

        <p className="text-xl text-blue-100 mb-8">
          8 weeks of intensive hands-on training to master cybersecurity skills that companies need.
        </p>

        {/* One-Time Price */}
        <div className="bg-slate-800 border border-cybernow-accent rounded-lg p-8 mb-8 max-w-md mx-auto">
          <p className="text-blue-100 mb-2">Complete Program Access</p>
          <div className="text-5xl font-bold text-cybernow-accent mb-2">₹3,499</div>
          <p className="text-blue-100 text-sm">One-time payment • Lifetime access</p>
        </div>

        {/* Main CTA */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
          <Link href="/auth/register">
            <Button variant="primary" size="lg">
              Start Learning Today
            </Button>
          </Link>
          <WhatsAppButton size="lg" />
        </div>

        <p className="text-blue-100">Have questions? Reach out to us anytime.</p>
      </div>
    </section>
  )
}
