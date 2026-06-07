'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Button from '@/app/components/landing/shared/Button'
import WhatsAppButton from '@/app/components/landing/shared/WhatsAppButton'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    setIsOpen(false)
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950 shadow-lg border-b border-blue-900">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="text-2xl md:text-3xl font-bold">
            <span className="text-white">Cyber</span>
            <span className="text-cybernow-accent">Now</span>
          </div>
          <span className="text-xs text-gray-400 mt-1 hidden md:block">by Bloyi</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-white hover:text-cybernow-accent transition text-sm font-medium">
            Home
          </Link>
          <button
            onClick={() => scrollToSection('why-us')}
            className="text-white hover:text-cybernow-accent transition"
          >
            Why Us
          </button>
          <button
            onClick={() => scrollToSection('curriculum')}
            className="text-white hover:text-cybernow-accent transition"
          >
            Curriculum
          </button>
          <Link href="/skills-overview" className="text-white hover:text-cybernow-accent transition">
            Skills Path
          </Link>
          <button
            onClick={() => scrollToSection('pricing')}
            className="text-white hover:text-cybernow-accent transition"
          >
            Pricing
          </button>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <WhatsAppButton size="sm" />
          <Link href="/auth/login" className="text-white hover:text-cybernow-accent transition text-sm font-medium">
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-slate-900 px-4 py-4 space-y-3 border-t border-blue-900">
          <Link href="/" className="block text-white hover:text-cybernow-accent w-full text-left text-sm font-medium">
            Home
          </Link>
          <button
            onClick={() => scrollToSection('why-us')}
            className="block text-white hover:text-cybernow-accent w-full text-left"
          >
            Why Us
          </button>
          <button
            onClick={() => scrollToSection('curriculum')}
            className="block text-white hover:text-cybernow-accent w-full text-left"
          >
            Curriculum
          </button>
          <Link href="/skills-overview" className="block text-white hover:text-cybernow-accent w-full text-left">
            Skills Path
          </Link>
          <button
            onClick={() => scrollToSection('pricing')}
            className="block text-white hover:text-cybernow-accent w-full text-left"
          >
            Pricing
          </button>
          <WhatsAppButton fullWidth size="md" />
          <Link href="/auth/login" className="block text-white hover:text-cybernow-accent text-center">
            Login
          </Link>
        </nav>
      )}
    </header>
  )
}
