import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const navLinks = [
  { label: 'Sectors', href: '#sectors' },
  { label: 'Platform', href: '#platform' },
  { label: 'Products', href: '#products' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-colors duration-500"
        style={{
          backgroundColor: scrolled ? 'rgba(244,242,234,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(10px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(20,19,15,0.14)' : '1px solid transparent',
        }}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container-editorial flex items-center justify-between" style={{ height: '76px' }}>

          {/* Wordmark */}
          <a
            href="#"
            className="flex items-center gap-1.5 group"
            aria-label="MaxifyWork home"
          >
            <span
              className="font-serif text-ink"
              style={{
                fontSize: '1.4rem',
                fontWeight: 500,
                letterSpacing: '-0.03em',
                lineHeight: 1,
              }}
            >
              maxifywork
            </span>
            <span
              className="accent-dot"
              style={{ width: 6, height: 6, marginTop: 2 }}
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-sans text-sm text-ink transition-colors duration-200 hover:text-accent"
                style={{ fontWeight: 400 }}
              >
                {link.label}
              </a>
            ))}

            {/* Request Access CTA */}
            <a
              href="https://waitlist.maxifyjobs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="arrow-link font-sans text-sm"
              style={{ fontWeight: 500 }}
            >
              Request Access
              <ArrowUpRight size={14} strokeWidth={1.75} />
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 -mr-2 text-ink transition-colors duration-200 hover:text-accent"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} strokeWidth={1.5} />
          </button>

        </div>
      </motion.header>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-paper flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Top bar inside overlay */}
            <div
              className="flex items-center justify-between"
              style={{
                height: '76px',
                borderBottom: '1px solid rgba(20,19,15,0.14)',
                paddingLeft: '1.5rem',
                paddingRight: '1.5rem',
              }}
            >
              <a
                href="#"
                className="flex items-center gap-1.5"
                onClick={() => setMobileOpen(false)}
                aria-label="MaxifyWork home"
              >
                <span
                  className="font-serif text-ink"
                  style={{
                    fontSize: '1.4rem',
                    fontWeight: 500,
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                  }}
                >
                  maxifywork
                </span>
                <span
                  className="accent-dot"
                  style={{ width: 6, height: 6, marginTop: 2 }}
                />
              </a>

              <button
                className="p-2 -mr-2 text-ink transition-colors duration-200 hover:text-accent"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X size={22} strokeWidth={1.5} />
              </button>
            </div>

            {/* Stacked large nav links */}
            <nav
              className="flex flex-col flex-1 justify-center px-6"
              aria-label="Mobile navigation"
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="display text-4xl text-ink border-b border-line py-6 hover:text-accent transition-colors duration-200"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 + i * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            {/* Request Access at bottom */}
            <motion.div
              className="px-6 pb-10 pt-6"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.1 + navLinks.length * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <a
                href="https://waitlist.maxifyjobs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="arrow-link font-sans text-sm"
                style={{ fontWeight: 500 }}
                onClick={() => setMobileOpen(false)}
              >
                Request Access
                <ArrowUpRight size={14} strokeWidth={1.75} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
