import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaYoutube, FaCode, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { HiArrowUp } from 'react-icons/hi';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
      const response = await fetch('http://localhost:3000/subscribe-email', {
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
    // { icon: FaYoutube, href: "https://youtube.com/@yourusername", label: "YouTube", color: "hover:text-red-400" }
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" }
  ];

  const services = [
    { name: "Web Development", href: "/services/web-development" },
    { name: "Mobile Apps", href: "/services/mobile-apps" },
    { name: "UI/UX Design", href: "/services/ui-ux-design" },
    { name: "API Development", href: "/services/api-development" },
    ];

  return (
    <footer className="bg-slate-950 text-slate-100 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative">
        <div className="container mx-auto px-6 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
            {/* Brand Section */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent mb-5">
                Ashraful Momin
              </h3>
              <p className="text-slate-400 font-light leading-relaxed mb-6">
                Full-Stack Developer passionate about building scalable digital products & efficient solutions.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a key={index} href={social.href} target="_blank" rel="noopener noreferrer"
                    className={`p-3 bg-slate-800/50 backdrop-blur-sm rounded-xl ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg border border-slate-700 hover:border-slate-600`}
                    whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }} aria-label={social.label}>
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
              <h4 className="text-xl font-bold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-light hover:translate-x-1 inline-block">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
              <h4 className="text-xl font-bold text-white mb-6">Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a href={service.href} className="text-slate-300 hover:text-purple-400 transition-colors duration-300 font-light hover:translate-x-1 inline-block">
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact + Newsletter */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
              <h4 className="text-xl font-bold text-white mb-6">Get In Touch</h4>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start group">
                  <MdLocationOn className="mt-1 mr-3 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-slate-300 font-light">Kolkata, India</span>
                </li>
                <li className="flex items-center group">
                  <MdPhone className="mr-3 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                  <a href="tel:+8801234567890" className="text-slate-300 hover:text-cyan-400 font-light transition-colors duration-300">+91 7076091389</a>
                </li>
                <li className="flex items-center group">
                  <MdEmail className="mr-3 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                  <a href="mailto:ashrafulmomin530@gmail.com" className="text-slate-300 hover:text-purple-400 font-light transition-colors duration-300">ashrafulmomin530@gmail.com</a>
                </li>
              </ul>

              <h5 className="text-lg font-semibold text-white mb-4">Stay Updated</h5>
              <form className="flex flex-col space-y-4" onSubmit={StayUpdate}>
                <div className="flex">
                  <input type="email" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} required
                    className="flex-1 px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-l-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300" />
                  <button type="submit" disabled={loading}
                    className={`px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold rounded-r-xl transition-all duration-300 hover:shadow-lg flex items-center justify-center`}>
                    {loading ? <span className="loader w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span> : <FaCode className="w-4 h-4" />}
                  </button>
                </div>
                {message && <p className="text-green-400 flex items-center"><FaCheckCircle className="mr-2" /> {message}</p>}
                {error && <p className="text-red-400 flex items-center"><FaExclamationCircle className="mr-2" /> {error}</p>}
              </form>
            </motion.div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800">
          <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <p className="text-slate-400 font-light text-center md:text-left">
                &copy; {currentYear} Ashraful Momin | All rights reserved. Kolkata, India.
              </p>
            </motion.div>

            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <motion.button onClick={scrollToTop}
                className="p-3 bg-slate-800/50 backdrop-blur-sm rounded-xl hover:bg-slate-700/50 transition-all duration-300 hover:scale-110 border border-slate-700 hover:border-slate-600"
                whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }} aria-label="Scroll to top">
                <HiArrowUp className="w-4 h-4 text-slate-300" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
