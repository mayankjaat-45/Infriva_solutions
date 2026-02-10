import { Link } from "react-router-dom";
import Logo from "/images/logo.webp";

const Footer = () => {
  return (
    <footer className="bg-[#0b1020] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div>
            <img src={Logo} className="text-white w-30 md:w-xs h-15" />
            {/* <h3 className="text-xl font-bold text-white">
               DigiPLY Media
            </h3> */}
            <p className="mt-4 text-gray-300 text-sm leading-relaxed">
              We help brands grow digitally through design, development, and
              marketing.
            </p>
          </div>

          {/* Links */}
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
                <Link to="/services/paid-advertising">Paid advertising</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <Link to="/about">About</Link>

              <Link to="/contact">Contact</Link>

              <Link to="/services">Services</Link>
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
              className="inline-block text-white bg-purple-600 hover:bg-purple-500 px-6 py-3 rounded-xl shadow-lg shadow-indigo-600/30"
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
          <span className="flex flex-col">
            Built with ❤️ using React
            <p className="text-[10px] ml-21"> -Mayank Chaudhary</p>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
