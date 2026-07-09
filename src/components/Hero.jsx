import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const fadeRise = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
}

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col pt-32 md:pt-40 pb-16"
    >
      <div className="container-editorial flex flex-col flex-1">

        {/* Headline — upper portion */}
        <motion.div
          className="flex-none"
          initial={fadeRise.initial}
          animate={fadeRise.animate}
          transition={fadeRise.transition}
        >
          <h1
            className="display text-ink text-6xl sm:text-7xl md:text-8xl lg:text-[8.5rem] xl:text-[10rem] leading-[0.95] tracking-tight max-w-[18ch]"
          >
            Intelligence for
            <br />
            <span className="inline">every operation</span>
            {/* Accent dot acts as the period */}
            <span
              className="accent-dot inline-block align-baseline ml-[0.12em]"
              style={{ width: '0.4em', height: '0.4em', flexShrink: 0 }}
              aria-hidden="true"
            />
          </h1>
        </motion.div>

        {/* Spacer pushes the featured link toward the lower third */}
        <div className="flex-1 min-h-[4rem]" />

        {/* Featured link row — Cytoscan-style bounded row */}
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href="#"
            className="group block border-t border-line"
            aria-label="Read: Beyond the dashboard — building the enterprise operating layer"
          >
            <div className="flex items-center gap-6 py-5">
              {/* NEW label */}
              <span className="label shrink-0">NEW</span>

              {/* Link sentence */}
              <span className="font-sans text-sm md:text-base text-ink-soft leading-snug flex-1 group-hover:text-accent transition-colors duration-200">
                Beyond the dashboard: building the enterprise operating layer.
              </span>

              {/* Trailing arrow */}
              <ArrowUpRight
                size={18}
                className="shrink-0 text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
              />
            </div>
            <div className="border-t border-line" />
          </a>
        </motion.div>

      </div>
    </section>
  )
}
