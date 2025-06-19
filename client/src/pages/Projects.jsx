import React, { useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('https://backend.ashraful.in/projects')
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-5">
     <h1 className="text-3xl font-bold text-center mb-10">Creator’s Desk PrimeWorks</h1>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map(project => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
}