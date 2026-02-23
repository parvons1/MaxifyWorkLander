import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ShieldCheck, Zap, Scale, Brain } from 'lucide-react'

const nodes = [
  { id: 'auth', label: 'Auth Layer', x: 200, y: 100, color: '#00C2FF' },
  { id: 'analytics', label: 'Analytics Engine', x: 420, y: 60, color: '#7B2FFF' },
  { id: 'compliance', label: 'Compliance Module', x: 580, y: 160, color: '#10B981' },
  { id: 'ai', label: 'AI Runtime', x: 540, y: 300, color: '#F59E0B' },
  { id: 'api', label: 'API Gateway', x: 280, y: 340, color: '#00C2FF' },
  { id: 'billing', label: 'Billing System', x: 120, y: 250, color: '#7B2FFF' },
]

const centerNode = { x: 380, y: 200 }

const pillars = [
  {
    icon: <ShieldCheck size={20} />,
    title: 'Security',
    desc: 'Zero-trust architecture with end-to-end encryption and role-based access control.',
    color: '#00C2FF',
  },
  {
    icon: <Scale size={20} />,
    title: 'Scalability',
    desc: 'Auto-scaling infrastructure designed for enterprise workloads across geographies.',
    color: '#7B2FFF',
  },
  {
    icon: <ShieldCheck size={20} />,
    title: 'Compliance',
    desc: 'HIPAA, SOC 2, GDPR, and GST regulatory compliance baked into the platform core.',
    color: '#10B981',
  },
  {
    icon: <Brain size={20} />,
    title: 'AI-Native',
    desc: 'Intelligence embedded at every layer — from data ingestion to decision output.',
    color: '#F59E0B',
  },
]

function ArchDiagram({ inView }) {
  return (
    <div className="relative w-full" style={{ paddingBottom: '56%' }}>
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 700 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="arch-glow-blue">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="arch-glow-center">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00C2FF" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#7B2FFF" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00C2FF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#7B2FFF" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Background radial glow */}
        <circle cx={centerNode.x} cy={centerNode.y} r="120" fill="url(#centerGlow)" />

        {/* Connection lines */}
        {nodes.map((node, i) => (
          <motion.line
            key={`line-${node.id}`}
            x1={centerNode.x} y1={centerNode.y}
            x2={node.x} y2={node.y}
            stroke={node.color}
            strokeWidth="1"
            strokeOpacity="0.35"
            strokeDasharray="5 4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={inView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 + i * 0.1 }}
            style={{
              animation: inView ? `dash-flow ${2 + i * 0.3}s linear infinite` : 'none',
            }}
          />
        ))}

        {/* Outer nodes */}
        {nodes.map((node, i) => (
          <motion.g
            key={node.id}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
          >
            {/* Node glow */}
            <circle cx={node.x} cy={node.y} r="28" fill={`${node.color}08`} />
            {/* Node circle */}
            <motion.circle
              cx={node.x} cy={node.y} r="20"
              fill="rgba(10,10,20,0.9)"
              stroke={node.color}
              strokeWidth="1"
              strokeOpacity="0.6"
              animate={inView ? { strokeOpacity: [0.4, 0.9, 0.4] } : {}}
              transition={{ duration: 2.5 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
            />
            {/* Pulse ring */}
            <motion.circle
              cx={node.x} cy={node.y} r="28"
              fill="transparent"
              stroke={node.color}
              strokeWidth="0.5"
              strokeOpacity="0"
              animate={inView ? { r: [24, 36], strokeOpacity: [0.5, 0] } : {}}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeOut', delay: i * 0.5 }}
            />
            {/* Node label */}
            <text
              x={node.x} y={node.y + 38}
              textAnchor="middle"
              fontSize="9"
              fill={node.color}
              opacity="0.7"
              fontFamily="JetBrains Mono, monospace"
              letterSpacing="0.08em"
            >
              {node.label.toUpperCase()}
            </text>
          </motion.g>
        ))}

        {/* Center node */}
        <motion.g
          initial={{ opacity: 0, scale: 0.4 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Outer ring */}
          <motion.circle
            cx={centerNode.x} cy={centerNode.y} r="52"
            fill="transparent"
            stroke="rgba(0,194,255,0.15)"
            strokeWidth="1"
            animate={inView ? { rotate: 360 } : {}}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />
          <motion.circle
            cx={centerNode.x} cy={centerNode.y} r="42"
            fill="rgba(0,0,30,0.95)"
            stroke="rgba(0,194,255,0.5)"
            strokeWidth="1.2"
            filter="url(#arch-glow-blue)"
            animate={inView ? { strokeOpacity: [0.4, 0.8, 0.4] } : {}}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
          {/* Inner fill */}
          <circle cx={centerNode.x} cy={centerNode.y} r="38" fill="rgba(0,5,20,0.95)" />

          {/* Center icon — grid symbol */}
          <g transform={`translate(${centerNode.x - 14}, ${centerNode.y - 14})`}>
            <rect x="0" y="0" width="9" height="9" rx="1" fill="none" stroke="#00C2FF" strokeWidth="0.8" />
            <rect x="11" y="0" width="9" height="9" rx="1" fill="#00C2FF" fillOpacity="0.3" stroke="#00C2FF" strokeWidth="0.8" />
            <rect x="0" y="11" width="9" height="9" rx="1" fill="#7B2FFF" fillOpacity="0.3" stroke="#7B2FFF" strokeWidth="0.8" />
            <rect x="11" y="11" width="9" height="9" rx="1" fill="none" stroke="#7B2FFF" strokeWidth="0.8" />
          </g>

          {/* Center text */}
          <text x={centerNode.x} y={centerNode.y + 24} textAnchor="middle" fontSize="8" fill="rgba(255,255,255,0.5)" fontFamily="Space Grotesk, sans-serif" fontWeight="600" letterSpacing="0.05em">
            MAXIFYWORK
          </text>
          <text x={centerNode.x} y={centerNode.y + 35} textAnchor="middle" fontSize="7" fill="rgba(0,194,255,0.5)" fontFamily="JetBrains Mono, monospace" letterSpacing="0.08em">
            CORE
          </text>
        </motion.g>
      </svg>
    </div>
  )
}

export default function Architecture() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="platform"
      className="relative section-padding overflow-hidden"
      style={{ background: '#000000' }}
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-20 pointer-events-none" />

      {/* Blue glow top-right */}
      <div
        className="absolute -top-32 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,194,255,0.04) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow block mb-5">One Platform, Infinite Scale</span>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-5"
            style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.03em' }}
          >
            Enterprise-Grade Infrastructure
          </h2>
          <p className="text-[#8A8A8A] max-w-xl mx-auto text-base leading-relaxed" style={{ fontWeight: 300 }}>
            One login. Unified data. Cross-platform intelligence. MaxifyWork's architecture connects
            every layer of your enterprise operations.
          </p>
        </motion.div>

        {/* Diagram + Text layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center mb-20">
          {/* Diagram — 3 cols */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <ArchDiagram inView={inView} />
          </motion.div>

          {/* Right text — 2 cols */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3
              className="text-2xl md:text-3xl font-bold text-white mb-4"
              style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}
            >
              One login.<br />Unified data.<br />
              <span className="text-transparent bg-clip-text" style={{
                backgroundImage: 'linear-gradient(90deg, #00C2FF, #7B2FFF)'
              }}>
                Cross-platform intelligence.
              </span>
            </h3>
            <p className="text-[#8A8A8A] text-sm leading-relaxed mb-8" style={{ fontWeight: 300 }}>
              Every MaxifyWork product connects to the same intelligent core — sharing authentication,
              analytics, compliance, and AI capabilities so your teams operate without friction.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: '99.99%', label: 'Uptime SLA' },
                { val: '<50ms', label: 'API Latency' },
                { val: 'SOC 2', label: 'Certified' },
                { val: 'Multi-cloud', label: 'Deployment' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="p-4 rounded"
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.08 }}
                >
                  <div
                    className="text-lg font-bold text-white mb-0.5"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    {item.val}
                  </div>
                  <div className="text-[10px] font-mono text-[#8A8A8A] tracking-wider uppercase">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              className="p-5 rounded-lg group"
              style={{
                background: 'rgba(17,17,17,0.8)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
              whileHover={{ borderColor: `${pillar.color}30`, y: -3 }}
            >
              <div
                className="w-9 h-9 rounded flex items-center justify-center mb-4"
                style={{ background: `${pillar.color}12`, color: pillar.color }}
              >
                {pillar.icon}
              </div>
              <h4
                className="text-sm font-semibold text-white mb-2"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                {pillar.title}
              </h4>
              <p className="text-[#8A8A8A] text-xs leading-relaxed" style={{ fontWeight: 300 }}>
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
