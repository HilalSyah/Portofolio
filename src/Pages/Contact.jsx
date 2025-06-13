import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import { motion } from "framer-motion";

const containerVariants = {
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

const Contact = () => {
  return (
    <>
      <Nav />
      <section id="contact" className="min-h-screen bg-[#0d0c1d] text-white px-6 py-20 flex items-center justify-center font-grotesk">
        <motion.div className="max-w-5xl w-full grid md:grid-cols-2 gap-12" variants={containerVariants} initial="hidden" animate="visible">
          {/* Info Kontak */}
          <motion.div variants={itemLeftVariants}>
            <h2 className="text-4xl font-bold text-[#00F5D4] mb-6">Get In Touch</h2>
            <p className="text-[#CBD5E1] mb-8 text-lg leading-relaxed">Let’s connect! Whether you have a question, a project in mind, or just want to say hi — my inbox is always open.</p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-xl text-purple-400" />
                <a href="mailto:hilalsyah@example.com" className="hover:underline text-[#94A3B8]">
                  hilalsyah@gmail.com
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
              e.preventDefault();
              alert("Thanks for reaching out! Message sent.");
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

export default Contact;
