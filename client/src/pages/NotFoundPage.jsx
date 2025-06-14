import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaExclamationTriangle, FaSearch, FaArrowLeft } from 'react-icons/fa';
import { HiOutlineLightningBolt, HiOutlineEmojiSad } from 'react-icons/hi';
import { MdError, MdWarning } from 'react-icons/md';

export default function NotFoundPage() {
  const navigate = useNavigate();

  const floatingElements = [
    { icon: HiOutlineLightningBolt, delay: 0, duration: 6 },
    { icon: MdWarning, delay: 0.5, duration: 7 },
    { icon: FaExclamationTriangle, delay: 1, duration: 8 },
    { icon: MdError, delay: 1.5, duration: 5 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-red-950 to-slate-900 flex flex-col items-center justify-center p-4 text-center relative overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Warning Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: element.delay
          }}
          className={`absolute text-6xl text-red-400/20 ${
            index === 0 ? '-top-16 -left-16' :
            index === 1 ? '-bottom-16 -right-16' :
            index === 2 ? 'top-20 -right-20' :
            'bottom-20 -left-20'
          }`}
        >
          <element.icon />
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full relative z-10"
      >
        <div className="relative">
          {/* Main Content Card */}
          <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-red-500/20 p-8 sm:p-12 lg:p-16">
            
            {/* Gradient Top Border */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-red-500 via-orange-500 to-red-600"></div>
            
            {/* Warning Pattern Background */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `repeating-linear-gradient(
                  45deg,
                  transparent,
                  transparent 10px,
                  #ef4444 10px,
                  #ef4444 20px
                )`
              }}></div>
            </div>
            
            <div className="flex flex-col items-center relative z-10">
              
              {/* Error Icon */}
              <motion.div
                initial={{ scale: 0.5, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 200,
                  damping: 15,
                  delay: 0.2
                }}
                className="mb-8"
              >
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-red-500 via-orange-500 to-red-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
                  <div className="relative w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-red-500 to-orange-600 rounded-full flex items-center justify-center border-4 border-slate-800 shadow-2xl">
                    <HiOutlineEmojiSad className="text-4xl md:text-5xl text-white" />
                  </div>
                  {/* Pulsing Ring */}
                  <div className="absolute inset-0 rounded-full border-4 border-red-400 animate-ping opacity-20"></div>
                </div>
              </motion.div>
              
              {/* 404 Text */}
              <motion.h1
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-8xl sm:text-9xl lg:text-[12rem] font-black mb-6 leading-none"
              >
                <span className="bg-gradient-to-r from-red-400 via-orange-400 to-red-500 bg-clip-text text-transparent drop-shadow-2xl">
                  404
                </span>
              </motion.h1>
              
              {/* Error Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mb-8 text-center"
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                  Page Not Found
                </h2>
                <div className="flex items-center justify-center gap-2 mb-6">
                  <MdError className="text-red-400 text-2xl" />
                  <span className="text-xl font-semibold text-red-400">SYSTEM ERROR</span>
                  <MdError className="text-red-400 text-2xl" />
                </div>
              </motion.div>
              
              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed font-light"
              >
                <span className="text-red-400 font-semibold">WARNING:</span> The page you're looking for has been moved, deleted, or never existed. 
                This could be a <span className="text-orange-400 font-semibold">critical system error</span> or a broken link.
              </motion.p>
              
              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              >
                {/* Go Home Button */}
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/')}
                  className="group relative px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/30 border border-red-400/50"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <FaHome className="text-xl" />
                    Return to Safety
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>

                {/* Go Back Button */}
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate(-1)}
                  className="group px-8 py-4 bg-slate-800/50 backdrop-blur-sm border-2 border-slate-600 text-slate-300 font-semibold rounded-xl hover:bg-slate-700/50 hover:border-slate-500 hover:text-white transition-all duration-300"
                >
                  <span className="flex items-center justify-center gap-3">
                    <FaArrowLeft className="text-xl group-hover:-translate-x-1 transition-transform duration-300" />
                    Go Back
                  </span>
                </motion.button>
              </motion.div>

              {/* Additional Help */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="mt-12 p-6 bg-red-500/10 border border-red-500/20 rounded-2xl backdrop-blur-sm"
              >
                <div className="flex items-center justify-center gap-3 mb-3">
                  <FaSearch className="text-red-400" />
                  <span className="text-white font-semibold">Need Help?</span>
                </div>
                <p className="text-slate-300 text-sm">
                  If you believe this is an error, please contact our support team or try searching for what you need.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Warning Strip */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-red-600 to-orange-600 p-4 z-50"
      >
        <div className="flex items-center justify-center gap-3 text-white font-semibold">
          <FaExclamationTriangle className="animate-pulse" />
          <span>SYSTEM ALERT: Page access denied</span>
          <FaExclamationTriangle className="animate-pulse" />
        </div>
      </motion.div>
    </div>
  );
}
