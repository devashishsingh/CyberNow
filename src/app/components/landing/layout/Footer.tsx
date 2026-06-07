'use client'

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-400 py-12 border-t border-blue-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-white font-bold mb-4">
              <span className="text-cybernow-accent">Cyber</span>Now
            </h3>
            <p className="text-sm">Cybersecurity education platform by Bloyi Innovations.</p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-cybernow-accent transition">
                  Courses
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cybernow-accent transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cybernow-accent transition">
                  Features
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-orange-400 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-orange-400 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-sm">
            © 2026 Bloyi Innovations Pvt Limited. All Rights Reserved. Built with ❤️ in India for Indian
            Cybersecurity Talent
          </p>
        </div>
      </div>
    </footer>
  )
}
