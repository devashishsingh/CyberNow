'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/lib/context/authStore'
import Header from '@/app/components/landing/layout/Header'
import Footer from '@/app/components/landing/layout/Footer'
import Hero from '@/app/components/landing/sections/Hero'
import WhyCyberNow from '@/app/components/landing/sections/WhyCyberNow'
import Comparison from '@/app/components/landing/sections/Comparison'
import Curriculum from '@/app/components/landing/sections/Curriculum'
import HowItWorks from '@/app/components/landing/sections/HowItWorks'
import Pricing from '@/app/components/landing/sections/Pricing'
import Testimonials from '@/app/components/landing/sections/Testimonials'
import Trust from '@/app/components/landing/sections/Trust'
import FAQ from '@/app/components/landing/sections/FAQ'
import FinalCTA from '@/app/components/landing/sections/FinalCTA'

export default function Home() {
  const router = useRouter()
  const { hydrateFromStorage } = useAuthStore()

  useEffect(() => {
    hydrateFromStorage()
    const storedToken = localStorage.getItem(process.env.NEXT_PUBLIC_JWT_TOKEN_KEY || 'cybernow_token')
    if (storedToken) {
      router.push('/dashboard')
    }
  }, [router, hydrateFromStorage])

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        <Hero />
        <WhyCyberNow />
        <Comparison />
        <Curriculum />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <Trust />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  )
}
