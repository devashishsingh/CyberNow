'use client'

import { MessageCircle } from 'lucide-react'

interface WhatsAppButtonProps {
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  className?: string
}

export default function WhatsAppButton({ size = 'md', fullWidth = false, className = '' }: WhatsAppButtonProps) {
  const phoneNumber = '919876543210' // Replace with actual WhatsApp number
  const message = encodeURIComponent(
    'Hi CyberNow! I\'m interested in your cybersecurity program. Can you send me details?'
  )
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`

  const sizeClasses = {
    sm: 'px-3 py-2 text-sm gap-2',
    md: 'px-4 py-2.5 text-base gap-2',
    lg: 'px-6 py-3 text-lg gap-3',
  }

  const widthClass = fullWidth ? 'w-full' : ''

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        flex items-center justify-center
        bg-green-500 text-white font-medium rounded-lg
        hover:bg-green-600 transition-all duration-200
        shadow-lg hover:shadow-green-500/50
        ${sizeClasses[size]} ${widthClass} ${className}
      `}
    >
      <MessageCircle size={size === 'sm' ? 18 : size === 'md' ? 20 : 24} />
      <span>WhatsApp</span>
    </a>
  )
}
