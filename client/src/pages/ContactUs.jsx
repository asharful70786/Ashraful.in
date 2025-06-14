import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiCheckCircle, FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa';

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [errors, setErrors] = useState({});
  const [focusedField, setFocusedField] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setSuccess('');
    try {
    await fetch('http://localhost:3000/contact-email', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData),
})
  .then(async (res) => {
    if (!res.ok) {
      const data = await res.json();
      throw new Error(data.message || 'Something went wrong');
    }
    setSuccess("Thank you for your message! I'll get back to you within 24 hours.");
    setFormData({ name: '', email: '', subject: '', message: '' });
  })
  .catch((err) => {
    console.error(err);
    setErrors({ submit: err.message || 'Failed to send message. Please try again.' });
  });

    } catch (error) {
      setErrors({ submit: 'Failed to send message. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const inputVariants = {
    focus: { borderColor: '#06b6d4', boxShadow: '0 0 0 3px rgba(6, 182, 212, 0.1)' },
    blur: { borderColor: '#475569', boxShadow: 'none' },
  };

  const contactInfo = [
    { icon: FiMail, label: 'Email', value: 'ashrafulmomin530@gmail.com', href: 'mailto:ashrafulmomin530@gmail.com' },
    { icon: FiPhone, label: 'Phone', value: '+91 7076091389', href: 'tel:+8801234567890' },
    { icon: FiMapPin, label: 'Location', value: 'Kolkata, India', href: '#' },
  ];

  const socialLinks = [
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/ashraful-momin/', label: 'LinkedIn' },
    { icon:FaInstagram , href: 'https://www.instagram.com/codercamp2024?igsh=M2RocGY1bnQydjd5&utm_source=qr', label: 'Twitter' },
     { icon: FiGithub, href: 'https://github.com/asharful70786', label: 'GitHub' },
  ];

  return (
    <div className="bg-slate-950 text-slate-100 overflow-hidden min-h-screen">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-900"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 leading-tight">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
              Ready to bring your ideas to life? Let's discuss your next project and create something 
              <span className="text-cyan-400 font-semibold"> amazing</span> together.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="lg:col-span-2">
          <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700 shadow-2xl overflow-hidden p-8 md:p-12">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Send me a message</h2>
              <p className="text-slate-300 font-light">Fill out the form below and I'll get back to you as soon as possible.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {['name', 'email'].map((field) => (
                  <motion.div key={field} className="space-y-2">
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      {field.charAt(0).toUpperCase() + field.slice(1)} *
                    </label>
                    <motion.input
                      type={field === 'email' ? 'email' : 'text'}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      onFocus={() => setFocusedField(field)}
                      onBlur={() => setFocusedField(null)}
                      variants={inputVariants}
                      animate={focusedField === field ? 'focus' : 'blur'}
                      transition={{ duration: 0.2 }}
                      className={`w-full px-4 py-3 bg-slate-800/50 border-2 rounded-xl text-white placeholder-slate-400 focus:outline-none transition-all duration-300 ${errors[field] ? 'border-red-500' : 'border-slate-600 hover:border-slate-500'}`}
                      placeholder={`Enter your ${field}`}
                    />
                    {errors[field] && (
                      <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-red-400 text-sm">{errors[field]}</motion.p>
                    )}
                  </motion.div>
                ))}
              </div>

              <motion.div className="space-y-2">
                <label className="block text-sm font-medium text-slate-300 mb-2">Subject *</label>
                <motion.input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('subject')}
                  onBlur={() => setFocusedField(null)}
                  variants={inputVariants}
                  animate={focusedField === 'subject' ? 'focus' : 'blur'}
                  transition={{ duration: 0.2 }}
                  className={`w-full px-4 py-3 bg-slate-800/50 border-2 rounded-xl text-white placeholder-slate-400 focus:outline-none transition-all duration-300 ${errors.subject ? 'border-red-500' : 'border-slate-600 hover:border-slate-500'}`}
                  placeholder="What's this about?"
                />
                {errors.subject && (
                  <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-red-400 text-sm">{errors.subject}</motion.p>
                )}
              </motion.div>

              <motion.div className="space-y-2">
                <label className="block text-sm font-medium text-slate-300 mb-2">Message *</label>
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  variants={inputVariants}
                  animate={focusedField === 'message' ? 'focus' : 'blur'}
                  transition={{ duration: 0.2 }}
                  rows={6}
                  className={`w-full px-4 py-3 bg-slate-800/50 border-2 rounded-xl text-white placeholder-slate-400 focus:outline-none resize-none transition-all duration-300 ${errors.message ? 'border-red-500' : 'border-slate-600 hover:border-slate-500'}`}
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-red-400 text-sm">{errors.message}</motion.p>
                )}
              </motion.div>

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: loading ? 1 : 1.05 }}
                whileTap={{ scale: loading ? 1 : 0.95 }}
                className={`group relative w-full px-8 py-4 font-semibold text-lg rounded-xl overflow-hidden transition-all duration-300 ${loading ? 'bg-slate-600 cursor-not-allowed text-slate-300' : 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:shadow-2xl hover:shadow-purple-500/25'}`}
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {loading ? (
                    <>
                      <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend className="text-xl" />
                      Send Message
                    </>
                  )}
                </span>
              </motion.button>

              {success && (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl backdrop-blur-sm">
                  <div className="flex items-start gap-3">
                    <FiCheckCircle className="flex-shrink-0 h-6 w-6 text-emerald-400 mt-0.5" />
                    <p className="text-emerald-300 font-medium">{success}</p>
                  </div>
                </motion.div>
              )}

              {errors.submit && (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl backdrop-blur-sm">
                  <p className="text-red-300 font-medium">{errors.submit}</p>
                </motion.div>
              )}
            </form>
          </div>
        </motion.div>

        {/* Contact Info Sidebar */}
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="space-y-8">
          <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700 p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.a key={index} href={item.href} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} className="flex items-center space-x-4 text-slate-300 hover:text-cyan-400 transition-colors duration-300">
                  <item.icon className="text-xl" />
                  <div>
                    <p className="font-medium">{item.label}</p>
                    <p className="text-sm">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700 p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Follow Me</h3>
            <div className="flex space-x-6">
              {socialLinks.map((social, index) => (
                <motion.a key={index} href={social.href} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2, rotate: 10 }} className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 text-2xl" aria-label={social.label}>
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
