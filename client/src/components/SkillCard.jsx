import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import { HiSparkles, HiLightningBolt, HiStar } from 'react-icons/hi';

export default function SkillCard({ skill, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const IconComponent = FaIcons[skill.icon] || SiIcons[skill.icon];

  // Color schemes for different categories
  const colorSchemes = {
    frontend: {
      gradient: 'from-cyan-500/20 via-blue-500/20 to-purple-500/20',
      border: 'border-cyan-500/30',
      iconColor: 'text-cyan-400',
      glowColor: 'shadow-cyan-500/25',
      accentColor: 'text-cyan-300'
    },
    backend: {
      gradient: 'from-emerald-500/20 via-green-500/20 to-teal-500/20',
      border: 'border-emerald-500/30',
      iconColor: 'text-emerald-400',
      glowColor: 'shadow-emerald-500/25',
      accentColor: 'text-emerald-300'
    },
    design: {
      gradient: 'from-purple-500/20 via-pink-500/20 to-rose-500/20',
      border: 'border-purple-500/30',
      iconColor: 'text-purple-400',
      glowColor: 'shadow-purple-500/25',
      accentColor: 'text-purple-300'
    },
    tools: {
      gradient: 'from-amber-500/20 via-orange-500/20 to-red-500/20',
      border: 'border-amber-500/30',
      iconColor: 'text-amber-400',
      glowColor: 'shadow-amber-500/25',
      accentColor: 'text-amber-300'
    },
    default: {
      gradient: 'from-slate-500/20 via-gray-500/20 to-zinc-500/20',
      border: 'border-slate-500/30',
      iconColor: 'text-slate-400',
      glowColor: 'shadow-slate-500/25',
      accentColor: 'text-slate-300'
    }
  };

  // Determine color scheme based on category
  const getColorScheme = (category) => {
    const categoryLower = category.toLowerCase();
    if (categoryLower.includes('frontend') || categoryLower.includes('react') || categoryLower.includes('javascript')) {
      return colorSchemes.frontend;
    } else if (categoryLower.includes('backend') || categoryLower.includes('server') || categoryLower.includes('database')) {
      return colorSchemes.backend;
    } else if (categoryLower.includes('design') || categoryLower.includes('ui') || categoryLower.includes('ux')) {
      return colorSchemes.design;
    } else if (categoryLower.includes('tools') || categoryLower.includes('devops') || categoryLower.includes('cloud')) {
      return colorSchemes.tools;
    }
    return colorSchemes.default;
  };

  const colors = getColorScheme(skill.category);

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    initial: { rotate: 0, scale: 1 },
    hover: { 
      rotate: [0, -10, 10, -5, 5, 0],
      scale: 1.1,
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };

  const skillBadgeVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut"
      }
    }),
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative"
    >
      {/* Animated background glow */}
      <div className={`absolute -inset-1 bg-gradient-to-r ${colors.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
      
      {/* Main card */}
      <div
        className={`relative bg-slate-900/80 backdrop-blur-xl border ${colors.border} rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer ${
          isExpanded ? `shadow-2xl ${colors.glowColor}` : 'shadow-lg hover:shadow-2xl'
        }`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-1 h-1 ${colors.iconColor} rounded-full opacity-0 group-hover:opacity-60`}
              style={{
                left: `${20 + i * 15}%`,
                top: `${10 + i * 10}%`,
              }}
              animate={isHovered ? {
                y: [-20, -40, -20],
                opacity: [0, 0.6, 0],
                scale: [0, 1, 0]
              } : {}}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </div>

        {/* Header section */}
        <div className="p-8 text-center relative">
          {/* Skill level indicator */}
          <div className="absolute top-4 right-4 flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                <HiStar 
                  className={`w-3 h-3 ${i < 4 ? colors.iconColor : 'text-slate-600'}`}
                />
              </motion.div>
            ))}
          </div>

          {/* Icon with animation */}
          <motion.div
            variants={iconVariants}
            initial="initial"
            whileHover="hover"
            className="mb-6 flex justify-center"
          >
            <div className={`relative p-4 bg-gradient-to-br ${colors.gradient} rounded-2xl border ${colors.border}`}>
              <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} rounded-2xl blur-md opacity-50`}></div>
              {IconComponent && (
                <IconComponent className={`relative text-5xl ${colors.iconColor} drop-shadow-lg`} />
              )}
              
              {/* Sparkle effect */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    className="absolute -top-2 -right-2"
                  >
                    <HiSparkles className={`text-xl ${colors.iconColor} animate-pulse`} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Category title */}
          <motion.h3 
            className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all duration-300"
            layout
          >
            {skill.category}
          </motion.h3>

          {/* Skill count indicator */}
          <div className="flex items-center justify-center space-x-2 mb-6">
            <HiLightningBolt className={`text-sm ${colors.iconColor}`} />
            <span className={`text-sm font-medium ${colors.accentColor}`}>
              {skill.skills.length} Skills
            </span>
          </div>
        </div>

        {/* Skills section */}
        <motion.div
          initial={false}
          animate={{ height: isExpanded ? 'auto' : '120px' }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="px-8 pb-8 overflow-hidden"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {skill.skills.map((item, skillIndex) => (
              <motion.div
                key={skillIndex}
                custom={skillIndex}
                variants={skillBadgeVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                className="group/badge relative"
              >
                {/* Badge glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} rounded-full blur-sm opacity-0 group-hover/badge:opacity-100 transition-opacity duration-300`}></div>
                
                <span className={`relative inline-flex items-center px-4 py-2 bg-slate-800/50 backdrop-blur-sm border ${colors.border} text-slate-300 text-sm font-medium rounded-full transition-all duration-300 hover:text-white hover:bg-slate-700/50 cursor-pointer`}>
                  {item}
                  
                  {/* Skill proficiency dot */}
                  <div className={`ml-2 w-2 h-2 ${colors.iconColor} rounded-full opacity-60 group-hover/badge:opacity-100 transition-opacity duration-300`}></div>
                </span>
              </motion.div>
            ))}
          </div>

          {/* Expand/Collapse indicator */}
          <motion.div
            className="flex justify-center mt-6"
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className={`p-2 bg-slate-800/50 backdrop-blur-sm rounded-full border ${colors.border} ${colors.iconColor} hover:bg-slate-700/50 transition-all duration-300 cursor-pointer`}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </motion.div>
        </motion.div>

        {/* Progress bar at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-800 overflow-hidden">
          <motion.div
            className={`h-full bg-gradient-to-r ${colors.gradient}`}
            initial={{ width: 0 }}
            whileInView={{ width: '85%' }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          />
        </div>

        {/* Corner decoration */}
        <div className="absolute top-0 left-0 w-20 h-20 overflow-hidden">
          <div className={`absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-br ${colors.gradient} rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
        </div>
      </div>
    </motion.div>
  );
}
