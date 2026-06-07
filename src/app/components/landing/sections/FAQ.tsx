'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  const faqs = [
    {
      q: 'Do I need coding experience?',
      a: 'No prior coding experience needed. We start from cybersecurity fundamentals. Networking basics are helpful.',
    },
    {
      q: 'Can I do this while working?',
      a: 'Yes. Live classes are offered at 7 PM - 9 PM on weekdays. Weekend batches are also available.',
    },
    {
      q: 'What skills will I have after this course?',
      a: 'You\'ll master SOC analyst fundamentals, threat detection, incident response, and have hands-on lab experience.',
    },
    {
      q: 'Is the certificate recognized?',
      a: 'Yes. The certificate is issued by CyberNow and recognized by industry professionals.',
    },
    {
      q: 'Can I pay in installments?',
      a: 'Yes. We offer flexible payment options including 3 EMI installments at no extra interest.',
    },
    {
      q: 'What if I miss a class?',
      a: 'All classes are recorded. You get lifetime access to all course materials and recordings.',
    },
  ]

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
          Frequently Asked <span className="text-cybernow-accent">Questions</span>
        </h2>
        <p className="text-center text-blue-100 mb-12">Find answers to common questions about the program</p>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-slate-800 border border-blue-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-700 transition"
              >
                <span className="font-semibold text-white text-left">{faq.q}</span>
                <ChevronDown
                  size={24}
                  className={`text-cybernow-accent flex-shrink-0 transition-transform ${
                    openIdx === idx ? 'transform rotate-180' : ''
                  }`}
                />
              </button>

              {openIdx === idx && (
                <div className="px-6 py-4 bg-slate-700 border-t border-blue-700">
                  <p className="text-blue-100">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
          >
            💬 Chat with us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
