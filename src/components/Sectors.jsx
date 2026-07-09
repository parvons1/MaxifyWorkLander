import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const sectors = [
  {
    name: "Medical",
    description:
      "AI-powered diagnostics, ophthalmic EHR, and clinical intelligence.",
    tags: "HIPAA · EHR · AI Diagnostics",
  },
  {
    name: "Retail",
    description:
      "Smart inventory, billing, and customer intelligence for modern retail.",
    tags: "GST Billing · Inventory AI · CRM",
  },
  {
    name: "Employment",
    description:
      "AI-driven applicant tracking, hiring automation, and workforce analytics.",
    tags: "ATS · AI Hiring · Analytics",
  },
  {
    name: "Shipping",
    description:
      "End-to-end logistics, fleet intelligence, and compliance tracking.",
    tags: "Fleet AI · Compliance · E-Way Bill",
  },
];

const rowVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.1,
    },
  }),
};

export default function Sectors() {
  return (
    <section id="sectors" className="section-pad">
      <div className="container-editorial">
        {/* Numbered section header */}
        <div className="border-t border-line pt-8 grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-12">
          <div className="lg:col-span-2">
            <span className="label">01</span>
          </div>
          <div className="lg:col-span-10">
            <h2 className="display text-6xl md:text-7xl text-ink">Sectors</h2>
            <p className="font-sans text-muted text-lg mt-4 max-w-2xl leading-relaxed">
              Four industries, four purpose-built platforms — each speaking the
              operational and regulatory language of its sector.
            </p>

            {/* Editorial list */}
            <div className="mt-12">
              {sectors.map((sector, i) => (
                <motion.a
                  key={sector.name}
                  href="#sectors"
                  custom={i}
                  variants={rowVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  className={
                    "group flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 py-8 border-t border-line" +
                    (i === sectors.length - 1 ? " border-b" : "")
                  }
                  aria-label={sector.name}
                >
                  {/* Left: sector name */}
                  <span className="font-serif text-3xl md:text-4xl text-ink group-hover:text-accent transition-colors duration-200 shrink-0">
                    {sector.name}
                  </span>

                  {/* Right: description + tags + arrow */}
                  <div className="flex items-start justify-between gap-6 sm:max-w-md w-full sm:w-auto">
                    <div className="flex flex-col gap-2">
                      <p className="font-sans text-muted text-base leading-relaxed">
                        {sector.description}
                      </p>
                      <span className="font-mono text-xs uppercase tracking-widest text-muted">
                        {sector.tags}
                      </span>
                    </div>
                    <ArrowUpRight
                      size={20}
                      className="text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0 mt-1"
                    />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
