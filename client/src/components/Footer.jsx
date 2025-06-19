import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaCode, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { HiArrowUp } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const StayUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    setError(null);

    try {
      const response = await fetch('https://backend.ashraful.in/subscribe-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        let data = await response.json();
        setMessage(data.message);
        setEmail("");
      } else {
        setError("Failed to subscribe. Please try again.");
      }
    } catch (err) {
      setError("Something went wrong. Please check your connection.");
    }
    setLoading(false);
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/asharful70786", label: "GitHub", color: "hover:text-slate-300" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/ashraful-momin/", label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: FaTwitter, href: "https://x.com/SingerBitto", label: "Twitter", color: "hover:text-cyan-400" },
    { icon: FaInstagram, href: "https://www.instagram.com/codercamp2024?igsh=M2RocGY1bnQydjd5&utm_source=qr", label: "Instagram", color: "hover:text-pink-400" },
  ];

  const quickLinks = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-[#0f172a] via-[#0f1b33] to-[#000814] text-slate-100 py-16 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-gradient-to-tr from-purple-500 via-cyan-400 to-emerald-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-pink-500 via-yellow-400 to-cyan-300 rounded-full blur-3xl opacity-10 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h3 className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent mb-5">
              Ashraful Momin
            </h3>
            <p className="text-slate-400 leading-relaxed font-light mb-6">
              Full-Stack Developer passionate about building scalable digital products & efficient solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a key={index} href={social.href} target="_blank" rel="noopener noreferrer"
                  className={`p-3 bg-white/5 border border-white/10 rounded-xl ${social.color} transition-all duration-300 hover:scale-110 shadow-md`}
                  whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }} aria-label={social.label}>
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links (Scroll Enabled) */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <h4 className="text-xl font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <ScrollLink 
                    to={link.to} 
                    smooth={true} 
                    duration={500} 
                    offset={-80}
                    className="cursor-pointer text-slate-300 hover:text-cyan-400 font-light transition-all duration-300 hover:translate-x-2 inline-block"
                  >
                    {link.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <h4 className="text-xl font-semibold text-white mb-6">Contact</h4>
            <ul className="space-y-5">
              <li className="flex items-start">
                <MdLocationOn className="mt-1 mr-3 text-emerald-400 text-xl" />
                <span className="text-slate-300 font-light">Kolkata, India</span>
              </li>
              <li className="flex items-center">
                <MdPhone className="mr-3 text-cyan-400 text-xl" />
                <a href="tel:+917076091389" className="text-slate-300 hover:text-cyan-400 font-light transition">+91 7076091389</a>
              </li>
              <li className="flex items-center">
                <MdEmail className="mr-3 text-purple-400 text-xl" />
                <a href="mailto:ashrafulmomin530@gmail.com" className="text-slate-300 hover:text-purple-400 font-light transition">ashrafulmomin530@gmail.com</a>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
            <h5 className="text-lg font-semibold text-white mb-5">Stay Updated</h5>
            <form className="space-y-4" onSubmit={StayUpdate}>
              <div className="flex">
                <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required
                  className="flex-1 px-4 py-3 bg-slate-800/40 border border-slate-600 rounded-l-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition" />
                <button type="submit" disabled={loading}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold rounded-r-xl transition-all duration-300">
                  {loading ? <span className="loader w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span> : <FaCode />}
                </button>
              </div>
              {message && <p className="text-green-400 flex items-center"><FaCheckCircle className="mr-2" /> {message}</p>}
              {error && <p className="text-red-400 flex items-center"><FaExclamationCircle className="mr-2" /> {error}</p>}
            </form>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 mt-12 pt-6 flex justify-between items-center flex-wrap gap-4 text-sm">
          <p className="text-slate-400">&copy; {currentYear} Ashraful Momin | All Rights Reserved.</p>
          <motion.button onClick={scrollToTop}
            className="p-3 bg-white/10 border border-white/10 rounded-xl hover:bg-slate-700/50 transition-all hover:scale-110"
            whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }} aria-label="Scroll to top">
            <HiArrowUp className="w-4 h-4 text-slate-300" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
