import { useCallback, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Particles from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { Play, ArrowRight, MessageSquare } from 'lucide-react'

const tickerItems = [
  '89+ Medical Institutions Onboarded',
  '2,000+ Jobs Processed Daily',
  'Real-time ERP Sync',
  'HIPAA-ready Infrastructure',
  'GST Compliant Billing',
  'AI-powered Diagnostics',
  '99.99% Uptime SLA',
  'SOC 2 Type II Certified',
  'Multi-tenant Architecture',
  'Zero-downtime Deployments',
]

const sectorChips = [
  { label: 'Medical', icon: '⬡', color: '#00C2FF' },
  { label: 'Retail', icon: '◈', color: '#F59E0B' },
  { label: 'Employment', icon: '◉', color: '#7B2FFF' },
  { label: 'Shipping', icon: '◆', color: '#10B981' },
]

const particlesOptions = {
  fullScreen: { enable: false },
  background: { color: { value: 'transparent' } },
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: { enable: true, mode: 'repulse' },
      resize: true,
    },
    modes: {
      repulse: { distance: 80, duration: 0.4 },
    },
  },
  particles: {
    color: { value: ['#00C2FF', '#7B2FFF', '#ffffff'] },
    links: {
      color: '#00C2FF',
      distance: 130,
      enable: true,
      opacity: 0.12,
      width: 0.8,
    },
    move: {
      enable: true,
      speed: 0.6,
      direction: 'none',
      random: true,
      straight: false,
      outModes: { default: 'bounce' },
    },
    number: {
      density: { enable: true, area: 900 },
      value: 60,
    },
    opacity: {
      value: { min: 0.2, max: 0.6 },
      animation: { enable: true, speed: 0.8, sync: false },
    },
    shape: { type: 'circle' },
    size: {
      value: { min: 1, max: 2.5 },
    },
  },
  detectRetina: true,
}

export default function Hero() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine)
  }, [])

  const tickerText = tickerItems.join('  ·  ')
  const doubled = `${tickerText}  ·  ${tickerText}`

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #000000 0%, #040414 50%, #000000 100%)' }}
    >
      {/* Particle Background */}
      <div className="absolute inset-0 z-0">
        <Particles
          id="hero-particles"
          init={particlesInit}
          options={particlesOptions}
          className="absolute inset-0 w-full h-full"
        />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 z-0 grid-overlay opacity-40" />

      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,194,255,0.04) 0%, rgba(123,47,255,0.03) 40%, transparent 70%)',
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 pt-28 pb-16">
        <div className="max-w-4xl mx-auto text-center">

          {/* Eyebrow */}
          <motion.div
            className="inline-flex items-center gap-2 mb-7"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00C2FF] animate-pulse" />
            <span className="eyebrow">Enterprise SaaS Gateway</span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl xl:text-[78px] font-bold text-white mb-7 leading-[1.06]"
            style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.03em' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            The Operating System<br />
            <span className="text-transparent bg-clip-text" style={{
              backgroundImage: 'linear-gradient(90deg, #00C2FF 0%, #7B2FFF 100%)'
            }}>
              for Enterprise Intelligence
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-base md:text-lg text-[#8A8A8A] max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            MaxifyWork delivers mission-critical SaaS platforms for Medical, Retail, Employment, and Shipping
            enterprises — purpose-built for scale, compliance, and decision velocity.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <a
              href="#products"
              className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 rounded text-sm font-semibold"
            >
              Explore Platform
              <ArrowRight size={15} />
            </a>
            <a
              href="https://waitlist.maxifyjobs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost inline-flex items-center gap-2 px-7 py-3.5 rounded text-sm"
            >
              Get in Touch
              <MessageSquare size={15} />
            </a>
          </motion.div>

          {/* Sector chips */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            {sectorChips.map((chip, i) => (
              <motion.div
                key={chip.label}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: `1px solid rgba(255,255,255,0.1)`,
                  fontFamily: 'JetBrains Mono, monospace',
                  color: chip.color,
                  letterSpacing: '0.06em',
                }}
                whileHover={{
                  borderColor: `${chip.color}60`,
                  background: `${chip.color}0a`,
                  scale: 1.04,
                }}
                transition={{ duration: 0.2 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <span style={{ color: chip.color }}>{chip.icon}</span>
                {chip.label}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Ticker */}
      <motion.div
        className="relative z-10 border-t border-white/5 py-3 overflow-hidden"
        style={{ background: 'rgba(0,0,0,0.5)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <div className="ticker-wrapper">
          <div className="ticker-content">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="inline-block">
                {tickerItems.map((item, j) => (
                  <span key={j} className="inline-flex items-center gap-3 mx-6">
                    <span className="w-1 h-1 rounded-full bg-[#00C2FF] opacity-60" />
                    <span
                      className="text-[10px] tracking-widest uppercase text-[#8A8A8A]"
                      style={{ fontFamily: 'JetBrains Mono, monospace' }}
                    >
                      {item}
                    </span>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 opacity-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-transparent via-[#00C2FF] to-transparent"
          animate={{ scaleY: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
        <span className="text-[9px] text-[#8A8A8A] tracking-widest font-mono uppercase">scroll</span>
      </motion.div>
    </section>
  )
}
