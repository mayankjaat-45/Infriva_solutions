import { motion } from "framer-motion";
import { servicesData } from "../Data/servicesData";
import ServiceCard from "../Components/Layout/ServiceCard";
import ScrollFloat from "@/Components/ScrollFloat";

const Services = () => {
  return (
    <section className="bg-[#0b1020] text-white min-h-screen pt-32 pb-32">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl text-purple-500  font-extrabold"
        >
          Our Services
        </motion.h1>

        <p className="mt-6 text-gray-200/80 max-w-2xl mx-auto">
          We help businesses grow through thoughtful design, powerful
          technology, and smart marketing strategies.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 mt-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, i) => (
            <ServiceCard key={i} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
