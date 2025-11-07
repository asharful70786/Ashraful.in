import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaCode, FaServer, FaPaintBrush, FaBook, FaDownload, FaMapMarkerAlt, FaEnvelope, FaPhone, FaInstagram, FaRobot, FaCloud, FaDatabase, FaShieldAlt, FaRocket } from 'react-icons/fa';
import { HiSparkles, HiLightBulb, HiHeart, HiChartBar, HiClock, HiChip } from 'react-icons/hi';

export default function About() {

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen overflow-hidden relative">

      {/* Advanced 3D Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 border-2 border-cyan-500/20 rounded-full"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-64 h-64 border-2 border-purple-500/20 rotate-45"
          animate={{
            rotate: -360,
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Particle system */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Gradient orbs */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">

          {/* Left Column - Visual & Personal Branding */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >

            {/* Profile Card with Glass Morphism */}
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Background Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
              
              {/* Main Card */}
              <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-8 shadow-2xl">
                
                {/* Profile Image with Floating Elements */}
                <div className="relative mb-8">
                  <div className="relative mx-auto w-48 h-48">
                    <motion.img
                      src="./meProfile.jpg"
                      alt="Ashraful Momin"
                      className="rounded-2xl object-cover w-full h-full border-4 border-slate-700/50 shadow-2xl"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                    
                   
                    
                  </div>
                </div>

                {/* Name & Title */}
                <div className="text-center mb-6">
                  <motion.h1
                    className="text-4xl md:text-5xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    Ashraful Momin
                  </motion.h1>
                  
                  <motion.div
                    className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800/50 backdrop-blur-sm rounded-full border border-cyan-500/30"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-cyan-300 font-semibold">Full-Stack Engineer</span>
                  </motion.div>
                </div>

                {/* Contact Info */}
                <motion.div
                  className="grid grid-cols-1 gap-3 mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {[
                   
                    { icon: FaMapMarkerAlt, text: "Available for Remote Work", color: "text-emerald-400" },
                    { icon: HiClock, text: "24/7 Project Support", color: "text-amber-400" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/30 border border-slate-700/50"
                      whileHover={{ x: 5, backgroundColor: "rgba(30, 41, 59, 0.5)" }}
                    >
                      <item.icon className={`${item.color} text-lg`} />
                      <span className="text-slate-300 text-sm">{item.text}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Social Links - Circular */}
                <motion.div
                  className="flex justify-center gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  {[
                    { icon: FaGithub, href: "https://github.com/asharful70786", color: "hover:bg-slate-700" },
                    { icon: FaLinkedin, href: "https://www.linkedin.com/in/ashraful-momin/", color: "hover:bg-blue-500/20" },
                    { icon: FaInstagram, href: "https://www.instagram.com/codercamp2024", color: "hover:bg-pink-500/20" },
                    { icon: FaEnvelope, href: "mailto:ashrafulmomin530@gmail.com", color: "hover:bg-red-500/20" }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 transition-all duration-300 ${social.color} group relative`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="text-xl text-slate-300 group-hover:text-white" />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 blur-md transition-opacity -z-10"></div>
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            {/* Stats Card */}
            <motion.div
              className="bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { number: "80%", label: "Automation", icon: FaRobot },
                  { number: "40%", label: "Faster Delivery", icon: HiChartBar },
                  { number: "99.9%", label: "Reliability", icon: FaShieldAlt }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="p-4"
                    whileHover={{ scale: 1.05 }}
                  >
                    <stat.icon className="text-cyan-400 text-2xl mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">{stat.number}</div>
                    <div className="text-xs text-slate-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Professional Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >

            {/* Main Content Card */}
            <motion.div
              className="bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-8 shadow-2xl"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Tagline */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-200 leading-tight">
                  Transforming Ideas Into{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                    Digital Reality
                  </span>
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-4"></div>
              </motion.div>

              {/* Professional Summary */}
              <motion.div
                className="space-y-6 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
               <p className="text-lg leading-relaxed text-slate-300">
  Building <span className="text-cyan-400 font-semibold">AI-powered healthcare and enterprise platforms</span>  
  &nbsp; that blend human insight with intelligent technology —— transforming complex challenges into seamless digital experiences.
</p>


                {/* Feature Points */}
                <div className="space-y-4">
                  {[
                    { icon: HiLightBulb, text: "AI-Driven Automation & Intelligent Systems", color: "text-yellow-400" },
                    { icon: FaCloud, text: "Scalable Cloud Architecture & DevOps", color: "text-blue-400" },
                 
                    { icon: FaRocket, text: "40% Faster Time-to-Market", color: "text-purple-400" }
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-4 p-3 rounded-xl bg-slate-800/30 border border-slate-700/30"
                      whileHover={{ x: 5, borderColor: "rgba(94, 234, 212, 0.3)" }}
                    >
                      <feature.icon className={`${feature.color} text-xl`} />
                      <span className="text-slate-300">{feature.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

             {/* Mission & Value Cards */}
<motion.div
  className="grid md:grid-cols-2 gap-6 mb-8"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.8 }}
>
  {/* Technical Innovation */}
  <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 rounded-xl p-6 border border-cyan-500/20">
    <HiLightBulb className="text-cyan-400 text-2xl mb-3" />
    <h3 className="text-lg font-semibold text-cyan-300 mb-2">Engineering Innovation</h3>
    <p className="text-slate-300 text-sm">
      His approach combines deep system design with product vision — building frameworks 
      where AI, data, and infrastructure converge seamlessly to deliver measurable business outcomes.
      Each project reflects an architect’s discipline with a founder’s foresight.
    </p>
  </div>

  {/* Craft & Reliability */}
  <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 rounded-xl p-6 border border-purple-500/20">
    <HiHeart className="text-purple-400 text-2xl mb-3" />
    <h3 className="text-lg font-semibold text-purple-300 mb-2">Precision in Execution</h3>
    <p className="text-slate-300 text-sm">
      Built with production in mind, his code emphasizes reliability, observability, and 
      scalability — the unseen backbone that keeps real systems alive.  
      He treats each deployment as a craft, balancing performance with long-term maintainability.
    </p>
  </div>
</motion.div>


              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <motion.a
                  href="#expertise"
                  className="group relative flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-6 rounded-xl overflow-hidden transition-all duration-300 flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <HiChip className="text-xl group-hover:animate-spin" />
                  <span>Explore My Work</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.a>

                <motion.a
                  href="/md_Ashraful_momin.pdf"
                  download
                  className="group flex-1 bg-slate-800/50 backdrop-blur-sm border border-cyan-500/30 text-slate-300 font-semibold py-4 px-6 rounded-xl hover:bg-slate-700/50 hover:border-cyan-400 transition-all duration-300 flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaDownload className="group-hover:animate-bounce" />
                  <span>Technical CV</span>
                </motion.a>
              </motion.div>
            </motion.div>


          </motion.div>
        </div>
      </div>
    </div>
  );
}