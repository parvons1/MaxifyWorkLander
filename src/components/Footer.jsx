import { motion } from 'framer-motion'
import { FiLinkedin, FiTwitter, FiGithub } from 'react-icons/fi'

const Logo = () => (
  <div className="flex items-center gap-3">
    <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="3" fill="#00C2FF" />
      <circle cx="7" cy="9" r="2" fill="#7B2FFF" opacity="0.8" />
      <circle cx="25" cy="9" r="2" fill="#7B2FFF" opacity="0.8" />
      <circle cx="7" cy="23" r="2" fill="#7B2FFF" opacity="0.8" />
      <circle cx="25" cy="23" r="2" fill="#7B2FFF" opacity="0.8" />
      <line x1="16" y1="16" x2="7" y2="9" stroke="#00C2FF" strokeWidth="1" strokeOpacity="0.7" />
      <line x1="16" y1="16" x2="25" y2="9" stroke="#00C2FF" strokeWidth="1" strokeOpacity="0.7" />
      <line x1="16" y1="16" x2="7" y2="23" stroke="#00C2FF" strokeWidth="1" strokeOpacity="0.7" />
      <line x1="16" y1="16" x2="25" y2="23" stroke="#00C2FF" strokeWidth="1" strokeOpacity="0.7" />
    </svg>
    <span className="text-white" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '0.875rem', letterSpacing: '0.04em' }}>
      MAXIFYWORK
    </span>
  </div>
)

const columns = [
  {
    title: 'Products',
    links: [
      { label: 'Cytoscan Intelligence', href: 'https://www.cytoscan.org' },
      { label: 'MaxifyJobs', href: 'https://maxifyjobs.com' },
      { label: 'MaxifyCampus', href: 'https://maxifyjobs.com' },
      { label: 'SalonOS', href: 'https://salons.maxifywork.com' },
      { label: 'INDEerpriseOS', href: '#' },
      { label: 'MaxifyLog', href: '#' },
      { label: 'Cytoscan Optic', href: '#' },
    ],
  },
  {
    title: 'Sectors',
    links: [
      { label: 'Medical', href: '#sectors' },
      { label: 'Retail', href: '#sectors' },
      { label: 'Employment', href: '#sectors' },
      { label: 'Shipping', href: '#sectors' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About MaxifyWork', href: '#about' },
      { label: 'Platform', href: '#platform' },
      { label: 'Security', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
      { label: 'HIPAA Compliance', href: '#' },
      { label: 'GDPR Policy', href: '#' },
    ],
  },
]

const socialLinks = [
  { icon: <FiLinkedin size={16} />, href: '#', label: 'LinkedIn' },
  { icon: <FiTwitter size={16} />, href: '#', label: 'Twitter / X' },
  { icon: <FiGithub size={16} />, href: '#', label: 'GitHub' },
]

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative border-t"
      style={{
        background: '#000000',
        borderColor: 'rgba(255,255,255,0.06)',
      }}
    >
      {/* Top gradient accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0,194,255,0.2), rgba(123,47,255,0.2), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          {/* Brand column */}
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-4 text-xs text-[#8A8A8A] leading-relaxed font-mono" style={{ maxWidth: '180px' }}>
              The Enterprise SaaS Gateway
            </p>
            <p className="mt-3 text-xs text-[#555] leading-relaxed" style={{ maxWidth: '200px', fontWeight: 300 }}>
              Delivering operational intelligence to enterprises across Medical, Retail, Employment,
              and Shipping sectors.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-8 h-8 rounded flex items-center justify-center text-[#8A8A8A] hover:text-white transition-colors"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="text-[10px] font-mono text-[#8A8A8A] tracking-widest uppercase mb-4">
                  {col.title}
                </h4>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-xs text-[#555] hover:text-[#8A8A8A] transition-colors duration-200"
                        style={{ fontWeight: 300 }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance badges */}
        <div className="flex flex-wrap gap-3 mb-8 pt-8 border-t border-white/5">
          {['HIPAA Compliant', 'SOC 2 Type II', 'ISO 27001', 'GDPR Ready', 'GST Compliant'].map((badge) => (
            <span
              key={badge}
              className="text-[8px] font-mono tracking-widest text-[#555] border border-white/6 px-2.5 py-1 rounded-sm"
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-white/5">
          <p className="text-[11px] text-[#555] font-mono">
            © 2025 MaxifyWork Technologies Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[11px] text-[#555] hover:text-[#8A8A8A] transition-colors font-mono">Privacy Policy</a>
            <a href="#" className="text-[11px] text-[#555] hover:text-[#8A8A8A] transition-colors font-mono">Terms</a>
            <a href="#" className="text-[11px] text-[#555] hover:text-[#8A8A8A] transition-colors font-mono">Sitemap</a>
          </div>
        </div>

        {/* Super faint watermark */}
        <div className="mt-8 text-center">
          <span className="text-[10px] text-[#1a1a1a] tracking-[0.2em]" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 500 }}>
            MAXIFYWORK · ENTERPRISE SAAS GATEWAY · MAXIFYWORK.COM
          </span>
        </div>
      </div>
    </footer>
  )
}
