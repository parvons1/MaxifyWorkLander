import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'

export default function CTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="cta"
      className="relative overflow-hidden py-32"
      style={{
        background: 'linear-gradient(160deg, #000000 0%, #020210 40%, #000820 70%, #000000 100%)',
      }}
    >
      {/* Animated radial glow behind content */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 900px 500px at center, rgba(0,194,255,0.06) 0%, rgba(123,47,255,0.04) 40%, transparent 70%)',
        }}
        animate={{
          opacity: [0.5, 1, 0.5],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-15 pointer-events-none" />

      {/* Top border gradient */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0,194,255,0.3), rgba(123,47,255,0.3), transparent)' }}
      />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Eyebrow */}
          <span className="eyebrow block mb-8">Ready to Transform Operations?</span>

          {/* Headline */}
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.03em' }}
          >
            Your enterprise deserves{' '}
            <span className="text-transparent bg-clip-text" style={{
              backgroundImage: 'linear-gradient(90deg, #00C2FF 0%, #7B2FFF 100%)'
            }}>
              intelligence-first
            </span>
            {' '}infrastructure.
          </h2>

          {/* Subtext */}
          <p
            className="text-[#8A8A8A] text-base md:text-lg leading-relaxed mb-12 max-w-2xl mx-auto"
            style={{ fontWeight: 300 }}
          >
            Join enterprises across Medical, Retail, Employment, and Shipping who run on MaxifyWork.
            Purpose-built platforms. Real operational transformation.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="https://waitlist.maxifyjobs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded text-sm font-semibold"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Request Early Access
              <ArrowRight size={16} />
            </motion.a>
          </div>

          {/* Trust signals */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-6 mt-12 pt-12 border-t border-white/5"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            {[
              'No credit card required',
              'Enterprise SLA guaranteed',
              'Dedicated onboarding support',
            ].map((item, i) => (
              <span key={i} className="flex items-center gap-2 text-xs text-[#8A8A8A] font-mono">
                <span className="w-1 h-1 rounded-full bg-[#00C2FF]" />
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom border gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(123,47,255,0.2), rgba(0,194,255,0.2), transparent)' }}
      />
    </section>
  )
}
