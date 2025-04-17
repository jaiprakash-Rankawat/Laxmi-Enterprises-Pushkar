import React from "react";
import { motion } from "framer-motion";

const ServicesHeader = () => {
  return (
    <div className="text-center py-10 md:py-16 bg-gradient-to-r from-navy/5 to-lightblue/5 rounded-xl mb-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-navy mb-4">
          Our Professional Services
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto px-4">
          Connect with our network of skilled painters and plumbers to help with
          your home improvement projects. All professionals are vetted for
          quality workmanship and reliability.
        </p>
      </motion.div>
      <div className="flex justify-center gap-4 mt-8">
        <div className="px-4 py-2 bg-white/80 shadow-sm rounded-lg">
          <span className="font-semibold text-navy">Trusted Professionals</span>
        </div>
        <div className="px-4 py-2 bg-white/80 shadow-sm rounded-lg">
          <span className="font-semibold text-navy">Quality Workmanship</span>
        </div>
        <div className="px-4 py-2 bg-white/80 shadow-sm rounded-lg">
          <span className="font-semibold text-navy">Timely Service</span>
        </div>
      </div>
    </div>
  );
};

export default ServicesHeader;
