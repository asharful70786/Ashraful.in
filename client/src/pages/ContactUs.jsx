import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiCheckCircle } from 'react-icons/fi';

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setSuccess('');
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSuccess('Your message has been sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const inputVariants = {
    focus: { 
      borderColor: "#6366f1",
      boxShadow: "0 0 0 2px rgba(99, 102, 241, 0.2)"
    },
    blur: {
      borderColor: "#e5e7eb",
      boxShadow: "none"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl font-extrabold text-gray-100 sm:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400"
          >
            Let's Connect
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-5 text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Have a project in mind or want to collaborate? Drop me a message!
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="bg-gray-800/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-gray-700/20"
        >
          <div className="p-8 sm:p-10">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2">
                {['name', 'email'].map((field) => (
                  <motion.div 
                    key={field}
                    className="relative"
                    whileHover={{ scale: 1.01 }}
                  >
                    <motion.input
                      type={field === 'email' ? 'email' : 'text'}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      onFocus={() => setFocusedField(field)}
                      onBlur={() => setFocusedField(null)}
                      variants={inputVariants}
                      animate={focusedField === field ? "focus" : "blur"}
                      transition={{ duration: 0.2 }}
                      className="peer h-14 w-full px-4 border-2 rounded-lg text-gray-100 bg-gray-700/80 focus:outline-none"
                      placeholder=" "
                      required
                    />
                    <label className="absolute left-4 top-1/2 -translate-y-1/2 px-1 bg-gray-800 text-gray-300 transition-all duration-200 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-400 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base">
                      {field.charAt(0).toUpperCase() + field.slice(1)}
                    </label>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                className="relative"
                whileHover={{ scale: 1.01 }}
              >
                <motion.input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('subject')}
                  onBlur={() => setFocusedField(null)}
                  variants={inputVariants}
                  animate={focusedField === 'subject' ? "focus" : "blur"}
                  transition={{ duration: 0.2 }}
                  className="peer h-14 w-full px-4 border-2 rounded-lg text-gray-100 bg-gray-700/80 focus:outline-none"
                  placeholder=" "
                  required
                />
                <label className="absolute left-4 top-1/2 -translate-y-1/2 px-1 bg-gray-800 text-gray-300 transition-all duration-200 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-400 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base">
                  Subject
                </label>
              </motion.div>

              <motion.div 
                className="relative"
                whileHover={{ scale: 1.01 }}
              >
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  variants={inputVariants}
                  animate={focusedField === 'message' ? "focus" : "blur"}
                  transition={{ duration: 0.2 }}
                  className="peer h-40 w-full px-4 py-3 border-2 rounded-lg text-gray-100 bg-gray-700/80 focus:outline-none resize-none"
                  placeholder=" "
                  required
                />
                <label className="absolute left-4 top-3 px-1 bg-gray-800 text-gray-300 transition-all duration-200 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-400 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base">
                  Your Message
                </label>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="pt-2"
              >
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full flex justify-center items-center gap-2 py-4 px-6 rounded-xl text-lg font-semibold text-white transition-all duration-300 ${
                    loading 
                      ? 'bg-blue-500 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 shadow-lg hover:shadow-xl'
                  }`}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend className="text-lg" />
                      Send Message
                    </>
                  )}
                </button>
              </motion.div>

              {success && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-4 bg-green-900/50 rounded-xl border border-green-800 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3">
                    <FiCheckCircle className="flex-shrink-0 h-6 w-6 text-green-400" />
                    <p className="text-green-100 font-medium">{success}</p>
                  </div>
                </motion.div>
              )}
            </form>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}