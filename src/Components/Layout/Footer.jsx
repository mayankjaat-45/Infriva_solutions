import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";
import Logo from "/images/logo.webp";

const Footer = () => {
  return (
    <footer className="bg-[#0b1020] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div>
            <img src={Logo} className="w-32 h-14 object-contain" />
            <p className="mt-4 text-gray-300 text-sm leading-relaxed">
              We help brands grow digitally through design, development, and
              marketing.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.instagram.com/infrivasolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 text-xl transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 text-xl transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61588393472210"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 text-xl transition"
              >
                <FaFacebook />
              </a>

              <a
                href="https://wa.me/919625939827"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-500 text-xl transition"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>
                <Link to="/services/web-development">Web Development</Link>
              </li>
              <li>
                <Link to="/services/ui-ux-design">UI/UX Design</Link>
              </li>
              <li>
                <Link to="/services/paid-advertising">Paid Advertising</Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Let’s Work Together
            </h4>
            <p className="text-gray-300 text-sm mb-6">
              Ready to start your next project?
            </p>
            <Link
              to="/contact"
              className="inline-block text-white bg-purple-600 hover:bg-purple-500 px-6 py-3 rounded-xl shadow-lg shadow-indigo-600/30 transition"
            >
              Start a Project
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-md text-gray-400">
          <span>
            © {new Date().getFullYear()} Infriva Solutions. All rights reserved.
          </span>
          <span className="text-center md:text-right">
            Built with ❤️ using React
            <p className="text-[10px]">- Mayank Chaudhary</p>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;