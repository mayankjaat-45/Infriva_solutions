import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { servicesData } from "../Data/servicesData";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0b1020] text-white">
        Service not found
      </div>
    );
  }

  return (
    <section className="bg-[#0b1020] text-white overflow-hidden">
      {/* ================= HERO ================= */}
      <div className="relative pt-32 pb-28">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover opacity-40 scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-b from-[#0b1020]/60 via-[#0b1020]/90 to-[#0b1020]" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full
                       bg-white/10 border border-white/20 text-purple-400 text-sm"
          >
            ✦ Our Services
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight"
          >
            {service.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto"
          >
            {service.description}
          </motion.p>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid gap-20 lg:grid-cols-2">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6">What You Get</h2>

          <p className="text-gray-300 mb-10 leading-relaxed">
            We focus on building reliable, scalable, and future-ready solutions.
            Every feature is designed to support performance, security, and
            growth.
          </p>

          <ul className="space-y-4">
            {service.features.map((feature, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="
                  flex items-start gap-4
                  p-5 rounded-2xl
                  bg-white/5 border border-white/10
                  hover:bg-white/10 transition
                "
              >
                <span className="mt-2 w-2.5 h-2.5 bg-purple-500 rounded-full shrink-0" />
                <span className="text-gray-200">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Right – Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div
            className="
            relative rounded-3xl p-8
            bg-white/5 backdrop-blur-xl
            border border-white/10
            shadow-2xl
          "
          >
            <img
              src={service.image}
              alt={service.title}
              className="rounded-2xl object-cover mb-6"
            />

            <h3 className="text-xl font-semibold mb-3">
              Built With Modern Tech
            </h3>

            <p className="text-gray-300 text-sm leading-relaxed">
              We use Next.js, Tailwind CSS, MERN Stack, and Python-powered
              backends to deliver fast, SEO-friendly, and scalable applications.
            </p>
          </div>
        </motion.div>
      </div>

      {/* ================= CTA ================= */}
      <div className="px-6 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            max-w-5xl mx-auto
            rounded-3xl p-14 text-center
            bg-linear-to-r from-indigo-600/20 via-purple-600/20 to-pink-600/20
            border border-white/10
          "
        >
          <h3 className="text-3xl font-bold">Let’s Build Something Powerful</h3>

          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Talk to us about your idea and see how our{" "}
            {service.title.toLowerCase()}
            expertise can turn it into a high-impact product.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="
                bg-purple-600 hover:bg-purple-500
                px-8 py-3 rounded-xl
                font-semibold shadow-lg shadow-purple-600/30
                transition
              "
            >
              Start a Project
            </Link>

            <Link
              to="/services"
              className="
                border border-white/30
                px-8 py-3 rounded-xl
                hover:bg-white/10 transition
                font-semibold
              "
            >
              View All Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceDetail;
