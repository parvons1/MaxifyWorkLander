import { motion } from "framer-motion";

const fadeRise = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

export default function Intro() {
  return (
    <section id="about" className="section-pad">
      <div className="container-editorial">
        <div className="max-w-5xl">
          <motion.p
            className="lede text-ink text-2xl md:text-4xl lg:text-5xl mb-10 md:mb-12"
            {...fadeRise}
          >
            MaxifyWork is an enterprise software company working at the meeting
            point of{" "}
            <span className="text-muted">operations and applied intelligence</span>
            . We build the platforms that run mission-critical work across
            medical, retail, employment, and shipping — turning the data
            enterprises already produce into decisions they can act on.
          </motion.p>

          <motion.p
            className="lede text-ink text-2xl md:text-4xl lg:text-5xl"
            {...fadeRise}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
          >
            Alongside our sector platforms, we provide a shared operating layer
            —{" "}
            <span className="text-muted">
              authentication, analytics, compliance, and AI
            </span>{" "}
            — designed to power modern enterprises with intelligent, scalable
            technology. Learn more below.
          </motion.p>
        </div>

        <motion.div
          className="mt-16 md:mt-20 border-t border-line"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
        />
      </div>
    </section>
  );
}
