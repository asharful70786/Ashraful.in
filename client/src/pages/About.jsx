import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaCode, FaServer, FaPaintBrush, FaBook, FaDownload, FaMapMarkerAlt, FaEnvelope, FaPhone, FaInstagram } from 'react-icons/fa';
import { HiSparkles, HiLightBulb, HiHeart } from 'react-icons/hi';

export default function About() {
  const achievements = [
    { number: "50+", label: "Projects Completed", icon: <HiSparkles className="text-yellow-400" size={24} /> },
    { number: "1.6", label: "Years Experience", icon: <HiLightBulb className="text-blue-400" size={24} /> },
    { number: "100%", label: "Client Satisfaction", icon: <HiHeart className="text-red-400" size={24} /> },
    { number: "24/7", label: "Learning Mode", icon: <FaBook className="text-green-400" size={24} /> },
  ];

  return (
    <div className="bg-slate-950 text-slate-100 overflow-hidden">

      {/* Background animation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-900"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >

            {/* Profile */}
            <motion.div
              className="mb-8 flex justify-center"
              initial={{ scale: 0, rotate: 180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 100 }}
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
                <img
                  src="https://www.ashraful.in/me.jpg"
                  alt="Ashraful Momin"
                  className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-slate-800 shadow-2xl"
                />
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center border-4 border-slate-950">
                  <div className="w-3 h-3 bg-white rounded-full animate-ping"></div>
                </div>
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Ashraful Momin
            </motion.h1>

            {/* Tagline */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-4xl font-bold mb-4 text-slate-300">
                Full-Stack Developer & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"> Web3 Enthusiast</span>
              </h2>
              <div className="flex items-center justify-center space-x-6 text-slate-400 text-sm md:text-base">
                <div className="flex items-center space-x-2">
                  <FaMapMarkerAlt className="text-red-400" />
                  <span>Kolkata  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Available for work</span>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex justify-center space-x-6 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              {[
                { icon: FaGithub, href: "https://github.com/asharful70786", color: "hover:text-slate-300" },
                { icon: FaLinkedin, href: "https://www.linkedin.com/in/ashraful-momin/", color: "hover:text-blue-400" },
                { icon: FaInstagram , href: "https://www.instagram.com/codercamp2024?igsh=M2RocGY1bnQydjd5&utm_source=qr", color: "hover:text-cyan-400" },
                { icon: FaEnvelope, href: "mailto:ashrafulmomin530@gmail.com", color: "hover:text-red-400" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-slate-800/50 backdrop-blur-sm rounded-full ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg border border-slate-700 hover:border-slate-600`}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </motion.div>

            {/* About Text */}
            <motion.p
              className="max-w-4xl mx-auto text-lg md:text-xl leading-relaxed text-slate-300 mb-12 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              Crafting digital experiences with <span className="text-cyan-400 font-semibold">clean code</span> and
              <span className="text-purple-400 font-semibold"> innovative solutions</span>.
              Passionate about building <span className="text-emerald-400 font-semibold">scalable web applications</span> and
              exploring <span className="text-amber-400 font-semibold">decentralized technologies</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <motion.a
                href="#about"
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Explore My Journey</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>

              <motion.a
                href="/md_Ashraful_momin.pdf"
                download
                className="group flex items-center space-x-2 px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-600 text-slate-300 font-semibold rounded-full hover:bg-slate-700/50 hover:border-slate-500 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload className="group-hover:animate-bounce" />
                <span>Download CV</span>
              </motion.a>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="mb-4 flex justify-center">
                  <div className="p-4 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 group-hover:border-slate-600 transition-all duration-300 group-hover:scale-110">
                    {achievement.icon}
                  </div>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{achievement.number}</h3>
                <p className="text-slate-400 font-medium">{achievement.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
