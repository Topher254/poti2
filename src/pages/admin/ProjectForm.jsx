import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import API from '../../services/api';

const ProjectForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    content: '',
    technologies: [],
    githubUrl: '',
    liveUrl: '',
    category: 'software',
    image: '',
    attachments: []
  });
  const [loading, setLoading] = useState(false);
  const [fileUploading, setFileUploading] = useState(false);
  const [techString, setTechString] = useState('');

  useEffect(() => {
    if (id) {
      fetchProject();
    }
  }, [id]);

  const fetchProject = async () => {
    try {
      const res = await API.get(`/projects/${id}`);
      setFormData(res.data);
      setTechString(res.data.technologies.join(', '));
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTechChange = (e) => {
    setTechString(e.target.value);
    setFormData({ ...formData, technologies: e.target.value.split(',').map(t => t.trim()) });
  };

  const handleFileUpload = async (e, type) => {
    const file = e.target.files[0];
    if (!file) return;
    const form = new FormData();
    form.append('file', file);
    setFileUploading(true);
    try {
      const res = await API.post('/upload', form);
      if (type === 'image') {
        setFormData({ ...formData, image: res.data.path });
      } else {
        setFormData({ ...formData, attachments: [...formData.attachments, res.data] });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setFileUploading(false);
    }
  };

  const removeAttachment = (index) => {
    const newAttachments = [...formData.attachments];
    newAttachments.splice(index, 1);
    setFormData({ ...formData, attachments: newAttachments });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (id) {
        await API.put(`/projects/${id}`, formData);
      } else {
        await API.post('/projects', formData);
      }
      navigate('/admin/projects');
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-black min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-6">{id ? 'Edit Project' : 'New Project'}</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-300 mb-2">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full bg-gray-800 text-white px-4 py-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="3"
              className="w-full bg-gray-800 text-white px-4 py-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Technologies (comma separated)</label>
            <input
              type="text"
              value={techString}
              onChange={handleTechChange}
              placeholder="React, Node.js, MongoDB"
              className="w-full bg-gray-800 text-white px-4 py-2 rounded"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-300 mb-2">GitHub URL</label>
              <input
                type="url"
                name="githubUrl"
                value={formData.githubUrl}
                onChange={handleChange}
                className="w-full bg-gray-800 text-white px-4 py-2 rounded"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Live URL</label>
              <input
                type="url"
                name="liveUrl"
                value={formData.liveUrl}
                onChange={handleChange}
                className="w-full bg-gray-800 text-white px-4 py-2 rounded"
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full bg-gray-800 text-white px-4 py-2 rounded"
            >
              <option value="software">Software</option>
              <option value="networking">Networking</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Project Image</label>
            <input
              type="file"
              onChange={(e) => handleFileUpload(e, 'image')}
              disabled={fileUploading}
              className="text-gray-300"
            />
            {formData.image && (
              <div className="mt-2">
                <img src={formData.image} alt="preview" className="h-32 w-auto object-cover rounded" />
              </div>
            )}
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Attachments (PKT, PDF, DOC, etc.)</label>
            <input
              type="file"
              onChange={(e) => handleFileUpload(e, 'attachment')}
              disabled={fileUploading}
              className="text-gray-300"
            />
            {fileUploading && <p className="text-gray-400 text-sm mt-1">Uploading...</p>}
            <div className="mt-2 space-y-2">
              {formData.attachments.map((att, idx) => (
                <div key={idx} className="flex justify-between items-center bg-gray-800 p-2 rounded">
                  <a href={att.path} target="_blank" rel="noopener noreferrer" className="text-blue-400">
                    {att.originalName}
                  </a>
                  <button
                    type="button"
                    onClick={() => removeAttachment(idx)}
                    className="text-red-400 text-sm"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded"
          >
            {loading ? 'Saving...' : 'Save'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProjectForm;