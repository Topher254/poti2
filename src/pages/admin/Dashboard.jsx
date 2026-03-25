import React from 'react';
import { Link } from 'react-router';

const Dashboard = () => {
  return (
    <div className="bg-black min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link to="/admin/posts" className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition">
            <h2 className="text-xl font-semibold text-white">Manage Blog Posts</h2>
            <p className="text-gray-400 mt-2">Create, edit, or delete posts</p>
          </Link>
          <Link to="/admin/projects" className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition">
            <h2 className="text-xl font-semibold text-white">Manage Projects</h2>
            <p className="text-gray-400 mt-2">Add or update projects</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;