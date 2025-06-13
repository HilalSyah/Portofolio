import { FaArrowRight } from "react-icons/fa";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import { motion } from "framer-motion";

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

export default function BlogsSection() {
  return (
    <>
      <Nav />
      <section id="blogs" className="bg-[#0d0c1d] text-white px-6 py-30 font-grotesk">
        <div className="max-w-7xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl font-bold text-center text-[#00F5D4] mb-4">
            Latest Blogs
          </motion.h2>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }} className="text-center text-[#94A3B8] text-lg mb-12">
            Artikel menarik seputar dunia pemrograman, desain, dan teknologi.
          </motion.p>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map(({ title, desc, date, link, tag, img }, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.2 }}
                className="bg-[#1e1e2e] rounded-2xl overflow-hidden shadow-md hover:shadow-[0_0_25px_#00F5D4] transition-all duration-500 group cursor-pointer transform hover:-translate-y-2"
              >
                <div className="overflow-hidden">
                  <img src={img} alt={title} className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out" />
                  <div className="p-6 flex flex-col h-full">
                    <span className="text-sm text-[#00F5D4] uppercase font-medium tracking-wider mb-2">{tag}</span>
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#00F5D4] transition-colors duration-300">{title}</h3>
                    <p className="text-sm text-[#CBD5E1] mb-6 line-clamp-3">{desc}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-xs text-[#94A3B8]">{date}</span>
                      <a href={link} className="text-sm text-[#FFE44C] flex items-center gap-1 hover:text-white hover:underline transition-colors duration-300">
                        Baca selengkapnya <FaArrowRight className="text-xs" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
