import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiSend,
  FiCheckCircle,
  FiMail,
  FiMapPin,
  FiLinkedin,
  FiGithub,
  FiUser,
  FiMessageSquare,
} from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [errors, setErrors] = useState({});
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  const handleFocus = (field) => {
    setFocusedField(field);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    setSuccess("");

    try {
      const res = await fetch("https://backend.ashraful.in/contact-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send message");

      setSuccess("Thank you! I'll reply within 24 hours.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setErrors({ submit: "Something went wrong. Try again later." });
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: FiMail,
      label: "Email",
      value: "ashrafulmomin2@gmail.com",
      href: "mailto:ashrafulmomin2@gmail.com",
      color: "from-red-500 to-pink-600",
    },
    {
      icon: FiMapPin,
      label: "Location",
      value: "Kolkata, India",
      href: "#",
      color: "from-green-500 to-emerald-600",
    },
  ];

  const socialLinks = [
    {
      icon: FiLinkedin,
      href: "https://www.linkedin.com/in/ashraful-momin/",
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/codercamp2024",
      label: "Instagram",
      color: "hover:text-pink-400",
    },
    {
      icon: FiGithub,
      href: "https://github.com/asharful70786",
      label: "GitHub",
      color: "hover:text-purple-400",
    },
  ];

  const inputVariants = {
    focused: {
      scale: 1.02,
      boxShadow: "0 0 20px rgba(6, 182, 212, 0.3)",
      borderColor: "#06b6d4",
    },
    unfocused: {
      scale: 1,
      boxShadow: "0 0 0px rgba(6, 182, 212, 0)",
      borderColor: "#334155",
    },
  };

  return (
    <div className="bg-slate-950 min-h-screen flex items-center justify-center p-4 sm:p-6 overflow-hidden">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 h-full">
        {/* Left Side - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-2 bg-gradient-to-br from-slate-900/90 via-slate-800/70 to-slate-900/90 border border-slate-700/50 rounded-2xl p-6 md:p-8 flex flex-col justify-center relative overflow-hidden"
        >
          {/* Background Elements */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-xl"></div>
          
          <div className="relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4"
            >
              Let's Connect
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-slate-300 mb-8 text-lg"
            >
              Have a project in mind? Let's discuss how we can bring your ideas to life.
            </motion.p>

            <div className="space-y-6 mb-10">
              {contactInfo.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-4 p-4 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 group"
                >
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${item.color} transform group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">{item.label}</p>
                    <p className="text-white font-medium">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h3 className="text-xl font-bold text-white mb-4">Follow My Journey</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + i * 0.1 }}
                    whileHover={{ 
                      scale: 1.2, 
                      y: -5,
                      transition: { type: "spring", stiffness: 400, damping: 10 }
                    }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 rounded-xl bg-slate-800/60 border border-slate-700/50 text-slate-300 ${social.color} transition-all duration-300 backdrop-blur-sm`}
                  >
                    <social.icon className="text-xl" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-3 bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 md:p-8 flex flex-col justify-center relative overflow-hidden"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-500 rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Send a Message
              </h2>
              <p className="text-slate-400">
                I typically respond within a few hours
              </p>
            </motion.div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div
                  variants={inputVariants}
                  animate={focusedField === 'name' ? 'focused' : 'unfocused'}
                  className="relative"
                >
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400">
                    <FiUser />
                  </div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => handleFocus('name')}
                    onBlur={handleBlur}
                    className="w-full pl-10 pr-4 py-3 bg-slate-800/60 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none transition-all duration-300"
                  />
                  {errors.name && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-xs mt-1 absolute -bottom-5 left-0"
                    >
                      {errors.name}
                    </motion.p>
                  )}
                </motion.div>

                <motion.div
                  variants={inputVariants}
                  animate={focusedField === 'email' ? 'focused' : 'unfocused'}
                  className="relative"
                >
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400">
                    <FiMail />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={handleBlur}
                    className="w-full pl-10 pr-4 py-3 bg-slate-800/60 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none transition-all duration-300"
                  />
                  {errors.email && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-xs mt-1 absolute -bottom-5 left-0"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </motion.div>
              </div>

              <motion.div
                variants={inputVariants}
                animate={focusedField === 'subject' ? 'focused' : 'unfocused'}
                className="relative"
              >
                <input
                  type="text"
                  name="subject"
                  placeholder="Project Discussion / Collaboration"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => handleFocus('subject')}
                  onBlur={handleBlur}
                  className="w-full px-4 py-3 bg-slate-800/60 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none transition-all duration-300"
                />
                {errors.subject && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-xs mt-1 absolute -bottom-5 left-0"
                  >
                    {errors.subject}
                  </motion.p>
                )}
              </motion.div>

              <motion.div
                variants={inputVariants}
                animate={focusedField === 'message' ? 'focused' : 'unfocused'}
                className="relative"
              >
                <div className="absolute left-3 top-3 text-slate-400">
                  <FiMessageSquare />
                </div>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tell me about your project, timeline, and budget..."
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus('message')}
                  onBlur={handleBlur}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/60 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none resize-none transition-all duration-300"
                />
                {errors.message && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-xs mt-1 absolute -bottom-5 left-0"
                  >
                    {errors.message}
                  </motion.p>
                )}
              </motion.div>

              <motion.button
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 30px -10px rgba(6, 182, 212, 0.5)"
                }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 py-4 rounded-xl text-white font-semibold text-lg relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center justify-center">
                  {loading ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend className="mr-2" />
                      Send Message
                    </>
                  )}
                </span>
              </motion.button>

              <AnimatePresence>
                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.9 }}
                    className="flex items-center justify-center space-x-2 text-emerald-400 p-3 bg-emerald-400/10 rounded-lg border border-emerald-400/20"
                  >
                    <FiCheckCircle className="text-lg" />
                    <span className="font-medium">{success}</span>
                  </motion.div>
                )}
                {errors.submit && (
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-center p-3 bg-red-400/10 rounded-lg border border-red-400/20"
                  >
                    {errors.submit}
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}