import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="card w-full bg-base-100 shadow-xl transition-transform duration-300"
    >
      <figure><img src={project.image} alt={project.title} className="h-48 w-full object-cover" /></figure>
      <div className="card-body">
        <h2 className="card-title">{project.title}</h2>
        <p>{project.description.substring(0, 100)}...</p>
        <div className="card-actions justify-end">
          <Link to={`/projects/${project._id}`} className="btn btn-primary">Show More</Link>
        </div>
      </div>
    </motion.div>
  );
}
