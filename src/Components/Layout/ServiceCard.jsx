import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ServiceCard = ({ service }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.2 }}
      
      className="
        bg-white/5
        border border-white/10
        rounded-3xl
        overflow-hidden
        backdrop-blur
        hover:border-indigo-400/40
      "
    >
      {/* Image */}
      <div className="h-52 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-center object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 text-center">
        <h1 className="text-xl md:text-2xl font-semibold text-white">
          {service.title}
        </h1>

        <p className="mt-3 text-gray-200/80 text-md">{service.short}</p>

        <Link
          to={`/services/${service.slug}`}
          className="
            inline-block
            mt-6
            text-purple-400
            font-medium
            hover:text-purple-300
          "
        >
          Learn more →
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
