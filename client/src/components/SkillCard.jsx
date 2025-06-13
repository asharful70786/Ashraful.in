import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function SkillCard({ skill }) {
  const [clicked, setClicked] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`card w-full ${clicked ? 'border-2 border-primary' : ''} bg-base-100 shadow-xl transition-transform duration-300`}
      onClick={() => setClicked(!clicked)}
    >
      <figure><img src={skill.image} alt={skill.title} className="h-40 w-full object-contain" /></figure>
      <div className="card-body text-center">
        <h2 className="card-title justify-center">{skill.title}</h2>
        <p>{skill.description}</p>
      </div>
    </motion.div>
  );
}
