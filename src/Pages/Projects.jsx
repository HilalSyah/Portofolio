import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaGithub, FaExternalLinkAlt, FaRocket, FaArrowRight, FaReact } from "react-icons/fa";
import project1 from "../assets/Project1.png";
import project2 from "../assets/Projek2.png";
import project3 from "../assets/Ld1.png";
import project4 from "../assets/Project4.png";
import project5 from "../assets/Project5.png";
import project6 from "../assets/Project6.png";
import project7 from "../assets/Project7.png";
import Project8 from "../assets/Project8.png";
import Project9 from "../assets/Project9.png";
import Project10 from "../assets/Project10.png";
import Project11 from "../assets/Project11.png";
import Project12 from "../assets/Project12.png";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import ProjectDetailPage from "./ProjectDetail";
import { SiLaravel, SiNextdotjs, SiTailwindcss } from "react-icons/si";

// Variants animasi
const containerVariants = {
  hidden: { opacity: 0, y: -30 }, // dari atas (-30)
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      delay: custom * 0.2,
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
  {
    title: "Tiket Indo (Frontend UI)",
    subtitle: "Website Pemesanan Tiket Transportasi & Wisata Lengkap",
    description:
      "Tiket Indo adalah website pemesanan tiket kereta, kapal, bus, pesawat, dan wisata. Dibangun dengan Next.js dan Tailwind CSS, terhubung ke backend manual dan payment gateway. Tampilan masih dalam pengembangan agar sepenuhnya responsif.",
    tech: [<SiNextdotjs key="Next.Js" title="Next Js" style={{ color: "#ffff" }} size={iconSize} />, <SiTailwindcss key="Tailwind" title="Tailwind" style={{ color: "#22d3ee" }} size={iconSize} />],
    github: "https://github.com/username/tiket-indo",
    demo: "https://tiket-indo.vercel.app",
    image: project4,
    link: "/ProjectDetail4",
  },
  {
    title: "Disney Clone (Frontend UI)",
    subtitle: "Landing Page Film Populer dengan Nuansa Disney",
    description: "Landing page yang menampilkan daftar film populer menggunakan data dari TMDb API. Dibangun dengan React.js dan Tailwind CSS.",
    tech: [<FaReact key="react" title="React.js" style={{ color: "#61DBFB" }} size={iconSize} />, <SiTailwindcss key="tailwind" title="Tailwind CSS" style={{ color: "#38BDF8" }} size={iconSize} />],
    github: "https://github.com/username/disney-clone",
    demo: "https://disney-clone.vercel.app",
    image: project5,
    link: "/ProjectDetail5",
  },
  {
    title: "Kopi Alam Senja (Frontend UI)",
    subtitle: "Landing Page Pemesanan Kopi Bernuansa Alam",
    description: "Website statis yang menampilkan halaman pemesanan kopi bernuansa alam. Dibuat dengan HTML dan CSS tanpa backend.",
    tech: [
      <FaHtml5 key="html" title="HTML5" style={{ color: "#e34c26" }} size={iconSize} />,
      <FaCss3Alt key="css" title="CSS3" style={{ color: "#264de4" }} size={iconSize} />,
      <FaJs key="js" title="JavaScript" style={{ color: "#f7df1e" }} size={iconSize} />,
    ],
    image: project6,
    link: "/ProjectDetail6",
  },
  {
    title: "Aether Walk (Frontend UI)",
    subtitle: "Landing Page Toko Sepatu Nike Air Jordan",
    description: "Website statis untuk mempromosikan toko sepatu Aether Walk, menampilkan produk seperti Nike Air Jordan. Dibuat dengan HTML, CSS, dan JavaScript tanpa backend.",
    tech: [
      <FaHtml5 key="html" title="HTML5" style={{ color: "#e34c26" }} size={iconSize} />,
      <FaCss3Alt key="css" title="CSS3" style={{ color: "#264de4" }} size={iconSize} />,
      <FaJs key="js" title="JavaScript" style={{ color: "#f7df1e" }} size={iconSize} />,
    ],
    image: project7,
    link: "/ProjectDetail7",
  },
  {
    title: "Website Udangan Perhikahan (Frontend UI)",
    subtitle: "Landing Page Undangan Digital Pernikahan",
    description: "Website statis untuk undangan pernikahan digital yang menampilkan informasi acara, galeri foto, dan countdown hari pernikahan. Dibuat menggunakan HTML, CSS, dan JavaScript tanpa backend.",
    tech: [
      <FaHtml5 key="html" title="HTML5" style={{ color: "#e34c26" }} size={iconSize} />,
      <FaCss3Alt key="css" title="CSS3" style={{ color: "#264de4" }} size={iconSize} />,
      <FaJs key="js" title="JavaScript" style={{ color: "#f7df1e" }} size={iconSize} />,
    ],
    image: Project8,
    link: "/ProjectDetail8",
  },
  {
    title: "Admin Panel Surya Pratama Mart (Frontend UI)",
    subtitle: "Dashboard Pemantauan Absensi dan Penjualan Toko",
    description:
      "Website admin untuk Surya Pratama Mart yang memungkinkan pemilik toko memantau waktu masuk, istirahat, dan pulang karyawan. Dilengkapi dengan visualisasi grafik penjualan bulanan untuk menganalisis tren performa toko. Dibuat menggunakan React.js dan Tailwind CSS.",
    tech: [<FaReact key="react" title="React.js" style={{ color: "#61DBFB" }} size={iconSize} />, <SiTailwindcss key="tailwind" title="Tailwind CSS" style={{ color: "#38BDF8" }} size={iconSize} />],
    github: "https://github.com/username/surya-pratama-admin",
    demo: "https://surya-pratama-admin.vercel.app",
    image: Project9,
    link: "/ProjectDetail9",
  },
  {
    title: "Tiketing Dashboard Admin (Fullstack Laravel)",
    subtitle: "Dashboard Pengelolaan Tiket dan Booking",
    description: "Dashboard admin untuk mengelola tiket dan booking secara manual. Dibuat dengan Laravel, Filament, dan Tailwind CSS dengan tampilan modern dan responsif.",
    tech: [<SiLaravel key="laravel" title="Laravel" style={{ color: "#FF2D20" }} size={iconSize} />, <SiTailwindcss key="tailwind" title="Tailwind CSS" style={{ color: "#38BDF8" }} size={iconSize} />],
    github: "https://github.com/username/tiketing-dashboard-admin",
    demo: "https://tiketing-dashboard-admin.vercel.app",
    image: Project10,
    link: "/ProjectDetail10",
  },
  {
    title: "Dashboard Admin Data Siswa (Fullstack Laravel)",
    subtitle: "Dashboard Pengelolaan Data Siswa, Kelas & Jurusan",
    description: "Website dashboard admin untuk mengelola data siswa, kelas, dan jurusan secara efisien. Dibuat menggunakan Laravel, Flowbite, dan Tailwind CSS dengan desain antarmuka modern dan responsif.",
    tech: [<SiLaravel key="laravel" title="Laravel" style={{ color: "#FF2D20" }} size={iconSize} />, <SiTailwindcss key="tailwind" title="Tailwind CSS" style={{ color: "#38BDF8" }} size={iconSize} />],
    github: "https://github.com/username/dashboard-admin-siswa",
    demo: "https://dashboard-admin-siswa.vercel.app",
    image: Project11,
    link: "/ProjectDetail11",
  },
  {
    title: "CRUD Laravel (Fullstack Laravel)",
    subtitle: "CRUD Dashboard Pengelolaan Data",
    description: "Website dashboard admin untuk mengelola data secara efisien. Dibuat menggunakan Laravel, CSS, dan Bootsrap dengan desain antarmuka modern dan responsif.",
    tech: [<SiLaravel key="laravel" title="Laravel" style={{ color: "#FF2D20" }} size={iconSize} />, <SiTailwindcss key="tailwind" title="Tailwind CSS" style={{ color: "#38BDF8" }} size={iconSize} />],
    github: "https://github.com/username/dashboard-admin-siswa",
    demo: "https://dashboard-admin-siswa.vercel.app",
    image: Project12,
    link: "/ProjectDetail12",
  },
];

const Projects = () => {
  return (
    <>
      <Nav />
      <section id="projects" className="min-h-screen bg-[#0d0c1d] text-white px-4 py-20 pb-32 font-grotesk">
        <div className="max-w-6xl mx-auto pt-10">
          <motion.h2 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl font-bold text-[#00F5D4] mb-12 text-center flex items-center justify-center gap-3">
            Projects
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
                  <div className="p-5">
                    <h3 className="text-lg font-medium text-white group-hover:text-[#00F5D4] mb-1 transition duration-300 group-hover:underline decoration-2">{project.title}</h3>
                    <h3 className="text-sm text-[#CBD5E1] mb-2 italic ">{project.subtitle}</h3>
                    <p className="text-sm text-[#CBD5E1] mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
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
      <Footer />
    </>
  );
};

export default Projects;
