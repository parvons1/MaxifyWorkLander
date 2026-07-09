import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const products = [
  {
    id: 'cytoscan',
    name: 'Cytoscan Intelligence',
    sector: 'Medical',
    tagline: 'AI-powered cancer diagnostics that accelerate pathology workflows and clinical decisions.',
    status: 'live',
    link: 'https://www.cytoscan.org',
    metric: '97.3% accuracy',
  },
  {
    id: 'maxifyjobs',
    name: 'MaxifyJobs & MaxifyCampus',
    sector: 'Employment',
    tagline: 'Global employment platform with AI-driven ATS, campus recruitment, and workforce analytics.',
    status: 'live',
    link: 'https://maxifyjobs.com',
    metric: '2,000+ jobs/day',
  },
  {
    id: 'salonos',
    name: 'SalonOS',
    sector: 'Retail',
    tagline: 'Salon chain management with appointment intelligence, POS, and loyalty.',
    status: 'live',
    link: 'https://salons.maxifywork.com',
    metric: 'Live',
  },
  {
    id: 'indeerpriseOS',
    name: 'INDEerpriseOS',
    sector: 'Retail',
    tagline: 'Intelligent enterprise & retail management unifying operations, billing, and customer data.',
    status: 'coming-soon',
    comingSoon: 'Q2 2026 · Coming soon',
  },
  {
    id: 'maxifylog',
    name: 'MaxifyLog',
    sector: 'Shipping',
    tagline: 'End-to-end logistics with real-time fleet tracking and compliance automation.',
    status: 'coming-soon',
    comingSoon: 'Q3 2026 · Coming soon',
  },
  {
    id: 'cytoscan-optic',
    name: 'XCyto+ EHR',
    sector: 'Medical',
    tagline: 'Ophthalmic EHR and diagnostic intelligence for eye-care institutions.',
    status: 'coming-soon',
    comingSoon: 'Q4 2026 · Coming soon',
  },
]

const rowVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

function ProductRow({ product, index }) {
  const isLive = product.status === 'live'

  const inner = (
    <motion.div
      className={`grid grid-cols-1 md:grid-cols-12 gap-y-3 md:gap-x-8 items-baseline py-8 border-t border-line group ${
        isLive ? 'cursor-pointer' : 'cursor-default'
      }`}
      custom={index}
      variants={rowVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
    >
      {/* Left: name + sector tag */}
      <div className="md:col-span-4">
        <span
          className={`font-serif text-2xl md:text-3xl text-ink leading-tight transition-colors duration-200 ${
            isLive ? 'group-hover:text-accent' : ''
          }`}
        >
          {product.name}
        </span>
        <div className="mt-1.5">
          <span className="font-mono text-xs uppercase tracking-widest text-muted">
            {product.sector}
          </span>
        </div>
      </div>

      {/* Middle: tagline */}
      <div className="md:col-span-5">
        <p className="font-sans text-muted leading-relaxed max-w-md">
          {product.tagline}
        </p>
      </div>

      {/* Right: status/metric */}
      <div className="md:col-span-3 flex items-center justify-start md:justify-end">
        {isLive ? (
          <span
            className={`font-mono text-sm text-ink-soft flex items-center gap-1.5 transition-colors duration-200 ${
              isLive ? 'group-hover:text-accent' : ''
            }`}
          >
            <span>{product.metric}</span>
            <ArrowUpRight
              size={15}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
        ) : (
          <span className="font-mono text-sm text-muted">
            {product.comingSoon}
          </span>
        )}
      </div>
    </motion.div>
  )

  if (isLive) {
    return (
      <a
        href={product.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block no-underline"
        aria-label={`Visit ${product.name}`}
      >
        {inner}
      </a>
    )
  }

  return <div>{inner}</div>
}

export default function Products() {
  return (
    <section id="products" className="section-pad">
      <div className="container-editorial">
        {/* Numbered section header */}
        <div className="border-t border-line pt-8 grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-12">
          <div className="lg:col-span-2">
            <span className="label">03</span>
          </div>
          <div className="lg:col-span-10">
            <motion.h2
              className="display text-6xl md:text-7xl"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              Products
            </motion.h2>

            <motion.p
              className="font-sans text-muted text-lg mt-6 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              Six products, each engineered for its sector's regulatory landscape and
              operational complexity.
            </motion.p>

            {/* Editorial list */}
            <div className="mt-12">
              {products.map((product, index) => (
                <ProductRow key={product.id} product={product} index={index} />
              ))}
              {/* Bottom border on last row */}
              <div className="border-t border-line" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
