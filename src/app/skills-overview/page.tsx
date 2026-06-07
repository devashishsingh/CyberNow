'use client'

import Link from 'next/link'
import Header from '@/app/components/landing/layout/Header'
import Footer from '@/app/components/landing/layout/Footer'
import { BookOpen, Zap, Trophy, Code2, Lock, Users, BarChart3, Layers } from 'lucide-react'
import Button from '@/app/components/landing/shared/Button'

export default function SkillsOverview() {
  const skillCategories = [
    {
      id: 'foundation',
      icon: BookOpen,
      title: 'Foundation Layer',
      description: 'Build your cybersecurity foundation with core IT knowledge',
      color: 'border-blue-500',
      skills: [
        'IT Fundamentals & Hardware',
        'Operating Systems (Windows & Linux)',
        'Networking Fundamentals',
        'Virtualization & Cloud Basics',
        'Linux & Windows Administration',
        'Programming & Automation (Python, PowerShell, Bash)',
        'APIs & Automation',
        'AI-assisted Development'
      ]
    },
    {
      id: 'soc',
      icon: Lock,
      title: 'Security Operations Center (SOC)',
      description: 'Master threat detection and incident response',
      color: 'border-orange-500',
      skills: [
        'SOC Analyst L1 - Log Analysis & SIEM',
        'Alert Triage & Incident Handling',
        'SOC Analyst L2 - Threat Hunting',
        'Malware Analysis Basics',
        'Investigation Techniques',
        'Detection Engineering',
        'SOC Analyst L3 - Advanced Incident Response'
      ]
    },
    {
      id: 'threat-intel',
      icon: Zap,
      title: 'Threat Intelligence',
      description: 'Understand threats and adversary behaviors',
      color: 'border-red-500',
      skills: [
        'Cyber Threat Intelligence (CTI)',
        'OSINT Techniques',
        'Threat Actor Profiling',
        'IOC Management',
        'Dark Web Monitoring',
        'MITRE ATT&CK Framework'
      ]
    },
    {
      id: 'detection',
      icon: Layers,
      title: 'Detection Engineering',
      description: 'Build detection capabilities and security rules',
      color: 'border-purple-500',
      skills: [
        'SIEM Rule Development',
        'Sigma Rules',
        'Chronicle, Splunk, Microsoft Sentinel',
        'AI-driven Detection Systems'
      ]
    },
    {
      id: 'dfir',
      icon: Code2,
      title: 'Incident Response & DFIR',
      description: 'Investigate and respond to security incidents',
      color: 'border-green-500',
      skills: [
        'Digital Forensics (Disk, Memory, Mobile, Cloud)',
        'NIST Incident Response Framework',
        'Containment & Eradication',
        'Recovery Procedures',
        'Root Cause Analysis'
      ]
    },
    {
      id: 'offensive',
      icon: Trophy,
      title: 'Offensive Security',
      description: 'Learn ethical hacking and penetration testing',
      color: 'border-yellow-500',
      skills: [
        'Ethical Hacking (Reconnaissance, Enumeration, Exploitation)',
        'Post Exploitation',
        'Penetration Testing (Web, APIs, Internal Networks, Wireless)',
        'Red Teaming & Adversary Simulation',
        'C2 Frameworks & Attack Chains',
        'Bug Bounty & Responsible Disclosure',
        'Web & API Security'
      ]
    },
    {
      id: 'appsec',
      icon: Lock,
      title: 'Application Security',
      description: 'Secure software development lifecycle',
      color: 'border-cyan-500',
      skills: [
        'Secure Software Development (SDLC)',
        'Secure Coding Practices',
        'DevSecOps',
        'Application Security (SAST, DAST, SCA)',
        'Threat Modeling',
        'API & Mobile Application Security'
      ]
    },
    {
      id: 'cloud',
      icon: Layers,
      title: 'Cloud Security',
      description: 'Secure cloud deployments and infrastructure',
      color: 'border-indigo-500',
      skills: [
        'AWS Security',
        'Azure Security',
        'GCP Security',
        'Kubernetes Security',
        'Container Security',
        'DevSecOps in Cloud'
      ]
    },
    {
      id: 'iam',
      icon: Users,
      title: 'Identity & Access Management',
      description: 'Control access and user management',
      color: 'border-pink-500',
      skills: [
        'Active Directory & Entra ID',
        'Privileged Access Management (PAM)',
        'Single Sign-On (SSO)',
        'Multi-Factor Authentication (MFA)'
      ]
    },
    {
      id: 'network',
      icon: BarChart3,
      title: 'Network Security',
      description: 'Protect network infrastructure',
      color: 'border-emerald-500',
      skills: [
        'Firewalls & IDS/IPS',
        'VPNs & Network Access Control',
        'Zero Trust Architecture'
      ]
    },
    {
      id: 'grc',
      icon: Trophy,
      title: 'Governance, Risk & Compliance',
      description: 'Manage security policies and regulations',
      color: 'border-violet-500',
      skills: [
        'ISO 27001, NIST, PCI DSS, SOC 2',
        'Risk Management',
        'Security Auditing',
        'Third Party Risk Management'
      ]
    },
    {
      id: 'ai-security',
      icon: Zap,
      title: 'AI Security & Governance',
      description: 'Secure AI systems and compliance',
      color: 'border-rose-500',
      skills: [
        'AI Governance & Risk Management',
        'AI Security & Red Teaming',
        'AI Model Evaluation',
        'AI Application Security Assessment',
        'ISO 42001, NIST AI RMF, EU AI Act Compliance'
      ]
    },
    {
      id: 'architecture',
      icon: Layers,
      title: 'Security Architecture',
      description: 'Design enterprise security solutions',
      color: 'border-amber-500',
      skills: [
        'Security Architecture',
        'Enterprise Security Architecture',
        'Cloud Security Architecture'
      ]
    },
    {
      id: 'leadership',
      icon: Users,
      title: 'Cybersecurity Leadership',
      description: 'Lead security programs and teams',
      color: 'border-teal-500',
      skills: [
        'Cybersecurity Management',
        'CISO Track',
        'Security Program Management'
      ]
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-slate-950 via-blue-950 to-slate-900">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Complete <span className="text-cybernow-accent">Cybersecurity</span> Learning Path
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Master 14 specialized domains with 100+ skills covering everything from foundation to leadership
            </p>
            <div className="inline-block bg-slate-800 px-6 py-4 rounded-lg border border-cybernow-accent">
              <p className="text-blue-100">
                <span className="text-2xl font-bold text-cybernow-accent">100+</span> Skills
                <span className="text-gray-400 mx-4">•</span>
                <span className="text-2xl font-bold text-cybernow-accent">14</span> Domains
                <span className="text-gray-400 mx-4">•</span>
                <span className="text-2xl font-bold text-cybernow-accent">8</span> Weeks
              </p>
            </div>
          </div>
        </section>

        {/* Skills Categories */}
        <section className="py-20 bg-slate-900">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-white mb-4 text-center">
              Your <span className="text-cybernow-accent">Learning Journey</span>
            </h2>
            <p className="text-center text-blue-100 mb-16 max-w-2xl mx-auto">
              Progress from foundational concepts to advanced specializations. Each domain builds on your previous knowledge,
              creating a comprehensive cybersecurity expert profile.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((category) => {
                const Icon = category.icon
                return (
                  <div
                    key={category.id}
                    className={`bg-slate-800 border-l-4 ${category.color} rounded-lg p-6 hover:shadow-lg hover:shadow-cybernow-accent/20 transition`}
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <Icon className="text-cybernow-accent flex-shrink-0 mt-1" size={28} />
                      <h3 className="text-xl font-bold text-white">{category.title}</h3>
                    </div>
                    <p className="text-blue-200 text-sm mb-4">{category.description}</p>
                    <ul className="space-y-2 mb-4">
                      {category.skills.slice(0, 4).map((skill, idx) => (
                        <li key={idx} className="text-sm text-blue-100 flex gap-2">
                          <span className="text-cybernow-accent">▸</span>
                          {skill}
                        </li>
                      ))}
                      {category.skills.length > 4 && (
                        <li className="text-sm text-blue-300 italic">
                          +{category.skills.length - 4} more skills...
                        </li>
                      )}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Why All These Skills Matter */}
        <section className="py-20 bg-slate-800">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              Why Learn <span className="text-cybernow-accent">All These Skills?</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-700 rounded-lg p-6 border border-blue-600">
                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <Trophy size={24} className="text-cybernow-accent" />
                  Industry Demand
                </h3>
                <p className="text-blue-100">
                  Top cybersecurity roles require expertise across multiple domains. Our comprehensive curriculum ensures you're job-ready
                  for SOC analyst, penetration tester, security architect, and other high-demand positions.
                </p>
              </div>

              <div className="bg-slate-700 rounded-lg p-6 border border-blue-600">
                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <Zap size={24} className="text-cybernow-accent" />
                  Career Progression
                </h3>
                <p className="text-blue-100">
                  Move from SOC Analyst L1 → L2 → L3, or specialize in penetration testing, threat hunting, or leadership. Your skills
                  directly determine your career trajectory and earning potential.
                </p>
              </div>

              <div className="bg-slate-700 rounded-lg p-6 border border-blue-600">
                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <Lock size={24} className="text-cybernow-accent" />
                  Real-World Defense
                </h3>
                <p className="text-blue-100">
                  Organizations need experts across the entire security stack. Understanding detection, response, offensive techniques,
                  and architecture makes you invaluable to any security team.
                </p>
              </div>

              <div className="bg-slate-700 rounded-lg p-6 border border-blue-600">
                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <Users size={24} className="text-cybernow-accent" />
                  Leadership Ready
                </h3>
                <p className="text-blue-100">
                  Broad knowledge across all domains prepares you for CISO and security management roles. Understand business impact,
                  governance, risk, and team development.
                </p>
              </div>

              <div className="bg-slate-700 rounded-lg p-6 border border-blue-600">
                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <BarChart3 size={24} className="text-cybernow-accent" />
                  Competitive Edge
                </h3>
                <p className="text-blue-100">
                  Most competitors specialize in one area. Your multi-domain expertise makes you stand out in interviews and during
                  promotions, commanding higher salaries.
                </p>
              </div>

              <div className="bg-slate-700 rounded-lg p-6 border border-blue-600">
                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <Code2 size={24} className="text-cybernow-accent" />
                  Adaptability
                </h3>
                <p className="text-blue-100">
                  As threats evolve and technologies change, your broad skill set lets you pivot between roles and stay relevant in a
                  constantly changing landscape.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Path Progression */}
        <section className="py-20 bg-slate-900">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              Your <span className="text-cybernow-accent">8-Week Journey</span>
            </h2>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-900 to-slate-800 rounded-lg p-6 border-l-4 border-cybernow-accent">
                <h3 className="text-xl font-bold text-white mb-2">Weeks 1-2: Foundation Layer</h3>
                <p className="text-blue-100">
                  Start with IT fundamentals, operating systems, networking, and cloud basics. Build the knowledge foundation that all
                  cybersecurity concepts are built upon.
                </p>
              </div>

              <div className="bg-gradient-to-r from-orange-900 to-slate-800 rounded-lg p-6 border-l-4 border-cybernow-accent">
                <h3 className="text-xl font-bold text-white mb-2">Weeks 3-4: Defensive Foundations</h3>
                <p className="text-blue-100">
                  Master SOC operations, log analysis, SIEM platforms, and threat intelligence. Understand how organizations defend
                  themselves against attacks.
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-900 to-slate-800 rounded-lg p-6 border-l-4 border-cybernow-accent">
                <h3 className="text-xl font-bold text-white mb-2">Weeks 5-6: Advanced Defense & Offense</h3>
                <p className="text-blue-100">
                  Deep dive into threat hunting, detection engineering, incident response, and digital forensics. Learn ethical hacking
                  and penetration testing techniques.
                </p>
              </div>

              <div className="bg-gradient-to-r from-green-900 to-slate-800 rounded-lg p-6 border-l-4 border-cybernow-accent">
                <h3 className="text-xl font-bold text-white mb-2">Weeks 7-8: Specialization & Real-World Application</h3>
                <p className="text-blue-100">
                  Explore specialized domains: cloud security, application security, identity management, and architecture. Complete
                  capstone projects that demonstrate your expertise.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Master <span className="text-cybernow-accent">100+ Security Skills?</span>
            </h2>

            <p className="text-xl text-blue-100 mb-8">
              Join our 8-week intensive program and emerge as a comprehensive cybersecurity expert.
            </p>

            <div className="bg-slate-800 border border-cybernow-accent rounded-lg p-8 mb-8 max-w-md mx-auto">
              <p className="text-blue-100 mb-2">Complete Program</p>
              <div className="text-5xl font-bold text-cybernow-accent mb-2">₹3,499</div>
              <p className="text-blue-100 text-sm">One-time • Lifetime access • All 100+ skills</p>
            </div>

            <Link href="/auth/register">
              <Button variant="primary" size="lg">
                Start Your Learning Path Today
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
