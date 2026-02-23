import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Logo = () => (
  <a href="#" className="flex items-center gap-3 group">
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="3" fill="#00C2FF" className="group-hover:opacity-100 transition-opacity" />
      <circle cx="7" cy="9" r="2" fill="#7B2FFF" opacity="0.8" />
      <circle cx="25" cy="9" r="2" fill="#7B2FFF" opacity="0.8" />
      <circle cx="7" cy="23" r="2" fill="#7B2FFF" opacity="0.8" />
      <circle cx="25" cy="23" r="2" fill="#7B2FFF" opacity="0.8" />
      <line x1="16" y1="16" x2="7" y2="9" stroke="#00C2FF" strokeWidth="1" strokeOpacity="0.7" />
      <line x1="16" y1="16" x2="25" y2="9" stroke="#00C2FF" strokeWidth="1" strokeOpacity="0.7" />
      <line x1="16" y1="16" x2="7" y2="23" stroke="#00C2FF" strokeWidth="1" strokeOpacity="0.7" />
      <line x1="16" y1="16" x2="25" y2="23" stroke="#00C2FF" strokeWidth="1" strokeOpacity="0.7" />
      <line x1="7" y1="9" x2="25" y2="9" stroke="#7B2FFF" strokeWidth="0.5" strokeOpacity="0.5" />
      <line x1="7" y1="23" x2="25" y2="23" stroke="#7B2FFF" strokeWidth="0.5" strokeOpacity="0.5" />
      <line x1="7" y1="9" x2="7" y2="23" stroke="#7B2FFF" strokeWidth="0.5" strokeOpacity="0.5" />
      <line x1="25" y1="9" x2="25" y2="23" stroke="#7B2FFF" strokeWidth="0.5" strokeOpacity="0.5" />
    </svg>
    <span
      className="text-white group-hover:text-[#00C2FF] transition-colors duration-300"
      style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '0.875rem', letterSpacing: '0.05em' }}
    >
      MAXIFYWORK
    </span>
  </a>
)

const navLinks = [
  { label: 'Products', href: '#products' },
  { label: 'Sectors', href: '#sectors' },
  { label: 'Platform', href: '#platform' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile nav is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(0,0,0,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
        }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          <Logo />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-[#8A8A8A] hover:text-white transition-colors duration-200 relative group"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#00C2FF] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="https://waitlist.maxifyjobs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded text-sm font-medium transition-all duration-250 btn-ghost"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Request Access
            </a>
            <button
              className="md:hidden p-2 text-[#8A8A8A] hover:text-white transition-colors"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/60 mobile-nav-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 h-full w-72 z-50 bg-[#0a0a0a] border-l border-white/5 flex flex-col"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
            >
              <div className="flex items-center justify-between p-6 border-b border-white/5">
                <Logo />
                <button
                  className="p-1.5 text-[#8A8A8A] hover:text-white transition-colors"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>
              <nav className="flex flex-col p-6 gap-1 flex-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    className="px-3 py-3 text-[#8A8A8A] hover:text-white hover:bg-white/5 rounded transition-colors duration-200 text-sm"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
              <div className="p-6 border-t border-white/5">
                <a
                  href="https://waitlist.maxifyjobs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost flex items-center justify-center w-full py-3 rounded text-sm font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  Request Access
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
