import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import project1 from "../assets/project4.png";
import ssproject1 from "../assets/Ss1-p-4.png";
import ssproject2 from "../assets/Ss2-p-4.png";
import ssproject3 from "../assets/Ss3-p-4.png";
import ssproject4 from "../assets/Ss4-p-4.png";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

const images = [ssproject4, ssproject1, ssproject2, ssproject3];

export default function ProjectDetailPage4() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0, y: -30 }, // dari atas (-30)
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: custom * 0.3,
      },
    }),
  };

  const boxVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: -10 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  const skills = [
    { name: "Next.js", icon: <SiNextdotjs className="text-4xl text-white" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-4xl text-cyan-400" /> },
  ];

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="min-h-screen bg-[#0d0c1d] text-white font-grotesk px-6 md:px-16 lg:px-32 py-10">
      {/* Back Button */}
      <motion.div className="flex items-center gap-3 cursor-pointer hover:text-[#FFD700] transition-all duration-300" whileHover={{ scale: 1.05 }} onClick={() => navigate(-1)}>
        <div className="border-2 border-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
          <FaArrowLeft />
        </div>
        <p className="text-lg font-medium">Back</p>
      </motion.div>

      {/* Project Info */}
      <div className="mt-10 flex flex-col lg:flex-row gap-10">
        {/* Gambar utama */}
        <motion.img
          src={project1}
          alt="Project"
          key={1}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={1}
          className="w-full lg:w-[50%] rounded-2xl shadow-xl cursor-pointer hover:scale-105 transition-transform duration-300 group bg-[#1e1e2e] overflow-hidden transform hover:scale-[1.01]"
          onClick={() => setSelectedImage(project1)}
        />

        {/* Deskripsi */}
        <motion.div
          className="flex-1 flex flex-col gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.div variants={boxVariants}>
            <h1 className="text-4xl font-bold mb-1">Tiket Indo</h1>
            <p className="text-sm text-gray-400">(Frontend UI)</p>
          </motion.div>

          <motion.div variants={boxVariants}>
            <p className="font-semibold text-xl mb-1">Description</p>
            <p className="text-gray-300 leading-relaxed">
              Tiket Indo adalah website pemesanan tiket kereta, kapal, bus, pesawat, dan wisata. Dibangun dengan Next.js dan Tailwind CSS, terhubung ke backend manual dan payment gateway. Tampilan masih dalam pengembangan agar sepenuhnya
              responsif. <span className="text-[#00FFD1] font-medium">Next.Js, dan Tailwind</span>.
            </p>
          </motion.div>

          <motion.div variants={boxVariants}>
            <p className="font-semibold">Published On:</p>
            <div className="flex gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-[18px] fill-[#b4b4b4]" viewBox="0 0 24 24">
                <path d="M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z"></path>
                <path d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM19 8l.001 12H5V8h14z"></path>
              </svg>
              <p className="text-gray-300">16 Mei 2022</p>
            </div>
          </motion.div>

          <motion.button
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={4}
            className="relative w-51 px-8 py-3 bg-black text-white font-semibold rounded-lg border-2 border-emerald-400 hover:border-lime-300 hover:shadow-[0_0_20px_10px_rgba(52,211,153,0.6)] active:shadow-[0_0_10px_5px_rgba(132,204,22,0.4)] bg-gradient-to-r from-emerald-400/20 to-lime-400/20"
          >
            <a href="https://tiket-indo.vercel.app/" target="_blank" rel="noopener noreferrer">
              <span className="flex items-center space-x-2">
                <span>View Live Project</span>
              </span>
              <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-purple-500/20 to-indigo-500/20"></span>
            </a>
          </motion.button>
        </motion.div>
      </div>

      {/* Galeri Tambahan */}
      <div className="mt-16">
        <motion.p
          className="text-2xl font-bold mb-6"
          initial={{ opacity: 0, y: -60, scale: 0.85 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1.2,
            ease: [0.6, -0.05, 0.01, 0.99], // easing yang smooth dan natural
          }}
          viewport={{ once: true }}
        >
          Other Screenshots
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <motion.img
              key={index}
              src={img}
              alt={`Screenshot ${index + 1}`}
              initial={{ opacity: 0, y: -30 }} // muncul dari atas
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2, // muncul satu-satu
                ease: "easeOut",
              }}
              className="rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
      </div>

      {/* Tech Stack */}
      <div className="mt-16">
        <motion.h4 className="text-lg font-semibold mb-2" initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeOut" }} viewport={{ once: true }}>
          Tech Stack:
        </motion.h4>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={boxVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px 5px rgba(0,245,212,0.6)" }}
              className="flex items-center gap-2 bg-[#1e1e2e] px-4 py-2 rounded-lg"
            >
              {skill.icon}
              <span className="text-[#00F5D4] font-semibold">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Full Image */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.button className="absolute top-10 right-10 text-white text-3xl hover:text-red-400 transition" onClick={() => setSelectedImage(null)} initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
              <IoCloseSharp />
            </motion.button>

            <motion.img
              src={selectedImage}
              alt="Full View"
              className="max-w-[70%] max-h-[70%] rounded-xl shadow-2xl"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
