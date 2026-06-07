'use client'

import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hoverEffect?: boolean
}

export default function Card({ children, className = '', hoverEffect = true }: CardProps) {
  const hoverClass = hoverEffect ? 'hover:shadow-xl hover:scale-105 transition-all duration-300' : ''

  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${hoverClass} ${className}`}>
      {children}
    </div>
  )
}
