import React from "react";
import Nav from "../Components/Nav";
import { Typewriter } from "react-simple-typewriter";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import profileImg from "../assets/foto.JPG";
import { useNavigate } from "react-router-dom";
import SkillsPage from "./Skills";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaReact,
  FaGitAlt,
  FaLaravel,
  FaNodeJs,
  FaFigma,
  FaJava,
  FaPhp,
  FaPython,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaCode,
  FaPalette,
  FaServer,
  FaRocket,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaVuejs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiMysql, SiMongodb, SiTypescript, SiFlutter, SiDart, SiSass, SiFirebase, SiKotlin, SiGo, SiExpress } from "react-icons/si";
import project1 from "../assets/Project1.png";
import project2 from "../assets/Projek2.png";
import project3 from "../assets/Ld1.png";
import Footer from "../Components/Footer";
import { Navigate, Route } from "react-router-dom";

const fadeInUp = {
  hidden: { opacity: 0, y: -30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

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

const boxVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.4, ease: "easeOut" },
  }),
};

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
  { name: "Firebase", icon: <SiFirebase className="text-4xl text-yellow-500" /> },
  { name: "Vue", icon: <FaVuejs className="text-4xl text-green-400" /> },
  { name: "Kotlin", icon: <SiKotlin className="text-4xl text-purple-500" /> },
  { name: "Golang", icon: <SiGo className="text-4xl text-blue-400" /> },
  { name: "Express.js", icon: <SiExpress className="text-4xl text-white" /> },
];

const containerVariants2 = {
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

// Ikon tech stack
const iconSize = "1.2em";
const projects = [
  {
    title: "Pergi.Com (Static Site)",
    subtitle: "Website Desain Pemesanan Tiket Transportasi",
    description: "Website pemesanan tiket transportasi yang di bangun dengan tech HTML,CSS dan JS Tanpa Backend ",
    tech: [
      <FaHtml5 key="html" title="HTML5" style={{ color: "#e34c26" }} size={iconSize} />,
      <FaCss3Alt key="css" title="CSS3" style={{ color: "#264de4" }} size={iconSize} />,
      <FaJs key="js" title="JavaScript" style={{ color: "#f7df1e" }} size={iconSize} />,
    ],
    github: "https://github.com/username/portfolio",
    demo: "https://your-portfolio.vercel.app",
    image: project1,
    link: "/ProjectDetail",
  },
  {
    title: "StudySpace (Frontend UI)",
    subtitle: "Informasi & Data Kelas",
    description: "Website informasi dan data kelas yang di bangun dengan tech HTML,CSS dan JS",
    tech: [
      <FaHtml5 key="html" title="HTML5" style={{ color: "#e34c26" }} size={iconSize} />,
      <FaCss3Alt key="css" title="CSS3" style={{ color: "#264de4" }} size={iconSize} />,
      <FaJs key="js" title="JavaScript" style={{ color: "#f7df1e" }} size={iconSize} />,
    ],
    github: "https://github.com/username/ecommerce-app",
    demo: "https://ecommerce.vercel.app",
    image: project2,
    link: "/ProjectDetail2",
  },
  {
    title: "WorkEase (Frontend UI)",
    subtitle: "Landing Page Suasana Kerja Nyaman dan Produktif",
    description: "Website landing page untuk promosi yang di bangun dengan menggunakan tech HTML,CSS dan Bootstrap",
    tech: [
      <FaHtml5 key="html" title="HTML5" style={{ color: "#e34c26" }} size={iconSize} />,
      <FaCss3Alt key="css" title="CSS3" style={{ color: "#264de4" }} size={iconSize} />,
      <FaBootstrap key="bootstrap" title="Bootstrap" style={{ color: "#563d7c" }} size={iconSize} />,
    ],
    github: "https://github.com/username/gym-app",
    demo: "https://gym-checkin.vercel.app",
    image: project3,
    link: "/ProjectDetail3",
  },
];

const blogs = [
  {
    title: "Mengapa Tailwind CSS Jadi Andalan Developer Modern?",
    desc: "Pelajari bagaimana utility-first CSS framework ini mempercepat workflow dan menghasilkan UI yang konsisten.",
    date: "Mei 2025",
    link: "#",
    tag: "Frontend",
    img: "https://source.unsplash.com/600x400/?code,tailwind",
  },
  {
    title: "Membangun API Aman dengan Laravel Sanctum",
    desc: "Langkah demi langkah membangun backend API yang aman dan fleksibel menggunakan Laravel & Sanctum.",
    date: "April 2025",
    link: "#",
    tag: "Backend",
    img: "https://source.unsplash.com/600x400/?code,backend",
  },
  {
    title: "Tips Mendesain UI/UX yang Disukai Pengguna",
    desc: "Kuasai prinsip desain UI/UX agar produkmu tidak hanya indah, tapi juga efektif dan mudah digunakan.",
    date: "Maret 2025",
    link: "#",
    tag: "Design",
    img: "https://source.unsplash.com/600x400/?ui,ux",
  },
];

const containerVariants3 = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemLeftVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const itemRightVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Home = () => {
  return (
    <>
      <Nav />
      <section className="min-h-screen flex flex-col items-center justify-center bg-[#0d0c1d] text-white px-6 text-center font-grotesk">
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={1} className="max-w-2xl">
          <p className="text-[#00F5D4] mb-2 font-Lexend text-5xl font-semibold">Welcome To My Portfolio</p>
        </motion.div>

        <motion.p variants={fadeInUp} initial="hidden" animate="visible" custom={2} className="text-[#FFE44C] text-lg mb-2 tracking-wider font-medium text-[30px] font-Space-Grotesk">
          Hi, my name is
        </motion.p>

        <motion.h1 variants={fadeInUp} initial="hidden" animate="visible" custom={3} className="text-4xl md:text-6xl font-bold mb-3 font-lexend text-white">
          Hilal Syah
        </motion.h1>

        <motion.h2 variants={fadeInUp} initial="hidden" animate="visible" custom={4} className="text-2xl md:text-4xl font-medium text-[#E0E0E0] mb-6">
          <Typewriter words={["Fullstack Developer", "UI/UX Designer", "App Developer"]} loop={true} cursor cursorStyle="|" typeSpeed={70} deleteSpeed={50} delaySpeed={2000} />
        </motion.h2>

        <motion.p variants={fadeInUp} initial="hidden" animate="visible" custom={5} className="max-w-xl text-[#94A3B8] mb-8 font-grotesk">
          I create sleek and responsive web interfaces using React, Tailwind CSS, and Figma — blending pixel-perfect UI with functional code.
        </motion.p>
        <div className="flex flex-col items-center justify-center gap-10 md:flex-row">
          <motion.button
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={4}
            className="relative px-8 py-3 bg-black text-white font-semibold rounded-lg border-2 border-purple-500 hover:border-purple-400 transition-all duration-300 hover:shadow-[0_0_20px_10px_rgba(168,85,247,0.6)] active:scale-95 active:shadow-[0_0_10px_5px_rgba(168,85,247,0.4)] group"
          >
            <a href="#about">
              <span className="flex items-center space-x-2">
                <span>View My Work</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-purple-500/20 to-indigo-500/20"></span>
            </a>
          </motion.button>

          <motion.button
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={4}
            className="relative px-8 py-3 bg-black text-white font-semibold rounded-lg border-2 border-[#00F5D4] hover:border-[#00F5D4] transition-all duration-300 hover:shadow-[0_0_20px_10px_rgba(0,245,212,0.6)] active:scale-95 active:shadow-[0_0_10px_5px_rgba(0,245,212,0.4)] group"
          >
            <a href="https://drive.google.com/file/d/1DbnyEbptSojNtvMrPQ7ydG7YlKBqfvD0/view?usp=sharing">
              <span className="flex items-center space-x-2">
                <span>Donwload CV</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-[#00F5D4]/20 to-[#00F5D4]/20"></span>
            </a>
          </motion.button>
        </div>
      </section>

      <section id="about" className="min-h-screen bg-[#0d0c1d] text-white px-6 py-20 font-grotesk flex items-center justify-center w-full">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="max-w-5xl w-full grid md:grid-cols-2 gap-15 items-center">
          {/* Foto atau Ilustrasi */}
          <motion.div variants={itemVariants} className="relative group" whileHover={{ scale: 1, transition: { duration: 0.3 } }}>
            <div className="w-full h-full bg-gradient-to-br  p-1 rounded-xl">
              <img src={profileImg} alt="About me" className="rounded-xl object-cover w-full h-full" />
            </div>
          </motion.div>

          {/* Konten */}
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl font-bold text-[#00F5D4] mb-4">About Me</h2>
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
          </motion.div>
        </motion.div>
      </section>

      <section id="projects" className="min-h-screen bg-[#0d0c1d] text-white px-4 py-20 pb-32 font-grotesk">
        <div className="max-w-6xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl font-bold text-[#00F5D4] mb-12 text-center flex items-center justify-center gap-3">
            <FaRocket className="text-[#00F5D4]" />
            Recent Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <a href={project.link}>
                <motion.div
                  key={index}
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  custom={index}
                  className="group bg-[#1e1e2e] rounded-xl overflow-hidden shadow-lg transition-all duration-400 transform hover:scale-[1.01] hover:shadow-[0_0_20px_5px_rgba(0,245,212,0.6)] w-full h-full"
                >
                  <div className="relative w-full h-44 overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition duration-300 group-hover:blur-[1px]" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 gap-2.5">
                      <span className="text-white text-lg font-medium tracking-wide">View Project</span>
                      <FaArrowRight />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-white group-hover:text-[#00F5D4] mb-1 transition duration-300 group-hover:underline decoration-2">{project.title}</h3>
                    <h3 className="text-sm text-[#CBD5E1] mb-2 italic ">{project.subtitle}</h3>
                    <p className="text-sm text-[#CBD5E1] mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.tech.map((icon, i) => (
                        <span key={i} className="text-[#7C3AED] text-lg">
                          {icon}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </a>
            ))}
          </div>

          {/* CTA bawah */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="text-center mt-16 text-[#CBD5E1] text-sm italic">
            More exciting projects coming soon...
          </motion.div>
        </div>
      </section>

      <section id="skills" className="min-h-screen bg-[#0d0c1d] text-white px-6 py-20 font-grotesk">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#00F5D4] mb-12">My Skills</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={boxVariants}
                className="bg-[#1e1e2e] hover:shadow-[0_0_15px_#00F5D4] border border-[#2e2e3e] rounded-xl py-6 px-4 flex flex-col items-center justify-center transition-all duration-300 cursor-pointer"
              >
                {skill.icon}
                <p className="mt-3 text-sm font-medium">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen bg-[#0d0c1d] text-white px-6 py-20 flex items-center justify-center font-grotesk">
        <motion.div className="max-w-5xl w-full grid md:grid-cols-2 gap-12" variants={containerVariants3} initial="hidden" animate="visible">
          {/* Info Kontak */}
          <motion.div variants={itemLeftVariants}>
            <h2 className="text-4xl font-bold text-[#00F5D4] mb-6">Get In Touch</h2>
            <p className="text-[#CBD5E1] mb-8 text-lg leading-relaxed">Let’s connect! Whether you have a question, a project in mind, or just want to say hi — my inbox is always open.</p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-xl text-purple-400" />
                <a href="mailto:hilalsyah@example.com" className="hover:underline text-[#94A3B8]">
                  hilalsyah08@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-xl text-cyan-400" />
                <a href="tel:+6281234567890" className="hover:underline text-[#94A3B8]">
                  +62 851 5071 1606
                </a>
              </div>
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-xl text-yellow-300" />
                <p className="text-[#94A3B8]">Mejobo, Kudus</p>
              </div>
            </div>
          </motion.div>

          {/* Formulir Kontak */}
          <motion.form
            variants={itemRightVariants}
            className="bg-[#1e1e2e] p-8 rounded-xl shadow-lg space-y-6"
            onSubmit={(e) => {
              Navigate("/home");
            }}
          >
            <div>
              <label htmlFor="name" className="block text-sm mb-1 text-[#CBD5E1]">
                Name
              </label>
              <input type="text" id="name" placeholder="Your Name" className="w-full px-4 py-2 rounded-lg bg-[#0f172a] text-white border border-[#334155] focus:outline-none focus:ring-2 focus:ring-[#00F5D4]" required />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm mb-1 text-[#CBD5E1]">
                Email
              </label>
              <input type="email" id="email" placeholder="you@example.com" className="w-full px-4 py-2 rounded-lg bg-[#0f172a] text-white border border-[#334155] focus:outline-none focus:ring-2 focus:ring-[#00F5D4]" required />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm mb-1 text-[#CBD5E1]">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Type your message here..."
                className="w-full px-4 py-2 rounded-lg bg-[#0f172a] text-white border border-[#334155] focus:outline-none focus:ring-2 focus:ring-[#00F5D4]"
                required
              ></textarea>
            </div>
            <button type="submit" className="w-full py-2 rounded-lg bg-[#00F5D4] text-[#0f172a] font-semibold hover:bg-[#0ffdd1] transition">
              Send Message
            </button>
          </motion.form>
        </motion.div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
