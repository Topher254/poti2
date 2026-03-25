import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import API from '../../services/api';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await API.get('/projects');
      setProjects(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const deleteProject = async (id) => {
    if (window.confirm('Are you sure?')) {
      try {
        await API.delete(`/projects/${id}`);
        fetchProjects();
      } catch (err) {
        console.error(err);
      }
    }
  };

  if (loading) return <div className="bg-black text-white p-8">Loading...</div>;

  return (
    <div className="bg-black min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Projects</h1>
          <Link to="/admin/projects/new" className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded">
            + New Project
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
            <div key={project._id} className="bg-gray-800 rounded-lg overflow-hidden">
              {project.image && (
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              )}
              <div className="p-4">
                <h3 className="text-white font-semibold text-lg mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-3 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.technologies && project.technologies.map((tech, i) => (
                    <span key={i} className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">{tech}</span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className={`text-xs px-2 py-1 rounded ${project.category === 'software' ? 'bg-blue-600' : 'bg-green-600'}`}>
                    {project.category}
                  </span>
                  <div className="space-x-2">
                    <Link to={`/admin/projects/edit/${project._id}`} className="text-blue-400 hover:underline text-sm">Edit</Link>
                    <button onClick={() => deleteProject(project._id)} className="text-red-400 hover:underline text-sm">Delete</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectList;