import React, { useEffect, useState } from 'react';
import SkillCard from '../components/SkillCard';

export default function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/skills') 
      .then(res => res.json())
      .then(data => setSkills(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold text-center mb-10">My Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skills.map(skill => (
          <SkillCard key={skill._id} skill={skill} />
        ))}
      </div>
    </div>
  );
}
