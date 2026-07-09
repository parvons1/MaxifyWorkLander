import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const fadeRise = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
}

export default function CTA() {
  return (
    <section id="cta" className="section-pad">
      <div className="container-editorial">
        <div className="border-t border-line pt-16 md:pt-20">

          {/* Display headline */}
          <motion.h2
            className="display text-5xl md:text-7xl text-ink max-w-4xl"
            {...fadeRise}
          >
            Your enterprise deserves{' '}
            <span className="text-accent">intelligence-first</span>{' '}
            infrastructure.
          </motion.h2>

          {/* Primary button */}
          <motion.div
            className="mt-14 md:mt-16"
            {...fadeRise}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
          >
            <motion.a
              href="https://waitlist.maxifyjobs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-ink text-paper font-sans font-medium px-7 py-3.5 rounded-full"
              whileHover={{
                y: -2,
                backgroundColor: '#2B2A24',
              }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              Request early access
              <ArrowRight size={16} />
            </motion.a>
          </motion.div>

          {/* Muted trust line */}
          <motion.p
            className="font-mono text-xs text-muted mt-5"
            {...fadeRise}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
          >
            No credit card required · Enterprise SLA · Dedicated onboarding
          </motion.p>

        </div>
      </div>
    </section>
  )
}
