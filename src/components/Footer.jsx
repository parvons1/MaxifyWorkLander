import { motion } from 'framer-motion'

const columns = [
  {
    title: 'Products',
    links: [
      { label: 'Cytoscan Intelligence', href: 'https://www.cytoscan.org' },
      { label: 'MaxifyJobs', href: 'https://maxifyjobs.com' },
      { label: 'SalonOS', href: 'https://salons.maxifywork.com' },
      { label: 'INDEerpriseOS', href: '#products' },
      { label: 'MaxifyLog', href: '#products' },
      { label: 'XCyto+ EHR', href: '#products' },
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
      { label: 'About', href: '#about' },
      { label: 'Platform', href: '#platform' },
      { label: 'Security', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
      { label: 'HIPAA', href: '#' },
      { label: 'GDPR', href: '#' },
    ],
  },
]

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
}

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-line bg-paper-alt">
      <div className="container-editorial pt-16 pb-10">

        {/* Top area: wordmark + tagline */}
        <motion.div
          {...fadeIn}
          className="mb-12"
        >
          <p className="font-serif font-medium text-2xl text-ink leading-none">
            maxifywork
          </p>
          <p className="font-sans text-sm text-muted mt-1.5">
            The enterprise operating layer.
          </p>
        </motion.div>

        {/* Link columns */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12"
        >
          {columns.map((col, colIndex) => (
            <div key={col.title}>
              <h4 className="font-mono text-xs uppercase tracking-widest text-muted mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.15 + colIndex * 0.05 + linkIndex * 0.04,
                    }}
                  >
                    <a
                      href={link.href}
                      className="font-sans text-sm text-muted hover:text-ink transition-colors duration-200"
                      {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Compliance line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="border-t border-line pt-6 mb-6"
        >
          <p className="font-mono text-xs text-muted">
            HIPAA · SOC 2 Type II · ISO 27001 · GDPR · GST
          </p>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
          className="border-t border-line pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <p className="font-mono text-xs text-muted">
            &copy; 2026 MaxifyWork Technologies Pvt. Ltd.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="font-mono text-xs text-muted hover:text-ink transition-colors duration-200">
              Privacy
            </a>
            <a href="#" className="font-mono text-xs text-muted hover:text-ink transition-colors duration-200">
              Terms
            </a>
            <a href="#" className="font-mono text-xs text-muted hover:text-ink transition-colors duration-200">
              Sitemap
            </a>
          </div>
        </motion.div>

      </div>
    </footer>
  )
}
