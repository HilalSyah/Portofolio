import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const CertificateCard = ({ title, image, link, organization, year }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#1c1b2f] border border-purple-600/40 rounded-2xl shadow-lg hover:shadow-purple-500/40 p-4 transition-all"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-xl mb-4" />
      <div className="text-gray-200">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm text-gray-400">
          {organization} • {year}
        </p>
        {link && (
          <a href={link} target="_blank" rel="noreferrer" className="text-cyan-400 text-sm inline-flex items-center mt-2 hover:underline">
            View Certificate <FaExternalLinkAlt className="ml-1" />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default CertificateCard;
