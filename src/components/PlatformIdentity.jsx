import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'

const stats = [
  { value: 4, label: 'Sectors', suffix: '' },
  { value: 6, label: 'Products', suffix: '' },
  { value: 1, label: 'Platform', suffix: '' },
]

function Counter({ value, duration = 1.8, suffix = '' }) {
  const [display, setDisplay] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, value, duration])

  return (
    <span ref={ref} className="counter-text">
      {display}{suffix}
    </span>
  )
}

// Animated abstract graphic — glowing data flow cube/lattice
function DataFlowGraphic() {
  return (
    <div className="relative w-full h-80 md:h-96 flex items-center justify-center">
      {/* Outer ring */}
      <motion.div
        className="absolute w-64 h-64 rounded-full border border-[#00C2FF]/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute w-48 h-48 rounded-full border border-[#7B2FFF]/10"
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />

      {/* Center cube SVG */}
      <div className="relative z-10">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Glow filter */}
          <defs>
            <filter id="glow-blue" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="glow-violet" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id="cubeGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00C2FF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#7B2FFF" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="cubeGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00C2FF" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#7B2FFF" stopOpacity="0.15" />
            </linearGradient>
          </defs>

          {/* Cube top face */}
          <motion.polygon
            points="100,60 140,80 100,100 60,80"
            fill="url(#cubeGrad2)"
            stroke="url(#cubeGrad1)"
            strokeWidth="0.8"
            filter="url(#glow-blue)"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
          {/* Cube left face */}
          <polygon
            points="60,80 100,100 100,140 60,120"
            fill="rgba(0,194,255,0.06)"
            stroke="rgba(0,194,255,0.4)"
            strokeWidth="0.8"
          />
          {/* Cube right face */}
          <polygon
            points="100,100 140,80 140,120 100,140"
            fill="rgba(123,47,255,0.06)"
            stroke="rgba(123,47,255,0.4)"
            strokeWidth="0.8"
          />

          {/* Corner dots */}
          {[[100,60],[140,80],[60,80],[100,100],[100,140],[60,120],[140,120]].map(([cx,cy], i) => (
            <motion.circle
              key={i}
              cx={cx} cy={cy} r="2.5"
              fill="#00C2FF"
              filter="url(#glow-blue)"
              animate={{ opacity: [0.5, 1, 0.5], r: [2, 3, 2] }}
              transition={{ duration: 2 + i * 0.3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
            />
          ))}

          {/* Data flow lines radiating outward */}
          {[
            { x1: 100, y1: 60, x2: 100, y2: 30 },
            { x1: 140, y1: 80, x2: 165, y2: 65 },
            { x1: 60, y1: 80, x2: 35, y2: 65 },
            { x1: 60, y1: 120, x2: 35, y2: 135 },
            { x1: 140, y1: 120, x2: 165, y2: 135 },
            { x1: 100, y1: 140, x2: 100, y2: 170 },
          ].map((line, i) => (
            <motion.line
              key={i}
              x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2}
              stroke="rgba(0,194,255,0.4)"
              strokeWidth="0.8"
              strokeDasharray="3 3"
              animate={{ strokeDashoffset: [0, -12] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear', delay: i * 0.25 }}
            />
          ))}

          {/* Outer data points */}
          {[
            [100, 30], [165, 65], [35, 65], [35, 135], [165, 135], [100, 170]
          ].map(([cx, cy], i) => (
            <motion.circle
              key={`outer-${i}`}
              cx={cx} cy={cy} r="3"
              fill="transparent"
              stroke="rgba(123,47,255,0.7)"
              strokeWidth="1"
              animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.3, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.35 }}
            />
          ))}
        </svg>
      </div>

      {/* Floating data labels */}
      {[
        { label: 'AI Runtime', x: '-5%', y: '15%', delay: 0 },
        { label: 'Analytics', x: '78%', y: '10%', delay: 0.3 },
        { label: 'Compliance', x: '80%', y: '72%', delay: 0.6 },
        { label: 'Auth Layer', x: '-8%', y: '72%', delay: 0.9 },
      ].map((item, i) => (
        <motion.div
          key={i}
          className="absolute text-[9px] font-mono text-[#00C2FF]/50 whitespace-nowrap"
          style={{ left: item.x, top: item.y }}
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: item.delay }}
        >
          {item.label}
        </motion.div>
      ))}
    </div>
  )
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

export default function PlatformIdentity() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="about"
      className="relative section-padding overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #000000 0%, #080810 50%, #000000 100%)' }}
    >
      {/* Dot overlay */}
      <div className="absolute inset-0 dot-overlay opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Left: Text */}
          <div>
            <motion.span className="eyebrow block mb-5" variants={itemVariants}>
              Platform Identity
            </motion.span>

            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.03em', lineHeight: 1.08 }}
              variants={itemVariants}
            >
              Not a tool.<br />
              <span className="text-transparent bg-clip-text" style={{
                backgroundImage: 'linear-gradient(90deg, #00C2FF 20%, #7B2FFF 100%)'
              }}>
                A gateway.
              </span>
            </motion.h2>

            <motion.p
              className="text-[#8A8A8A] text-base leading-relaxed mb-10 max-w-lg"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
              variants={itemVariants}
            >
              MaxifyWork is a unified enterprise platform that connects sector-specific AI-powered applications
              under a single intelligent operating layer. We don't sell software — we deliver operational
              transformation.
            </motion.p>

            {/* Stats */}
            <motion.div className="flex items-center gap-10" variants={itemVariants}>
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span
                    className="text-4xl font-bold text-white mb-1"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="text-xs text-[#8A8A8A] font-mono tracking-widest uppercase">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Separator */}
            <motion.div
              className="mt-10 pt-10 border-t border-white/5"
              variants={itemVariants}
            >
              <div className="flex flex-wrap gap-4">
                {['HIPAA Compliant', 'SOC 2 Type II', 'ISO 27001', 'GDPR Ready'].map((badge) => (
                  <span
                    key={badge}
                    className="text-[9px] font-mono tracking-widest text-[#8A8A8A] border border-white/10 px-3 py-1.5 rounded-sm"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Animated graphic */}
          <motion.div variants={itemVariants}>
            <DataFlowGraphic />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
