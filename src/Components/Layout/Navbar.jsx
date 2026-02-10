import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "/images/logo.webp";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll on mobile menu
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <motion.header
        initial={false}
        animate={{
          backgroundColor: scrolled ? "rgba(5,7,12,0.85)" : "rgba(5,7,12,0)",
          backdropFilter: scrolled ? "blur(14px)" : "blur(0px)",
          boxShadow: scrolled ? "0 10px 40px rgba(0,0,0,0.45)" : "none",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full z-50 border-b border-white/5"
      >
        <div className="w-[90%] mx-auto px-2">
          <div className="h-20 flex items-center justify-between text-white drop-shadow-[0_1px_10px_rgba(0,0,0,0.6)]">
            {/* Logo */}
            <Link
              to="/"
              className="text-xl md:text-2xl font-bold flex gap-1 hover:opacity-90 transition"
            >
              {/* <span>Digi</span>
              <span className="text-indigo-400">PLY</span>
              <span>Media</span> */}
              <img src={Logo} className="text-white w-20 md:w-42 h-15" />
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-8 text-lg text-gray-300">
              {["services", "about", "contact"].map((path) => (
                <NavLink
                  key={path}
                  to={`/${path}`}
                  className={({ isActive }) =>
                    `transition hover:text-white hover:drop-shadow-[0_0_12px_rgba(99,102,241,0.8)]
                     ${isActive ? "text-white" : ""}`
                  }
                >
                  {path.charAt(0).toUpperCase() + path.slice(1)}
                </NavLink>
              ))}
            </nav>

            {/* Desktop CTA */}
            <Link
              to="/contact"
              className="hidden md:inline-flex bg-purple-500 px-5 py-2.5 rounded-xl
              hover:bg-purple-700 hover:shadow-[0_0_30px_rgba(99,102,241,0.6)]
              transition-all"
            >
              Start a Project
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden text-2xl"
            >
              ☰
            </button>
          </div>
        </div>
      </motion.header>

      {/* ===== MOBILE MENU ===== */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/60 z-40"
            />

            {/* Drawer */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="fixed right-0 top-0 h-full w-4/5 max-w-sm
              bg-[#05070c] z-50 p-6 shadow-2xl"
            >
              <div className="flex items-center justify-between text-white">
                <span className="text-lg font-semibold">Menu</span>
                <button onClick={() => setOpen(false)} className="text-2xl">
                  ✕
                </button>
              </div>

              <nav className="mt-12 flex flex-col gap-8 text-lg text-white">
                {["/", "/services", "/about", "/contact"].map((path, i) => (
                  <Link
                    key={i}
                    to={path}
                    onClick={() => setOpen(false)}
                    className="hover:text-indigo-400 transition"
                  >
                    {path === "/"
                      ? "Home"
                      : path.replace("/", "").charAt(0).toUpperCase() +
                        path.slice(2)}
                  </Link>
                ))}

                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-6 bg-purple-500 py-3 text-center rounded-xl
                  hover:bg-purple-700 transition"
                >
                  Start a Project
                </Link>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
