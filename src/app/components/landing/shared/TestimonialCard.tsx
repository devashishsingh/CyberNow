'use client'

import Card from './Card'

interface TestimonialCardProps {
  name: string
  previous: string
  previousSalary: string
  current: string
  currentSalary: string
  timeToPlacement: string
  quote: string
}

export default function TestimonialCard({
  name,
  previous,
  previousSalary,
  current,
  currentSalary,
  timeToPlacement,
  quote,
}: TestimonialCardProps) {
  return (
    <Card hoverEffect>
      <div className="space-y-4">
        {/* Name and Quote */}
        <div>
          <h3 className="text-lg font-bold text-blue-900 mb-2">👨‍💼 {name}</h3>
          <p className="italic text-gray-600 mb-4">"{quote}"</p>
        </div>

        {/* Career progression */}
        <div className="border-t pt-3 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Previous:</span>
            <span className="text-sm font-semibold text-gray-800">{previous}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Salary:</span>
            <span className="text-sm font-semibold text-red-500">{previousSalary}</span>
          </div>

          {/* Arrow */}
          <div className="flex justify-center text-orange-500 font-bold">↓</div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Current:</span>
            <span className="text-sm font-semibold text-gray-800">{current}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">New Salary:</span>
            <span className="text-sm font-semibold text-green-600">{currentSalary}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Time to Placement:</span>
            <span className="text-sm font-bold text-blue-600">{timeToPlacement}</span>
          </div>
        </div>
      </div>
    </Card>
  )
}
