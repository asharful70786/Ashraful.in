import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';

export default function SkillCard({ skill }) {
  const [clicked, setClicked] = useState(false);
  const IconComponent = FaIcons[skill.icon] || SiIcons[skill.icon];

  return (
    <motion.div
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.98 }}
      className={`card w-full 
        ${clicked ? 'border-2 border-primary' : 'border border-transparent'} 
        bg-gradient-to-br from-base-200 to-base-100 
        shadow-lg hover:shadow-2xl transition-all duration-500 rounded-xl`}
      onClick={() => setClicked(!clicked)}
    >
      <div className="card-body text-center">
        {IconComponent && (
          <IconComponent className="text-6xl mx-auto text-primary mb-5 transition-transform duration-500 group-hover:rotate-6" />
        )}
        <h2 className="card-title justify-center text-2xl">{skill.category}</h2>
        <div className="flex flex-wrap justify-center gap-3 mt-4">
          {skill.skills.map((item, index) => (
            <span 
              key={index} 
              className="badge badge-outline p-3 text-sm hover:bg-primary hover:text-white transition duration-300 cursor-pointer"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
