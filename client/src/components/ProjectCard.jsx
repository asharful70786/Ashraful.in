import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  FiPlay, FiGithub, FiHeart, FiBookmark, FiCode, FiX, FiExternalLink,
  FiEye, FiStar, FiDownload, FiShare2, FiCalendar, FiUser
} from 'react-icons/fi';
import {
  HiSparkles, HiHeart as HiHeartSolid, HiBookmark as HiBookmarkSolid,
  HiFire, HiLightningBolt, HiTrendingUp
} from 'react-icons/hi';
import {
  SiReact, SiNextdotjs, SiNodedotjs, SiTailwindcss, SiTypescript,
  SiMongodb, SiPython, SiJavascript, SiPostgresql, SiVuedotjs,
  SiAngular, SiExpress, SiGraphql, SiRedis, SiDocker
} from 'react-icons/si';

function ProjectCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [likeCount, setLikeCount] = useState(project.likes || Math.floor(Math.random() * 150) + 50);
  const [viewCount] = useState(project.views || Math.floor(Math.random() * 500) + 100);
  const [starCount] = useState(project.stars || Math.floor(Math.random() * 80) + 20);

  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [15, -15]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-15, 15]), { stiffness: 300, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    };

    const handleMouseLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
    };

    if (isHovered && cardRef.current) {
      cardRef.current.addEventListener('mousemove', handleMouseMove);
      cardRef.current.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (cardRef.current) {
        cardRef.current.removeEventListener('mousemove', handleMouseMove);
        cardRef.current.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [isHovered, mouseX, mouseY]);

  const getTechIcon = (tech) => {
    const iconMap = {
      react: <SiReact className="text-cyan-400" />,
      'next.js': <SiNextdotjs className="text-white" />,
      nextjs: <SiNextdotjs className="text-white" />,
      'node.js': <SiNodedotjs className="text-green-500" />,
      nodejs: <SiNodedotjs className="text-green-500" />,
      typescript: <SiTypescript className="text-blue-500" />,
      javascript: <SiJavascript className="text-yellow-500" />,
      tailwind: <SiTailwindcss className="text-cyan-400" />,
      tailwindcss: <SiTailwindcss className="text-cyan-400" />,
      mongodb: <SiMongodb className="text-green-500" />,
      python: <SiPython className="text-blue-400" />,
      postgresql: <SiPostgresql className="text-blue-400" />,
      vue: <SiVuedotjs className="text-green-400" />,
      angular: <SiAngular className="text-red-500" />,
      express: <SiExpress className="text-gray-400" />,
      graphql: <SiGraphql className="text-pink-500" />,
      redis: <SiRedis className="text-red-400" />,
      docker: <SiDocker className="text-blue-400" />,
    };
    return iconMap[tech.toLowerCase()] || <FiCode className="text-slate-400" />;
  };

  const handleLike = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLiked(!isLiked);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  const handleBookmark = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsBookmarked(!isBookmarked);
  };

  const handleCardClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
      setShowDetails(true);
    }, 200);
  };

  const closeDetails = (e) => {
    e.stopPropagation();
    setShowDetails(false);
  };

  const openProject = (url, e) => {
    e.stopPropagation();
    if (url) window.open(url, "_blank");
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.8,
      filter: "blur(10px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
        filter: { duration: 0.6 }
      }
    },
    hover: {
      y: -20,
      scale: 1.02,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    clicked: {
      scale: 0.98,
      transition: {
        duration: 0.1,
        ease: "easeInOut"
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0, backdropFilter: "blur(0px)" },
    visible: {
      opacity: 1,
      backdropFilter: "blur(20px)",
      transition: { duration: 0.3 }
    }
  };

  const detailsVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 100,
      filter: "blur(10px)"
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300,
        duration: 0.6
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 100,
      filter: "blur(10px)",
      transition: { duration: 0.3 }
    }
  };

  const glowVariants = {
    animate: {
      boxShadow: [
        "0 0 20px rgba(6, 182, 212, 0.3)",
        "0 0 40px rgba(168, 85, 247, 0.4)",
        "0 0 60px rgba(16, 185, 129, 0.3)",
        "0 0 40px rgba(168, 85, 247, 0.4)",
        "0 0 20px rgba(6, 182, 212, 0.3)"
      ],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <>
      <motion.div
        ref={cardRef}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        animate={isClicked ? "clicked" : isHovered ? "hover" : "visible"}
        viewport={{ once: true, margin: "-50px" }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={handleCardClick}
        className="group relative w-full max-w-md mx-auto cursor-pointer select-none perspective-1000"
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          transformStyle: "preserve-3d"
        }}
      >
        <motion.div
          className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 via-emerald-500/10 to-pink-500/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100"
          variants={glowVariants}
          animate={isHovered ? "animate" : ""}
        />

        <motion.div
          className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 rounded-3xl opacity-0 group-hover:opacity-100 blur-sm"
          animate={isHovered ? {
            background: [
              "linear-gradient(0deg, #06b6d4, #8b5cf6, #10b981)",
              "linear-gradient(90deg, #8b5cf6, #10b981, #06b6d4)",
              "linear-gradient(180deg, #10b981, #06b6d4, #8b5cf6)",
              "linear-gradient(270deg, #06b6d4, #8b5cf6, #10b981)"
            ]
          } : {}}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />

        <AnimatePresence>
          {isClicked && (
            <motion.div
              initial={{ scale: 0, opacity: 0.8 }}
              animate={{ scale: 6, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 via-purple-400/30 to-emerald-400/30 rounded-3xl pointer-events-none"
            />
          )}
        </AnimatePresence>

        <motion.div
          className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700/50 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl h-full"
          whileTap={{ scale: 0.98 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2Ij48ZmlsdGVyIGlkPSJub2lzZUZpbHRlciI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZUZpbHRlcikiLz48L3N2Zz4=')] pointer-events-none" />

          {project.featured && (
            <motion.div
              initial={{ scale: 0, rotate: -180, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white text-xs font-bold rounded-full shadow-lg backdrop-blur-sm border border-white/20 z-20"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="inline-block mr-1"
              >
                <HiSparkles />
              </motion.div>
              FEATURED
            </motion.div>
          )}

          {project.trending && (
            <motion.div
              initial={{ scale: 0, x: -50 }}
              animate={{ scale: 1, x: 0 }}
              transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
              className="absolute top-14 left-4 px-2 py-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs font-semibold rounded-full shadow-lg backdrop-blur-sm border border-white/20 z-20"
            >
              <HiTrendingUp className="inline mr-1" />
              TRENDING
            </motion.div>
          )}

          <div className="absolute top-4 right-4 flex flex-col space-y-2 z-20">
            <motion.button
              onClick={handleLike}
              className="p-2 rounded-full bg-slate-800/80 backdrop-blur-sm text-slate-400 border border-slate-600/50 hover:text-red-400 hover:border-red-400/50 hover:bg-red-400/10 transition-all duration-300"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
            >
              {isLiked ? <HiHeartSolid className="text-red-400" /> : <FiHeart />}
            </motion.button>
            <motion.button
              onClick={handleBookmark}
              className="p-2 rounded-full bg-slate-800/80 backdrop-blur-sm text-slate-400 border border-slate-600/50 hover:text-amber-400 hover:border-amber-400/50 hover:bg-amber-400/10 transition-all duration-300"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
            >
              {isBookmarked ? <HiBookmarkSolid className="text-amber-400" /> : <FiBookmark />}
            </motion.button>
          </div>

          <div className="relative h-56 w-full overflow-hidden">
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className={`w-full h-full object-cover transition-all duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageLoaded(false)}
              />
            )}
            {(!imageLoaded || !project.image) && (
              <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900 animate-pulse"></div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
          </div>

          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                <p className="text-slate-400 text-sm">{project.category}</p>
              </div>
              <div className="flex space-x-2">
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => openProject(project.github, e)}
                    className="p-2 rounded-full bg-slate-800/50 backdrop-blur-sm text-slate-400 hover:text-white hover:bg-slate-700/50 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FiGithub />
                  </motion.a>
                )}
                {project.live && (
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => openProject(project.live, e)}
                    className="p-2 rounded-full bg-slate-800/50 backdrop-blur-sm text-slate-400 hover:text-white hover:bg-slate-700/50 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FiExternalLink />
                  </motion.a>
                )}
              </div>
            </div>

            <p className="text-slate-300 text-sm mb-4 line-clamp-2">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech?.slice(0, 4).map((tech, index) => (
                <div key={index} className="flex items-center px-2 py-1 rounded-full bg-slate-800/50 backdrop-blur-sm text-slate-300">
                  <span className="mr-1 text-xs">{getTechIcon(tech)}</span>
                  <span className="text-xs">{tech}</span>
                </div>
              ))}
              {project.tech?.length > 4 && (
                <div className="flex items-center px-2 py-1 rounded-full bg-slate-800/50 backdrop-blur-sm text-slate-300 text-xs">
                  +{project.tech.length - 4}
                </div>
              )}
            </div>

            <div className="flex justify-between text-xs text-slate-500">
              <div className="flex items-center">
                <FiEye className="mr-1" />
                <span>{viewCount.toLocaleString()}</span>
              </div>
              <div className="flex items-center">
                <FiHeart className="mr-1" />
                <span>{likeCount.toLocaleString()}</span>
              </div>
              <div className="flex items-center">
                <FiStar className="mr-1" />
                <span>{starCount.toLocaleString()}</span>
              </div>
              <div className="flex items-center">
                <FiCalendar className="mr-1" />
                <span>{project.date || '2025'}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {showDetails && (
          <>
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm"
              onClick={closeDetails}
            />

            <motion.div
              variants={detailsVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 flex items-center justify-center p-4 z-50"
            >
              <div className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl border border-slate-700/50 shadow-2xl backdrop-blur-xl">
                <button
                  onClick={closeDetails}
                  className="absolute top-4 right-4 p-2 rounded-full bg-slate-800/80 backdrop-blur-sm text-slate-400 hover:text-white hover:bg-slate-700/50 transition-all duration-300 z-50"
                >
                  <FiX />
                </button>

                <div className="relative h-64 w-full overflow-hidden">
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
                </div>

                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
                    <div className="mb-4 md:mb-0">
                      <h2 className="text-2xl font-bold text-white mb-2">{project.title}</h2>
                      <div className="flex items-center text-slate-400 mb-4">
                        <FiUser className="mr-2" />
                        <span>By {project.author || 'Ashraful Momin'}</span>
                      </div>
                    </div>
                    <div className="flex space-x-3">
                      {project.url && (
                        <motion.a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => openProject(project.github, e)}
                          className="flex items-center px-4 py-2 rounded-full bg-slate-800/50 backdrop-blur-sm text-slate-300 hover:text-white hover:bg-slate-700/50 transition-all duration-300"
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FiGithub className="mr-2" />
                          View Code
                        </motion.a>
                      )}
                      {project.live && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => openProject(project.live, e)}
                          className="flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg transition-all duration-300"
                          whileHover={{ y: -2, scale: 1.02 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FiPlay className="mr-2" />
                          Live Demo
                        </motion.a>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="md:col-span-2">
                      <h3 className="text-xl font-semibold text-white mb-3">Project Details</h3>
                      <p className="text-slate-300 mb-4">{project.longDescription || project.description}</p>

                      {project.features && (
                        <>
                          <h4 className="text-lg font-semibold text-white mb-2">Key Features</h4>
                          <ul className="space-y-2 mb-4">
                            {project.features.map((feature, idx) => (
                              <li key={`feature-${idx}`} className="flex items-start text-slate-300">
                                <HiLightningBolt className="text-amber-400 mr-2 mt-0.5 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>

                    <div>
                      <div className="mt-6">
                        <h3 className="text-xl font-semibold text-white mb-3">Project Stats</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center text-slate-400">
                              <FiEye className="mr-2" />
                              <span>Views</span>
                            </div>
                            <span className="text-white">{viewCount.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center text-slate-400">
                              <FiHeart className="mr-2" />
                              <span>Likes</span>
                            </div>
                            <span className="text-white">{likeCount.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center text-slate-400">
                              <FiCalendar className="mr-2" />
                              <span>Date</span>
                            </div>
                            <span className="text-white">{project.date || '2025'}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
};

export default ProjectCard;