'use client'

import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  onClick?: () => void
  href?: string
  className?: string
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  onClick,
  href,
  className = '',
}: ButtonProps) {
  const baseClasses = 'font-medium transition-all duration-200 rounded-lg'

  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg',
  }

  const variantClasses = {
    primary: 'bg-orange-500 text-white hover:bg-orange-600 shadow-lg hover:shadow-orange-500/50',
    secondary: 'border-2 border-white text-white hover:bg-white/10',
    outline: 'border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white',
  }

  const widthClass = fullWidth ? 'w-full' : ''

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${widthClass} ${className}`

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  )
}
