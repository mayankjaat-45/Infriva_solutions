import { motion } from "framer-motion";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const services = [
  "Web Development",
  "UI/UX Design",
  "SEO (Search Engine Optimization)",
  "Digital Marketing",
  "WhatsApp Marketing",
  "Google / Facebook / Instagram Ads",
  "Graphic Design",
  "Content Marketing",
  "Email Marketing",
  "Bulk SMS Marketing",
  "E-commerce (Amazon, Flipkart, Shopify)",
];

// 👉 WhatsApp Handler
const openWhatsApp = (service) => {
  const phoneNumber = "918505885515"; // country code + number (no +)

  const message = encodeURIComponent(
    service
      ? `Hi Infriva Solutions, I’m interested in your ${service} service.`
      : "Hi Infriva Solutions, I’m interested in your services.",
  );

  window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
};

const Contact = () => {
  const [selectedService, setSelectedService] = useState("");

  return (
    <section className="relative bg-[#0b1020] text-white min-h-screen pt-32 pb-32">
      {/* ===== HEADER ===== */}
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.span
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="inline-flex px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-purple-400 text-sm"
        >
          Contact Us
        </motion.span>

        <motion.h1
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ delay: 0.1 }}
          className="mt-6 text-4xl md:text-6xl font-extrabold"
        >
          Let’s Talk About
          <span className="block bg-linear-to-r from-purple-400 to-purple-500 bg-clip-text text-transparent">
            Your Next Project
          </span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ delay: 0.2 }}
          className="mt-6 text-gray-200/80 text-lg max-w-3xl mx-auto"
        >
          Have a project in mind? Chat directly with our team on WhatsApp for
          quick responses.
        </motion.p>
      </div>

      {/* ===== CONTENT ===== */}
      <div className="max-w-7xl mx-auto px-6 mt-24 grid gap-16 lg:grid-cols-2 items-start">
        {/* LEFT: INFO */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>

          <p className="text-gray-200/80 leading-relaxed mb-8">
            We help businesses with Web Development, SEO, Digital Marketing,
            UI/UX Design, Graphic Design, and E-commerce solutions.
          </p>

          <ul className="space-y-6 text-gray-200">
            <li className="flex items-center gap-4">
              <span className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                📧
              </span>
              <span>InfrivaSolutions@gmail.com</span>
            </li>

            <li className="flex items-center gap-4">
              <span className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                📞
              </span>
              <span>+91 8505885515</span>
            </li>

            <li className="flex items-center gap-4">
              <span className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                📍
              </span>
              <span>Remote • Serving Clients Worldwide</span>
            </li>
          </ul>
        </motion.div>

        {/* RIGHT: WHATSAPP CTA CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 rounded-3xl p-10 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Start a Conversation</h3>

          <p className="text-gray-200/80 mb-8">
            Click below to chat with our team on WhatsApp and get instant
            assistance.
          </p>

          <select
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            className="w-full mb-6 bg-white/10 border border-white/20 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service} value={service} className="text-black">
                {service}
              </option>
            ))}
          </select>

          <button
            onClick={() => openWhatsApp(selectedService)}
            className="w-full bg-green-600 hover:bg-green-500 py-4 rounded-xl font-semibold text-lg shadow-lg shadow-green-600/30 transition"
          >
            💬 Chat on WhatsApp
          </button>
        </motion.div>
      </div>

      {/* ===== FLOATING WHATSAPP BUTTON ===== */}
      <motion.button
        onClick={openWhatsApp}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-400 text-white p-4 rounded-full shadow-lg shadow-green-500/40"
        aria-label="Chat on WhatsApp"
      >
        💬
      </motion.button>
    </section>
  );
};

export default Contact;
