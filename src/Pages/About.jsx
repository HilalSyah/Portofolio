import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaReact, FaGitAlt, FaLaravel, FaNodeJs, FaFigma, FaJava, FaPhp, FaPython, FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaCode, FaPalette, FaServer, FaRocket } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiMysql, SiMongodb, SiTypescript, SiFlutter, SiDart, SiSass } from "react-icons/si";
import Profile from "../assets/Hilal.jpg";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-4xl text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-4xl text-blue-500" /> },
  { name: "Sass", icon: <SiSass className="text-4xl text-pink-400" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-4xl text-purple-600" /> },
  { name: "JavaScript", icon: <FaJs className="text-4xl text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-4xl text-blue-400" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-4xl text-cyan-400" /> },
  { name: "React", icon: <FaReact className="text-4xl text-cyan-300" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-4xl text-white" /> },
  { name: "Flutter", icon: <SiFlutter className="text-4xl text-sky-400" /> },
  { name: "Dart", icon: <SiDart className="text-4xl text-sky-600" /> },
  { name: "Github", icon: <FaGithub className="text-4xl text-gray-700" /> },
  { name: "Laravel", icon: <FaLaravel className="text-4xl text-red-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-4xl text-green-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-4xl text-green-400" /> },
  { name: "SQL", icon: <SiMysql className="text-4xl text-blue-300" /> },
  { name: "Figma", icon: <FaFigma className="text-4xl text-pink-500" /> },
  { name: "Java", icon: <FaJava className="text-4xl text-red-600" /> },
  { name: "PHP", icon: <FaPhp className="text-4xl text-purple-600" /> },
  { name: "Python", icon: <FaPython className="text-4xl text-blue-600" /> },
];

const journey = [
  { year: "2014", event: "Started learning programming" },
  { year: "2021", event: "Built first React app" },
  { year: "2022", event: "Joined internship at Tech Company" },
  { year: "2023", event: "Became Fullstack Developer" },
];

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
      ease: "easeOut",
      duration: 0.8,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { ease: "easeOut", duration: 0.6 },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeInBlur = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(8px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const boxVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.4, ease: "easeOut" },
  }),
};

const About = () => {
  return (
    <>
      <Nav />
      <section id="about" className="min-h-screen bg-[#0d0c1d] text-white px-6 py-20 font-grotesk flex items-center justify-center w-full flex-col">
        <h2 className="text-4xl font-bold text-[#00F5D4] pt-10">About Me</h2>
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="max-w-5xl w-full grid md:grid-cols-2 gap-15 pt-10">
          {/* Foto atau Ilustrasi */}
          <motion.div variants={fadeInBlur} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="relative group" whileHover={{ scale: 1, transition: { duration: 0.3 } }}>
            <div className="w-full h-full bg-gradient-to-br  p-1 rounded-xl">
              <img src={Profile} alt="About me" className="rounded-xl object-cover lg:w-[500px] h-[430px]" />
              {/* Journey - di bawah foto */}
              <motion.div
                className="mt-30 bg-[#1e1e2e] rounded-xl p-6 w-full shadow-lg shadow-[#00F5D4]/20"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: "easeOut" },
                  },
                }}
              >
                <h3 className="text-2xl font-bold text-white mb-6 border-b border-[#00F5D4]/20 pb-2">Journey</h3>
                <ul className="relative ml-5 pl-4 border-l-2 border-[#00F5D4]/20 space-y-10">
                  {/* Item 1 */}
                  <motion.li className="relative transition-all duration-300" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0 }} viewport={{ once: true }}>
                    <div className="group relative">
                      <span className="absolute -left-[24.5px] top-1 w-4 h-4 bg-[#00F5D4] rounded-full ring-2 ring-[#1e1e2e] transition-all duration-300 group-hover:shadow-[0_0_10px_#00F5D4] group-hover:scale-125" />
                      <div className="ml-2 bg-[#0d0c1d] p-5 rounded-lg transition-all duration-300 group-hover:bg-[#12101f]">
                        <p className="text-sm font-semibold text-[#00F5D4] mb-1 transition-colors duration-300">2014-2020</p>
                        <p className="text-[#CBD5E1] group-hover:text-white transition-colors duration-300 text-[15px] leading-relaxed">SDIT AL KAUTSAR</p>
                      </div>
                    </div>
                  </motion.li>

                  {/* Item 2 */}
                  <motion.li className="relative transition-all duration-300" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }} viewport={{ once: true }}>
                    <div className="group relative">
                      <span className="absolute -left-[24.5px] top-1 w-4 h-4 bg-[#00F5D4] rounded-full ring-2 ring-[#1e1e2e] transition-all duration-300 group-hover:shadow-[0_0_10px_#00F5D4] group-hover:scale-125" />
                      <div className="ml-2 bg-[#0d0c1d] p-5 rounded-lg transition-all duration-300 group-hover:bg-[#12101f]">
                        <p className="text-sm font-semibold text-[#00F5D4] mb-1 transition-colors duration-300">2020-2023</p>
                        <p className="text-[#CBD5E1] group-hover:text-white transition-colors duration-300 text-[15px] leading-relaxed">MTSN 2 KUDUS</p>
                      </div>
                    </div>
                  </motion.li>

                  {/* Item 3 */}
                  <motion.li className="relative transition-all duration-300" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }}>
                    <div className="group relative">
                      <span className="absolute -left-[24.5px] top-1 w-4 h-4 bg-[#00F5D4] rounded-full ring-2 ring-[#1e1e2e] transition-all duration-300 group-hover:shadow-[0_0_10px_#00F5D4] group-hover:scale-125" />
                      <div className="ml-2 bg-[#0d0c1d] p-5 rounded-lg transition-all duration-300 group-hover:bg-[#12101f]">
                        <p className="text-sm font-semibold text-[#00F5D4] mb-1 transition-colors duration-300">2023-2026</p>
                        <p className="text-[#CBD5E1] group-hover:text-white transition-colors duration-300 text-[15px] leading-relaxed">SMK RADEN UMAR SAID</p>
                      </div>
                    </div>
                  </motion.li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
          {/* Konten */}
          <motion.div variants={itemVariants}>
            <p className="text-[#CBD5E1] mb-6 text-lg leading-relaxed">
              I'm <span className="text-[#FFE44C] font-semibold">Hilal Syah</span>, a passionate and versatile <span className="text-purple-400 font-semibold">Fullstack Developer</span> who loves building beautiful, scalable, and functional
              websites. From intuitive front-end designs to powerful back-end systems, I blend creativity and logic to deliver exceptional web experiences.
            </p>
            <div className="w-full">
              <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 w-[4  0rem]">
                <motion.div variants={itemVariants} whileHover={{ scale: 1.01, boxShadow: "0 0 20px 5px rgba(124,58,237,0.6)" }} className="bg-[#1e1e2e] p-5 rounded-lg cursor-pointer w-full">
                  <FaPalette className="text-3xl text-purple-400 mb-3" />
                  <h3 className="text-xl font-semibold mb-1">UI/UX Design</h3>
                  <p className="text-sm text-[#94A3B8]">Clean, modern, and user-centric design using Figma & Tailwind CSS.</p>
                </motion.div>

                <motion.div variants={itemVariants} whileHover={{ scale: 1.01, boxShadow: "0 0 20px 5px rgba(0,245,212,0.6)" }} className="bg-[#1e1e2e] p-5 rounded-lg cursor-pointer w-full">
                  <FaCode className="text-3xl text-cyan-400 mb-3" />
                  <h3 className="text-xl font-semibold mb-1">Frontend Dev</h3>
                  <p className="text-sm text-[#94A3B8]">Building fast & interactive UIs using React.js, Next.js, Tailwind CSS.</p>
                </motion.div>

                <motion.div variants={itemVariants} whileHover={{ scale: 1.01, boxShadow: "0 0 20px 5px rgba(255,228,76,0.6)" }} className="bg-[#1e1e2e] p-5 rounded-lg cursor-pointer w-full">
                  <FaServer className="text-3xl text-[#FFE44C] mb-3" />
                  <h3 className="text-xl font-semibold mb-1">Backend Dev</h3>
                  <p className="text-sm text-[#94A3B8]">API & database with Laravel, Node.js, and MongoDB/MySQL.</p>
                </motion.div>
              </motion.div>
            </div>

            {/* Tech Stack */}
            <div className="mt-30">
              <h4 className="text-lg font-semibold mb-2">Tech Stack:</h4>
              <div className="flex flex-wrap gap-4">
                {skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={boxVariants}
                    whileHover={{ scale: 1.01, boxShadow: "0 0 20px 5px rgba(0,245,212,0.6)" }}
                    className="flex items-center gap-2 bg-[#1e1e2e] px-4 py-2 rounded-lg"
                  >
                    {skill.icon}
                    <span className="text-[#00F5D4] font-semibold">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
      <Footer />
    </>
  );
};

export default About;
