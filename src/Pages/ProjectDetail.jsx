import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import project1 from "../assets/Project1.png";
import ssproject1 from "../assets/Ss1-p-1.png";
import ssproject2 from "../assets/Ss2-p-1.png";
import ssproject3 from "../assets/Ss3-p-1.png";
import ssproject4 from "../assets/Ss4-p-1.png";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";

const images = [ssproject4, ssproject2, ssproject3, ssproject1];

export default function ProjectDetailPage() {
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
    { name: "HTML", icon: <FaHtml5 className="text-4xl text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-4xl text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-4xl text-yellow-400" /> },
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
            <h1 className="text-4xl font-bold mb-1">Pergi.Com</h1>
            <p className="text-sm text-gray-400">(Static Website)</p>
          </motion.div>

          <motion.div variants={boxVariants}>
            <p className="font-semibold text-xl mb-1">Description</p>
            <p className="text-gray-300 leading-relaxed">
              Website ini bertema tiket. User dapat membeli tiket dan membayar secara virtual. Dibuat menggunakan <span className="text-[#00FFD1] font-medium">HTML, CSS, dan JavaScript</span>.
            </p>
          </motion.div>

          <motion.div variants={boxVariants}>
            <p className="font-semibold">Published On:</p>
            <div className="flex gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-[18px] fill-[#b4b4b4]" viewBox="0 0 24 24">
                <path d="M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z"></path>
                <path d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM19 8l.001 12H5V8h14z"></path>
              </svg>
              <p className="text-gray-300">5 Desember 2023</p>
            </div>
          </motion.div>

          <motion.button
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={4}
            className="relative w-51 px-8 py-3 bg-black text-white font-semibold rounded-lg border-2 border-emerald-400 hover:border-lime-300 hover:shadow-[0_0_20px_10px_rgba(52,211,153,0.6)] active:shadow-[0_0_10px_5px_rgba(132,204,22,0.4)] bg-gradient-to-r from-emerald-400/20 to-lime-400/20"
          >
            <a href="https://hilalsyah.github.io/Pergi.Com/" target="_blank" rel="noopener noreferrer">
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

// const [index, setIndex] = useState(0);
// const carouselRef = useRef(null);

// // Update index saat scroll untuk sinkronisasi pagination
// useEffect(() => {
//   const scrollEl = carouselRef.current;
//   if (!scrollEl) return;

//   const handleScroll = () => {
//     const scrollLeft = scrollEl.scrollLeft;
//     const itemWidth = scrollEl.firstChild.children[0].offsetWidth + 20; // width + gap
//     const newIndex = Math.round(scrollLeft / itemWidth);
//     setIndex(newIndex);
//   };

//   scrollEl.addEventListener("scroll", handleScroll);
//   return () => scrollEl.removeEventListener("scroll", handleScroll);
// }, []);

// // Mouse drag scroll
// useEffect(() => {
//   const scrollEl = carouselRef.current;
//   if (!scrollEl) return;

//   let isDown = false;
//   let startX;
//   let scrollLeft;

//   const startDragging = (e) => {
//     isDown = true;
//     scrollEl.classList.add("cursor-grabbing");
//     startX = e.pageX - scrollEl.offsetLeft;
//     scrollLeft = scrollEl.scrollLeft;
//   };

//   const stopDragging = () => {
//     isDown = false;
//     scrollEl.classList.remove("cursor-grabbing");
//   };

//   const drag = (e) => {
//     if (!isDown) return;
//     e.preventDefault();
//     const x = e.pageX - scrollEl.offsetLeft;
//     const walk = (x - startX) * 1.5;
//     scrollEl.scrollLeft = scrollLeft - walk;
//   };

//   scrollEl.addEventListener("mousedown", startDragging);
//   scrollEl.addEventListener("mouseleave", stopDragging);
//   scrollEl.addEventListener("mouseup", stopDragging);
//   scrollEl.addEventListener("mousemove", drag);

//   return () => {
//     scrollEl.removeEventListener("mousedown", startDragging);
//     scrollEl.removeEventListener("mouseleave", stopDragging);
//     scrollEl.removeEventListener("mouseup", stopDragging);
//     scrollEl.removeEventListener("mousemove", drag);
//   };
// }, []);

{
  /* <div className="w-full rounded-2xl flex justify-center items-center bg-white/10 backdrop-blur-md border border-white/20 shadow-lg mt-10 py-6 px-3 md:px-10">
  <div ref={carouselRef} className="w-full overflow-x-auto overflow-y-hidden scroll-smooth scrollbar-hide cursor-grab select-none">
    <div className="flex gap-5 w-max snap-x snap-mandatory">
      {images.map((imgSrc, idx) => (
        <img
          key={idx}
          src={imgSrc}
          alt={`Project image ${idx + 1}`}
          className="w-[80vw] md:w-[400px] lg:w-[450px] h-[250px] object-cover rounded-xl shadow-lg snap-center shrink-0 transition-transform duration-300 hover:scale-105"
          draggable={false}
        />
      ))}
    </div>
  </div>
</div> */
}

{
  /* Pagination
<div className="flex justify-center mt-5 gap-3">
  {images.map((_, idx) => (
    <button
      key={idx}
      onClick={() => {
        setIndex(idx);
        const scrollEl = carouselRef.current;
        if (scrollEl) {
          const itemWidth = scrollEl.firstChild.children[0].offsetWidth + 20;
          scrollEl.scrollTo({
            left: itemWidth * idx,
            behavior: "smooth",
          });
        }
      }}
      className={`h-3 rounded-full transition-all duration-300 ${idx === index ? "bg-white w-6" : "bg-gray-500 w-3"}`}
      aria-label={`Go to slide ${idx + 1}`}
    />
  ))}
</div> */
}
