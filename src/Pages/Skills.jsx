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
  FaVuejs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiMysql, SiMongodb, SiTypescript, SiFlutter, SiDart, SiSass, SiFirebase, SiKotlin, SiGo, SiExpress } from "react-icons/si";
import { motion } from "framer-motion";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

const skills = [
  // Frontend
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, percent: 85, color:"bg-orange-500", type: "Frontend" },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500"/>, percent: 80, color: "bg-blue-500", type: "Frontend" },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600"/>, percent: 45, color: "bg-purple-600", type: "Frontend" },
  { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400"/>, percent: 85, color: "bg-cyan-400", type: "Frontend" },
  { name: "SASS", icon: <SiSass className="text-pink-400"/>, percent: 20, color: "bg-pink-400", type: "Frontend" },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400"/>, percent: 50, color: "bg-yellow-400", type: "Frontend" },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-400" />, percent: 30, color: "bg-blue-400", type: "Frontend" },
  { name: "React.js", icon: <FaReact className="text-cyan-300"/>, percent: 65, color: "bg-cyan-500", type: "Frontend" },
  { name: "Next.js", icon: <SiNextdotjs />, percent: 50, color: "bg-gray-700", type: "Frontend" },
  { name: "Vue", icon: <FaVuejs className="text-4xl text-green-400" />, percent: 20, color: "bg-green-400", type: "Frontend" },

  // Backend
  { name: "Node.js", icon: <FaNodeJs className="text-green-500"/>, percent: 20, color: "bg-green-500", type: "Backend" },
  { name: "Laravel", icon: <FaLaravel className="text-red-500"/>, percent: 75, color: "bg-red-500", type: "Backend" },
  { name: "MySQL", icon: <SiMysql className="text-blue-300"/>, percent: 70, color: "bg-blue-300", type: "Backend" },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400"/>, percent: 20, color: "bg-emerald-500", type: "Backend" },
  { name: "Firebase", icon: <SiFirebase className="text-4xl text-yellow-500" />, percent: 30, color: "bg-yellow-500", type: "Backend" },
  { name: "Kotlin", icon: <SiKotlin className="text-4xl text-purple-500" />, percent: 20, color: "bg-purple-500", type: "Backend/Mobile" },
  { name: "Golang", icon: <SiGo className="text-4xl text-blue-400" />, percent: 15, color: "bg-blue-400", type: "Backend" },
  { name: "Express.js", icon: <SiExpress className="text-4xl text-white" />, percent: 30, color: "bg-white text-black", type: "Backend" },

  // Mobile
  { name: "Flutter", icon: <SiFlutter className="text-sky-400"/>, percent: 50, color: "bg-sky-400", type: "Mobile" },
  { name: "Dart", icon: <SiDart className="text-sky-600"/>, percent: 50, color: "bg-blue-400", type: "Mobile" },
  { name: "Kotlin", icon: <SiKotlin className="text-4xl text-purple-500" />, percent: 20, color: "bg-purple-500", type: "Mobile" },

  // Design
  { name: "Figma", icon: <FaFigma className="text-pink-500"/>, percent: 50, color: "bg-pink-500", type: "Design" },

  // Language
  { name: "PHP", icon: <FaPhp className="text-purple-600"/>, percent: 70, color: "bg-indigo-400", type: "Language" },
  { name: "Python", icon: <FaPython className="text-blue-600"/>, percent: 30, color: "bg-blue-600", type: "Language" },
  { name: "Java", icon: <FaJava className="text-red-600"/>, percent: 35, color: "bg-red-600", type: "Language" },

  // Tools
  { name: "Git", icon: <FaGitAlt className="text-orange-400"/>, percent: 40, color: "bg-orange-400", type: "Tools" },
  { name: "GitHub", icon: <FaGithub className="text-gray-700"/>, percent: 80, color: "bg-gray-500", type: "Tools" },
];

// Framer Motion Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const SkillCard = ({ icon, name, percent, color }) => (
  <motion.div variants={itemVariants} className="bg-[#1e1e2e] rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all border border-[#2e2e3e]">
    <div className="flex items-center gap-4 mb-4 text-white">
      <div className="text-3xl sm:text-4xl">{icon}</div>
      <h3 className="text-base sm:text-lg font-semibold">{name}</h3>
    </div>
    <div className="w-full bg-[#2e2e3e] rounded-full h-2 sm:h-3">
      <div className={`h-2 sm:h-3 rounded-full ${color}`} style={{ width: `${percent}%` }}></div>
    </div>
    <p className="text-xs text-gray-300 mt-1">{percent}%</p>
  </motion.div>
);

const SkillSection = ({ title, skills }) => (
  <div className="mb-14">
    <motion.h3 initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="text-2xl font-bold text-[#00F5D4] mb-4 relative inline-block">
      {title}
      <span className="absolute left-0 -bottom-1 w-10 h-1 bg-[#00F5D4]"></span>
    </motion.h3>

    <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
      {skills.map((skill, index) => (
        <SkillCard key={index} {...skill} />
      ))}
    </motion.div>
  </div>
);

const SkillsPage = () => {
  const groupBy = (type) => skills.filter((s) => s.type === type);

  return (
    <>
      <Nav />
      <section className="min-h-screen bg-[#0d0c1d] text-white px-6 py-20 font-grotesk">
        <div className="max-w-6xl mx-auto pt-20">
          <motion.h2 initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl font-bold text-center text-[#00F5D4] mb-16">
            My Tech Stack
          </motion.h2>

          <SkillSection title="Frontend" skills={groupBy("Frontend")} />
          <SkillSection title="Backend" skills={groupBy("Backend")} />
          <SkillSection title="Mobile Development" skills={groupBy("Mobile")} />
          <SkillSection title="Design Tools" skills={groupBy("Design")} />
          <SkillSection title="Programming Languages" skills={groupBy("Language")} />
          <SkillSection title="Tools & Platforms" skills={groupBy("Tools")} />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SkillsPage;
