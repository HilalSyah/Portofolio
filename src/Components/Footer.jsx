import React from "react";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaReact, FaGitAlt, FaLaravel, FaNodeJs, FaFigma, FaJava, FaPhp, FaPython, FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaCode, FaPalette, FaServer, FaRocket } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiMysql, SiMongodb, SiTypescript, SiFlutter, SiDart, SiSass } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-[#0d0c1d] text-white py-10 px-6 font-grotesk">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Kiri */}
        <div>
          <h2 className="text-2xl font-bold text-[#00F5D4]">Hilalsyah.</h2>
          <p className="text-[#94A3B8] mt-2">© {new Date().getFullYear()} All rights reserved. Built with 💻 & passion.</p>
        </div>

        {/* Kanan */}
        <div className="flex md:justify-end gap-6 text-2xl">
          <a href="https://github.com/HilalSYah" target="_blank" rel="noopener noreferrer" className="text-[#CBD5E1] hover:text-gray-500 transition-colors duration-300" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/hilal-syah-b75490294" target="_blank" rel="noopener noreferrer" className="text-[#CBD5E1] hover:text-blue-500 transition-colors duration-300" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com/hilal_syah" target="_blank" rel="noopener noreferrer" className="text-[#CBD5E1] hover:text-pink-500 transition-colors duration-300" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
