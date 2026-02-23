import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const sectors = [
  {
    id: 'medical',
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="15" y="4" width="6" height="28" rx="1" fill="#00C2FF" opacity="0.9" />
        <rect x="4" y="15" width="28" height="6" rx="1" fill="#00C2FF" opacity="0.9" />
        <circle cx="18" cy="18" r="16" stroke="#00C2FF" strokeWidth="0.8" strokeOpacity="0.2" />
      </svg>
    ),
    name: 'Medical',
    description: 'AI-powered diagnostics, ophthalmic EHR, and clinical intelligence platforms',
    accent: '#00C2FF',
    accentBg: 'rgba(0,194,255,0.05)',
    cardClass: 'sector-card-medical',
    tags: ['HIPAA', 'EHR', 'AI Diagnostics'],
  },
  {
    id: 'retail',
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M6 8h4l3 14h14l3-8H10" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="16" cy="26" r="2" fill="#F59E0B" />
        <circle cx="26" cy="26" r="2" fill="#F59E0B" />
        <path d="M19 14h8M19 18h6" stroke="#F59E0B" strokeWidth="1" strokeOpacity="0.5" strokeLinecap="round" />
      </svg>
    ),
    name: 'Retail',
    description: 'Smart inventory, billing, and customer intelligence for modern retail',
    accent: '#F59E0B',
    accentBg: 'rgba(245,158,11,0.05)',
    cardClass: 'sector-card-retail',
    tags: ['GST Billing', 'Inventory AI', 'CRM'],
  },
  {
    id: 'employment',
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="11" r="5" stroke="#7B2FFF" strokeWidth="1.5" />
        <path d="M8 28c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="#7B2FFF" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M24 16l3 3-3 3M12 16l-3 3 3 3" stroke="#7B2FFF" strokeWidth="1" strokeOpacity="0.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    name: 'Employment',
    description: 'AI-driven applicant tracking, hiring automation, and workforce analytics',
    accent: '#7B2FFF',
    accentBg: 'rgba(123,47,255,0.05)',
    cardClass: 'sector-card-employment',
    tags: ['ATS', 'AI Hiring', 'Analytics'],
  },
  {
    id: 'shipping',
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M4 22l4-14h16l4 8-4 6H4z" stroke="#10B981" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M24 16h6l2 6H24" stroke="#10B981" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="10" cy="26" r="2.5" fill="#10B981" />
        <circle cx="26" cy="26" r="2.5" fill="#10B981" />
        <path d="M12 14h8M10 18h6" stroke="#10B981" strokeWidth="1" strokeOpacity="0.5" strokeLinecap="round" />
      </svg>
    ),
    name: 'Shipping',
    description: 'End-to-end logistics management, fleet intelligence, and compliance tracking',
    accent: '#10B981',
    accentBg: 'rgba(16,185,129,0.05)',
    cardClass: 'sector-card-shipping',
    tags: ['Fleet AI', 'Compliance', 'E-Way Bill'],
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Sectors() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      id="sectors"
      className="relative section-padding overflow-hidden"
      style={{ background: '#000000' }}
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-overlay opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow block mb-5">Built for Your Industry</span>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-5"
            style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.03em' }}
          >
            Sector-Specific Intelligence
          </h2>
          <p className="text-[#8A8A8A] max-w-xl mx-auto text-base leading-relaxed" style={{ fontWeight: 300 }}>
            Every industry has unique operational demands. MaxifyWork delivers precision-engineered
            platforms that speak the language of your sector.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {sectors.map((sector) => (
            <motion.div
              key={sector.id}
              className={`relative rounded-lg p-7 transition-all duration-300 cursor-pointer group ${sector.cardClass}`}
              style={{
                background: sector.accentBg,
                border: '1px solid rgba(255,255,255,0.06)',
              }}
              variants={cardVariants}
              whileHover={{ y: -4 }}
            >
              {/* Left accent bar */}
              <div
                className="absolute left-0 top-6 bottom-6 w-[2px] rounded-r"
                style={{
                  background: sector.accent,
                  boxShadow: `0 0 12px ${sector.accent}40`,
                }}
              />

              <div className="flex items-start gap-5">
                {/* Icon */}
                <div
                  className="flex-shrink-0 w-14 h-14 rounded-lg flex items-center justify-center"
                  style={{
                    background: `${sector.accent}10`,
                    border: `1px solid ${sector.accent}20`,
                  }}
                >
                  {sector.icon}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <h3
                      className="text-lg font-semibold text-white"
                      style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                    >
                      {sector.name}
                    </h3>
                    <motion.div
                      className="flex items-center gap-1 text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      style={{ color: sector.accent }}
                    >
                      Explore <ArrowRight size={12} />
                    </motion.div>
                  </div>

                  <p className="text-[#8A8A8A] text-sm leading-relaxed mb-4" style={{ fontWeight: 300 }}>
                    {sector.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {sector.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-mono tracking-widest px-2 py-1 rounded-sm"
                        style={{
                          color: sector.accent,
                          border: `1px solid ${sector.accent}25`,
                          background: `${sector.accent}08`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hover glow corner */}
              <div
                className="absolute top-0 right-0 w-20 h-20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at top right, ${sector.accent}0a, transparent)` }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
