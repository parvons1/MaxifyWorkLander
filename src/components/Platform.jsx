import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const fadeRise = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const specs = [
  { value: "99.99%", label: "Uptime SLA" },
  { value: "<50ms", label: "API Latency" },
  { value: "SOC 2 Type II", label: "Certified" },
  { value: "Multi-cloud", label: "Deployment" },
];

export default function Platform() {
  return (
    <section id="platform" className="section-pad bg-paper-alt">
      <div className="container-editorial">
        <div className="border-t border-line pt-8 grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-12">
          {/* Left gutter — section number */}
          <motion.div
            className="lg:col-span-2"
            variants={fadeRise}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <span className="label">02</span>
          </motion.div>

          {/* Main column */}
          <div className="lg:col-span-10 flex flex-col gap-12">
            {/* Title */}
            <motion.h2
              className="display text-6xl md:text-7xl text-ink"
              variants={fadeRise}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              Platform
            </motion.h2>

            {/* Lead paragraph */}
            <motion.p
              className="text-2xl md:text-4xl text-ink leading-snug max-w-4xl font-serif"
              style={{ lineHeight: 1.28 }}
              variants={fadeRise}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
            >
              One login. Unified data. Cross-platform intelligence. Every MaxifyWork
              product connects to the same intelligent core — sharing authentication,
              analytics, compliance, and AI — so teams operate without friction, on
              real infrastructure, under real constraints.
            </motion.p>

            {/* Specs row */}
            <motion.div
              variants={fadeRise}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.16 }}
            >
              <div className="border-t border-line pt-8 grid grid-cols-2 md:grid-cols-4 gap-y-8">
                {specs.map((spec, i) => (
                  <div
                    key={spec.label}
                    className={
                      "pr-6 " +
                      (i < specs.length - 1
                        ? "md:border-r md:border-line"
                        : "")
                    }
                  >
                    <p className="font-serif text-2xl md:text-3xl text-ink mb-1 leading-tight">
                      {spec.value}
                    </p>
                    <p className="font-mono text-xs uppercase tracking-widest text-muted">
                      {spec.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Arrow link */}
            <motion.div
              variants={fadeRise}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.24 }}
            >
              <a href="#platform" className="arrow-link inline-flex items-center gap-1">
                Explore the platform
                <ArrowUpRight size={16} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
