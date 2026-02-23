import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Clock } from 'lucide-react'

const products = [
  {
    id: 'cytoscan',
    name: 'Cytoscan Intelligence',
    tagline: 'AI-powered cancer diagnostics platform that accelerates pathology workflows and clinical decision-making.',
    sector: 'Medical',
    sectorColor: '#00C2FF',
    accentColor: '#00C2FF',
    status: 'live',
    link: 'https://www.cytoscan.org',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="12" stroke="#00C2FF" strokeWidth="1" strokeOpacity="0.3" />
        <circle cx="20" cy="20" r="7" stroke="#00C2FF" strokeWidth="1" strokeOpacity="0.6" />
        <circle cx="20" cy="20" r="3" fill="#00C2FF" />
        <path d="M20 4v6M20 30v6M4 20h6M30 20h6" stroke="#00C2FF" strokeWidth="1" strokeOpacity="0.4" strokeLinecap="round" />
        <circle cx="20" cy="20" r="16" stroke="#00C2FF" strokeWidth="0.5" strokeOpacity="0.15" strokeDasharray="3 3" />
      </svg>
    ),
    features: ['AI Pathology Analysis', 'DICOM Integration', 'Clinical Reporting', 'HIPAA Compliant'],
    metric: '97.3%', metricLabel: 'diagnostic accuracy',
  },
  {
    id: 'maxifyjobs',
    name: 'MaxifyJobs & MaxifyCampus',
    tagline: 'Global Employment Management platform with AI-driven ATS, campus recruitment, and workforce analytics.',
    sector: 'Employment',
    sectorColor: '#7B2FFF',
    accentColor: '#7B2FFF',
    status: 'live',
    link: 'https://maxifyjobs.com',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="14" r="5" stroke="#7B2FFF" strokeWidth="1.2" />
        <path d="M10 32c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="#7B2FFF" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="32" cy="12" r="3" stroke="#7B2FFF" strokeWidth="1" strokeOpacity="0.6" />
        <path d="M28 22c0-2.21 1.79-4 4-4" stroke="#7B2FFF" strokeWidth="1" strokeOpacity="0.6" strokeLinecap="round" />
        <path d="M30 28l2 2 4-4" stroke="#7B2FFF" strokeWidth="1" strokeOpacity="0.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    features: ['AI Resume Screening', 'Campus ATS', 'Interview Scheduler', 'Workforce Analytics'],
    metric: '2,000+', metricLabel: 'jobs processed/day',
  },
  {
    id: 'salon-chain',
    name: 'SalonOS',
    tagline: 'Salon chain management platform with appointment intelligence, inventory, and customer loyalty.',
    sector: 'Retail',
    sectorColor: '#F59E0B',
    accentColor: '#F59E0B',
    status: 'live',
    link: 'https://salons.maxifywork.com',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M10 30 Q12 20 20 18 Q28 16 30 10" stroke="#F59E0B" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="30" cy="10" r="3" fill="#F59E0B" opacity="0.8" />
        <path d="M14 30c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="#F59E0B" strokeWidth="1" strokeOpacity="0.6" strokeLinecap="round" />
        <circle cx="20" cy="30" r="2" fill="#F59E0B" opacity="0.6" />
      </svg>
    ),
    features: ['Appointment AI', 'POS System', 'Chain Analytics', 'Loyalty Engine'],
    metric: 'Q1 2026', metricLabel: 'launching soon',
  },
  {
    id: 'indeerpriseOS',
    name: 'INDEerpriseOS',
    tagline: 'Intelligent Enterprise & Retail Management system unifying operations, billing, and customer data.',
    sector: 'Retail',
    sectorColor: '#F59E0B',
    accentColor: '#F59E0B',
    status: 'coming-soon',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="8" y="8" width="10" height="10" rx="1" stroke="#F59E0B" strokeWidth="1" strokeOpacity="0.7" />
        <rect x="22" y="8" width="10" height="10" rx="1" stroke="#F59E0B" strokeWidth="1" strokeOpacity="0.7" />
        <rect x="8" y="22" width="10" height="10" rx="1" stroke="#F59E0B" strokeWidth="1" strokeOpacity="0.7" />
        <rect x="22" y="22" width="10" height="10" rx="1" stroke="#F59E0B" strokeWidth="1" />
        <circle cx="27" cy="27" r="3" fill="#F59E0B" opacity="0.9" />
        <path d="M20 8v24M8 20h24" stroke="#F59E0B" strokeWidth="0.5" strokeOpacity="0.2" />
      </svg>
    ),
    features: ['POS & Billing', 'GST Automation', 'Inventory AI', 'Customer Analytics'],
    metric: 'Q2 2025', metricLabel: 'launching soon',
  },
  {
    id: 'maxifylog',
    name: 'MaxifyLog',
    tagline: 'End-to-end intelligent logistics platform with real-time fleet tracking and compliance automation.',
    sector: 'Shipping',
    sectorColor: '#10B981',
    accentColor: '#10B981',
    status: 'coming-soon',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M6 24l5-16h18l5 10-5 6H6z" stroke="#10B981" strokeWidth="1.2" strokeLinejoin="round" />
        <path d="M29 18h7l3 6H29" stroke="#10B981" strokeWidth="1.2" strokeLinejoin="round" />
        <circle cx="12" cy="28" r="3" fill="#10B981" opacity="0.8" />
        <circle cx="28" cy="28" r="3" fill="#10B981" opacity="0.8" />
        <path d="M16 16h8M14 20h6" stroke="#10B981" strokeWidth="0.8" strokeOpacity="0.5" strokeLinecap="round" />
      </svg>
    ),
    features: ['Fleet Intelligence', 'E-Way Bill', 'Route Optimization', 'Compliance Tracking'],
    metric: 'Q3 2025', metricLabel: 'launching soon',
  },
  {
    id: 'cytoscan-optic',
    name: 'Cytoscan Optic',
    tagline: 'Specialized ophthalmic EHR and diagnostic intelligence platform for eye care institutions.',
    sector: 'Medical',
    sectorColor: '#00C2FF',
    accentColor: '#00C2FF',
    status: 'coming-soon',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <ellipse cx="20" cy="20" rx="16" ry="10" stroke="#00C2FF" strokeWidth="1" strokeOpacity="0.5" />
        <circle cx="20" cy="20" r="5" stroke="#00C2FF" strokeWidth="1.2" />
        <circle cx="20" cy="20" r="2" fill="#00C2FF" />
        <path d="M4 20c4-8 28-8 32 0" stroke="#00C2FF" strokeWidth="0.5" strokeOpacity="0.3" strokeDasharray="2 2" />
      </svg>
    ),
    features: ['Ophthalmic EHR', 'Retinal AI', 'IOL Calculator', 'Surgical Planning'],
    metric: 'Q4 2025', metricLabel: 'launching soon',
  },
]

function ProductCard({ product, index }) {
  const hasLink = !!product.link

  const handleClick = () => {
    if (hasLink) {
      window.open(product.link, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <motion.div
      className={`relative rounded-lg p-6 flex flex-col group ${hasLink ? 'cursor-pointer' : 'cursor-default'}`}
      style={{
        background: 'rgba(17,17,17,0.9)',
        border: '1px solid rgba(255,255,255,0.06)',
        minHeight: '280px',
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={hasLink ? { y: -4, borderColor: `${product.accentColor}30` } : {}}
      onClick={handleClick}
    >
      {/* Accent left bar */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[2px] rounded-l"
        style={{
          background: `linear-gradient(180deg, ${product.accentColor} 0%, ${product.accentColor}20 100%)`,
          boxShadow: `0 0 12px ${product.accentColor}30`,
        }}
      />

      {/* Status badge */}
      {product.status === 'coming-soon' && (
        <div className="absolute top-5 right-5 flex items-center gap-1.5 px-2 py-1 rounded-sm text-[9px] font-mono tracking-widest bg-white/5 border border-white/10 text-[#8A8A8A]">
          <Clock size={9} />
          COMING SOON
        </div>
      )}

      {/* Icon + header */}
      <div className="flex items-start gap-4 mb-4">
        <div
          className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
          style={{
            background: `${product.accentColor}08`,
            border: `1px solid ${product.accentColor}20`,
          }}
        >
          {product.icon}
        </div>
        <div className="flex-1 min-w-0 pt-0.5">
          <div className="flex items-center gap-2 mb-1">
            <span
              className="text-[9px] font-mono tracking-widest px-2 py-0.5 rounded-sm"
              style={{
                color: product.sectorColor,
                background: `${product.sectorColor}10`,
                border: `1px solid ${product.sectorColor}20`,
              }}
            >
              {product.sector}
            </span>
          </div>
          <h3
            className="text-base font-bold text-white leading-tight"
            style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.01em' }}
          >
            {product.name}
          </h3>
        </div>
      </div>

      {/* Tagline */}
      <p className="text-[#8A8A8A] text-sm leading-relaxed mb-5 flex-1" style={{ fontWeight: 300 }}>
        {product.tagline}
      </p>

      {/* Features */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {product.features.map((feat) => (
          <span
            key={feat}
            className="text-[9px] font-mono tracking-wider text-[#8A8A8A] border border-white/8 px-2 py-1 rounded-sm bg-white/2"
          >
            {feat}
          </span>
        ))}
      </div>

      {/* Metric + CTA */}
      <div className="flex items-end justify-between">
        <div>
          <div
            className="text-xl font-bold"
            style={{ fontFamily: 'Space Grotesk, sans-serif', color: product.accentColor }}
          >
            {product.metric}
          </div>
          <div className="text-[10px] text-[#8A8A8A] font-mono mt-0.5">{product.metricLabel}</div>
        </div>
        {hasLink && (
          <motion.div
            className="flex items-center gap-1 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            style={{ color: product.accentColor }}
          >
            Learn more <ArrowUpRight size={13} />
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

export default function Products() {
  return (
    <section
      id="products"
      className="relative section-padding overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #000000 0%, #05050f 50%, #000000 100%)' }}
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-overlay opacity-15 pointer-events-none" />

      {/* Vertical glow line */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-0 w-px h-24 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, transparent, rgba(0,194,255,0.3), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow block mb-5">The Suite</span>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-5"
            style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.03em' }}
          >
            Products That Transform Operations
          </h2>
          <p className="text-[#8A8A8A] max-w-xl mx-auto text-base leading-relaxed" style={{ fontWeight: 300 }}>
            Each product is purpose-engineered for its sector's regulatory landscape, operational complexity,
            and intelligence requirements.
          </p>
        </motion.div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
