import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [projectData, setProjectData] = useState({ title: '', description: '', image: '' });
  const [skillData, setSkillData] = useState({ title: '', description: '', image: null });

  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);

  // Fetch projects & skills on load
  useEffect(() => {
    fetchProjects();
    fetchSkills();
  }, []);

  const fetchProjects = async () => {
    const res = await fetch('https://backend.ashraful.in/projects');
    const data = await res.json();
    setProjects(data);
  };

  const fetchSkills = async () => {
    const res = await fetch('https://backend.ashraful.in/skills');
    const data = await res.json();
    setSkills(data);
  };

  // Project upload
  const handleProjectSubmit = async e => {
    e.preventDefault();
    const res = await fetch('https://backend.ashraful.in/project', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(projectData) 
    });
    if (res.ok) {
      alert('Project uploaded!');
      setProjectData({ title: '', description: '', image: '' });
      fetchProjects(); // refresh list
    }
  };

  // Skill upload (file upload)
  const handleSkillSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', skillData.title);
    formData.append('description', skillData.description);
    formData.append('image', skillData.image);

    const res = await fetch('https://backend.ashraful.in/skill-post', {
      method: 'POST',
      credentials: 'include',
      body: formData
    });
    if (res.ok) {
      alert('Skill uploaded!');
      setSkillData({ title: '', description: '', image: null });
      fetchSkills(); // refresh list
    }
  };

  // Project update (basic)
  const handleProjectUpdate = async (id) => {
    const updatedTitle = prompt("Enter new title:");
    const updatedDescription = prompt("Enter new description:");
    const updatedImage = prompt("Enter new image url:");

    const res = await fetch(`https://backend.ashraful.in/project-update/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ title: updatedTitle, description: updatedDescription, image: updatedImage })
    });

    if (res.ok) {
      alert('Project updated!');
      fetchProjects();
    }
  };

  // Skill update (only text+image url update, not file for simplicity)
  const handleSkillUpdate = async (id) => {
    const updatedTitle = prompt("Enter new title:");
    const updatedDescription = prompt("Enter new description:");
    const updatedImage = prompt("Enter image url or leave blank to keep same:");

    const res = await fetch(`https://backend.ashraful.in/skill-update/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ title: updatedTitle, description: updatedDescription, image: updatedImage })
    });

    if (res.ok) {
      alert('Skill updated!');
      fetchSkills();
    }
  };

  const handleLogout = async () => {
    await fetch('https://backend.ashraful.in/logout-admin', { method: 'POST', credentials: 'include' });
    navigate('/');
  };

  return (
    <div className="p-5 space-y-10">
      <h1 className="text-3xl font-bold text-center">Admin Dashboard</h1>

      {/* Project Upload */}
      <div className="card bg-base-100 shadow-xl p-5 max-w-xl mx-auto">
        <h2 className="text-xl font-bold mb-3">Add Project</h2>
        <form onSubmit={handleProjectSubmit} className="space-y-4">
          <input type="text" placeholder="Title" className="input input-bordered w-full" value={projectData.title}
            onChange={e => setProjectData({ ...projectData, title: e.target.value })} required />
          <textarea placeholder="Description" className="textarea textarea-bordered w-full"
            value={projectData.description}
            onChange={e => setProjectData({ ...projectData, description: e.target.value })} required />
          <input type="text" placeholder="Image URL" className="input input-bordered w-full" 
            value={projectData.image}
            onChange={e => setProjectData({ ...projectData, image: e.target.value })} required />
          <button className="btn btn-primary w-full">Submit Project</button>
        </form>
      </div>

      {/* Skill Upload */}
      <div className="card bg-base-100 shadow-xl p-5 max-w-xl mx-auto">
        <h2 className="text-xl font-bold mb-3">Add Skill</h2>
        <form onSubmit={handleSkillSubmit} className="space-y-4">
          <input type="text" placeholder="Title" className="input input-bordered w-full" value={skillData.title}
            onChange={e => setSkillData({ ...skillData, title: e.target.value })} required />
          <textarea placeholder="Description" className="textarea textarea-bordered w-full"
            value={skillData.description}
            onChange={e => setSkillData({ ...skillData, description: e.target.value })} required />
          <input type="file" className="file-input file-input-bordered w-full"
            onChange={e => setSkillData({ ...skillData, image: e.target.files[0] })} required />
          <button className="btn btn-primary w-full">Submit Skill</button>
        </form>
      </div>

      {/* Projects List */}
      <div className="card bg-base-100 shadow-xl p-5">
        <h2 className="text-xl font-bold mb-3">All Projects</h2>
        {projects.map(p => (
          <div key={p._id} className="flex justify-between items-center mb-2 border p-2 rounded">
            <div>{p.title}</div>
            <button className="btn btn-sm btn-outline" onClick={() => handleProjectUpdate(p._id)}>Edit</button>
          </div>
        ))}
      </div>

      {/* Skills List */}
      <div className="card bg-base-100 shadow-xl p-5">
        <h2 className="text-xl font-bold mb-3">All Skills</h2>
        {skills.map(s => (
          <div key={s._id} className="flex justify-between items-center mb-2 border p-2 rounded">
            <div>{s.title}</div>
            <button className="btn btn-sm btn-outline" onClick={() => handleSkillUpdate(s._id)}>Edit</button>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <button className="btn btn-error" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}
