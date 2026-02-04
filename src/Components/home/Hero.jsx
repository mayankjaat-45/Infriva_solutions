import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[#0b1020] overflow-hidden">
      {/* CENTERED CONTENT */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.19 }}
          className="
            w-full
            max-w-4xl
            text-center
            text-white
          "
        >
          {/* Badge */}
          <motion.span
            variants={fadeUp}
            className="
              inline-flex items-center gap-2
              px-4 py-1.5
              rounded-full
              bg-white/5
              border border-white/10
              text-violet-400
              text-xs sm:text-sm
            "
          >
            🚀 We are Service Provider Agency
          </motion.span>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="
                      mt-6
                      text-3xl
                      sm:text-4xl
                      md:text-5xl
                      lg:text-6xl
                      xl:text-7xl
                      2xl:text-8xl
                      font-extrabold
                      leading-tight
                      tracking-tight
                    "
          >
            We Help Brands
            <span
              className="
    block
    mt-2
    bg-linear-to-b bg-purple-300 to-purple-700
    bg-clip-text text-transparent
  "
            >
              Grow Digitally
            </span>
          </motion.h1>
          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="
    mt-6
    text-gray-300
    text-sm
    sm:text-base
    md:text-lg
    lg:text-xl
    xl:text-2xl
    leading-relaxed
    max-w-3xl
    mx-auto
  "
          >
            We design, build, and market digital products that create meaningful
            experiences and measurable business growth.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            className="
              mt-10
              flex
              flex-col
              sm:flex-row
              items-center
              justify-center
              gap-4
            "
          >
            <Link to={"/contact"}>
              <button
                className="
                w-full sm:w-auto
                rounded-xl
                bg-purple-500
                px-8 py-3
                font-medium
                hover:bg-purple-500
                transition
              "
              >
                Get Started
              </button>
            </Link>

            <Link to={"/services"}>
              <button
                className="
                w-full sm:w-auto
                rounded-xl
                border border-white/20
                px-8 py-3
                font-medium
                hover:bg-white/10
                transition
              "
              >
                View Services
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* SCROLL CUE (hidden on small screens) */}
      <div
        className="
        absolute bottom-10 left-1/2 -translate-x-1/2
        text-gray-400 text-sm
        hidden md:block
      "
      >
        Scroll ↓
      </div>
    </section>
  );
};

export default Hero;
