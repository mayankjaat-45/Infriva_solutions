import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <section className="bg-[#0b1020] text-white min-h-screen pt-32 pb-32">
      {/* ===== HERO ===== */}
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.span
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="inline-flex px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-purple-400 text-sm"
        >
          About Infriva Technologies
        </motion.span>

        <motion.h1
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ delay: 0.1 }}
          className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight"
        >
          We Build Digital Experiences That
          <span className="block bg-linear-to-r from-purple-400 to-purple-500 bg-clip-text text-transparent">
            Convert, Scale & Perform
          </span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ delay: 0.2 }}
          className="mt-6 text-gray-200/80 text-lg max-w-3xl mx-auto"
        >
          Infriva Technologies helps businesses grow through high-impact web
          development, SEO, design, and digital marketing — built for speed,
          clarity, and measurable results.
        </motion.p>
      </div>

      {/* ===== STORY (UPDATED – CLEAN UI) ===== */}
      <div className="max-w-6xl mx-auto px-6 mt-32 grid gap-16 lg:grid-cols-2">
        {/* Left Text */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl font-bold mb-6">
            Built for Growth-Focused Brands
          </h2>

          <p className="text-gray-200/80 leading-relaxed mb-6">
            We started Infriva Technologies with one clear belief — businesses
            don’t need more noise, they need digital systems that actually work.
          </p>

          <p className="text-gray-200/80 leading-relaxed">
            From fast, scalable websites to conversion-driven design and SEO,
            everything we build is focused on real outcomes: more traffic,
            stronger engagement, and sustainable growth.
          </p>
        </motion.div>

        {/* Right Minimal Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {[
            {
              title: "Strategy Before Execution",
              desc: "Every project begins with clarity — business goals, users, and growth direction.",
            },
            {
              title: "Performance by Default",
              desc: "Speed, SEO, and scalability are part of the foundation, not afterthoughts.",
            },
            {
              title: "Design That Guides Action",
              desc: "We design interfaces that feel intuitive and drive meaningful conversions.",
            },
            {
              title: "Built for the Long Term",
              desc: "Our systems scale as your business grows — no rebuilds, no limitations.",
            },
          ].map((item, i) => (
            <div key={i} className="border-l-2 border-purple-500/60 pl-6">
              <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
              <p className="text-gray-200/70 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ===== WHY CHOOSE US ===== */}
      <div className="max-w-7xl mx-auto px-6 mt-32">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-3xl md:text-4xl font-bold text-center"
        >
          Why Businesses Choose Us
        </motion.h2>

        <p className="mt-4 text-center text-gray-200/70 max-w-3xl mx-auto">
          We don’t just offer services — we build long-term digital growth
          engines.
        </p>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "High-Performance Development",
              desc: "Fast, secure, SEO-ready websites built with modern frameworks and best practices.",
            },
            {
              title: "Design That Converts",
              desc: "UI/UX focused on clarity, trust, and user action — not just visuals.",
            },
            {
              title: "SEO & Visibility Growth",
              desc: "Search-optimized structures that drive consistent organic traffic.",
            },
            {
              title: "Marketing with Strategy",
              desc: "Data-driven campaigns designed to scale efficiently.",
            },
            {
              title: "Transparent Process",
              desc: "Clear communication, real timelines, and zero guesswork.",
            },
            {
              title: "Built to Scale",
              desc: "Solutions that grow with your business, not against it.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition"
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-200/80 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ===== CTA ===== */}
      <div className="px-6 mt-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            max-w-5xl mx-auto
            rounded-3xl
            p-12
            bg-linear-to-r from-indigo-600/20 to-purple-600/20
            border border-white/10
            text-center
          "
        >
          <h3 className="text-3xl font-bold">
            Ready to Grow Your Business Digitally?
          </h3>

          <p className="mt-4 text-gray-200/80 max-w-2xl mx-auto">
            Let’s build a digital presence that attracts, converts, and scales
            with your goals.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <a
              href="/contact"
              className="inline-block bg-purple-600 hover:bg-purple-500 px-8 py-3 rounded-xl shadow-lg shadow-indigo-600/30"
            >
              Start a Project
            </a>
            <a
              href="/services"
              className="inline-block border border-white/20 hover:bg-white/10 px-8 py-3 rounded-xl"
            >
              View Services
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
