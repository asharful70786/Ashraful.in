import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaCode, FaServer, FaPaintBrush, FaBook } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import { GiArtificialIntelligence } from 'react-icons/gi'; // Fallback for blockchain icon

function About() {
  const skills = [
    { name: "Frontend Development", icon: <FaCode className="text-blue-400" size={24} /> },
    { name: "Backend Development", icon: <FaServer className="text-green-400" size={24} /> },
    { name: "UI/UX Design", icon: <FaPaintBrush className="text-purple-400" size={24} /> },
    { name: "Web3 & Blockchain", icon: <GiArtificialIntelligence className="text-yellow-400" size={24} /> }
  ];

  const techStack = [
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" size={24} /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" size={24} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" size={24} /> },
    { name: "Web3", icon: <GiArtificialIntelligence className="text-green-500" size={24} /> }
  ];

  return (
    <div className="bg-gray-900 text-gray-200">
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
              Ashraful Momin
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-300">
              Full-Stack Developer & Web3 Enthusiast
            </h2>
            <motion.div
              className="flex justify-center space-x-4 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <FaGithub size={28} />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <FaLinkedin size={28} />
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <FaTwitter size={28} />
              </a>
            </motion.div>
            <motion.p
              className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed text-gray-300 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Crafting digital experiences with clean code and innovative solutions. 
              Passionate about building scalable web applications and exploring decentralized technologies.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <a 
                href="#about" 
                className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Explore My Journey
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen py-20 bg-gray-900">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-green-400 mx-auto mb-8"></div>
            <p className="max-w-2xl mx-auto text-lg text-gray-400">
              Get to know the person behind the code
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Section */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-200 animate-tilt"></div>
                <img
                  src="https://www.ashraful.in/me.jpg"
                  alt="Ashraful"
                  className="relative rounded-2xl w-full max-w-md border-4 border-gray-800 group-hover:border-blue-400 transition-all duration-300"
                />
              </div>
            </motion.div>

            {/* Text Section */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold text-white">
                Full-Stack Developer with a Unique Background
              </h3>
              
              <p className="text-lg leading-relaxed text-gray-300">
                Hi, I'm <span className="font-semibold text-blue-400">Ashraful</span>, a passionate 
                <span className="font-semibold text-green-400"> self-taught developer</span> with a 
                <span className="font-semibold text-yellow-400"> BSc in Botany</span>. My unconventional 
                journey from biology to tech has given me a unique perspective on problem-solving and 
                creativity in software development.
              </p>

              <p className="text-lg leading-relaxed text-gray-300">
                I specialize in building <span className="font-semibold text-purple-300">scalable web applications</span> 
                with clean, maintainable code. My approach combines <span className="font-semibold text-cyan-300">technical expertise</span> 
                with <span className="font-semibold text-pink-300">user-centered design</span> to create products that are both 
                powerful and intuitive.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors"
                    whileHover={{ y: -5 }}
                  >
                    {skill.icon}
                    <span className="font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>

              <div className="pt-6">
                <h4 className="text-xl font-semibold text-white mb-4">Tech Stack</h4>
                <div className="flex flex-wrap gap-4">
                  {techStack.map((tech, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-full"
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech.icon}
                      <span>{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Philosophy</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-green-400 mx-auto mb-8"></div>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gray-800 bg-opacity-50 p-8 rounded-xl border border-gray-700 hover:border-blue-400 transition-all">
              <h3 className="text-2xl font-semibold text-blue-400 mb-4">Continuous Learning</h3>
              <p className="text-gray-300 leading-relaxed">
                The tech landscape evolves rapidly, and so do I. I dedicate time each week to learning new technologies, 
                refining my skills, and staying ahead of industry trends. My background in science has taught me the 
                value of curiosity and systematic learning.
              </p>
            </div>

            <div className="bg-gray-800 bg-opacity-50 p-8 rounded-xl border border-gray-700 hover:border-green-400 transition-all">
              <h3 className="text-2xl font-semibold text-green-400 mb-4">Quality Over Quantity</h3>
              <p className="text-gray-300 leading-relaxed">
                I believe in writing clean, efficient code that stands the test of time. Rather than rushing to implement 
                features, I focus on creating maintainable, well-documented solutions that other developers can understand 
                and build upon.
              </p>
            </div>

            <div className="bg-gray-800 bg-opacity-50 p-8 rounded-xl border border-gray-700 hover:border-purple-400 transition-all">
              <h3 className="text-2xl font-semibold text-purple-400 mb-4">User-Centric Approach</h3>
              <p className="text-gray-300 leading-relaxed">
                Technology should serve people, not the other way around. I prioritize user experience in all my projects, 
                ensuring that applications are not just functional but also intuitive and enjoyable to use.
              </p>
            </div>

            <blockquote className="text-center italic text-xl md:text-2xl font-medium text-gray-300 mt-12 px-8 py-6 border-l-4 border-blue-400 bg-gray-800 rounded-r-lg">
              "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle."
              <footer className="mt-4 text-blue-400 not-italic">— Steve Jobs</footer>
            </blockquote>
          </motion.div>
        </div>
      </section>

  
     
    </div>
  );
}

export default About;