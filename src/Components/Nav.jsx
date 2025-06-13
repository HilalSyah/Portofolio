import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full bg-[#0F0F1A] md:bg-transparent text-white fixed top-0 left-0 z-50 ">
      <nav className="flex items-center justify-between p-7">
        <p className="text-2xl font-semibold ps-20">Portfolio</p>

        <ul className="hidden md:flex text-[17px] font-medium gap-10 pe-20">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/About">About</a>
          </li>
          <li>
            <a href="/Projects">Projects</a>
          </li>
          <li>
            <a href="/Skills">Skills</a>
          </li>
          <li>
            <a href="/Certificate">Certificate</a>
          </li>
          {/* <li>
            <a href="/Blogs">Blogs</a>
          </li> */}
          <li>
            <a href="/Contact">Contact</a>
          </li>
        </ul>

        <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>

      <div className={`md:hidden bg-[#0F0F1A] w-full absolute top-full left-0 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[500px] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-5"}`}>
        <ul className="flex flex-col items-center gap-6 py-6 text-lg font-medium">
          <li>
            <a href="/" onClick={toggleMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="/About" onClick={toggleMenu}>
              About
            </a>
          </li>
          <li>
            <a href="/Projects" onClick={toggleMenu}>
              Project
            </a>
          </li>
          <li>
            <a href="/Skills" onClick={toggleMenu}>
              Skills
            </a>
          </li>
          <li>
            <a href="/Certificate" onClick={toggleMenu}>
              Certificate
            </a>
          </li>
          {/* <li>
            <a href="/Blogs" onClick={toggleMenu}>
              Blogs
            </a>
          </li> */}
          <li>
            <a href="/Contact" onClick={toggleMenu}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
