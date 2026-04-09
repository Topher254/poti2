import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import API from '../../services/api';
import Toast from '../../components/Toast';

const ProjectForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',          // short excerpt
    content: '',              // rich text detailed explanation
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
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (id) {
      fetchProject();
    }
  }, [id]);

  const fetchProject = async () => {
    setLoading(true);
    try {
      const res = await API.get(`/projects/${id}`);
      setFormData(res.data);
      setTechString(res.data.technologies?.join(', ') || '');
    } catch (err) {
      setToast({ message: 'Failed to load project', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleContentChange = (value) => {
    setFormData({ ...formData, content: value });
  };

  const handleTechChange = (e) => {
    setTechString(e.target.value);
    setFormData({ ...formData, technologies: e.target.value.split(',').map(t => t.trim()).filter(t => t) });
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
        setToast({ message: 'Image uploaded', type: 'success' });
      } else {
        setFormData({ ...formData, attachments: [...formData.attachments, res.data] });
        setToast({ message: 'File uploaded', type: 'success' });
      }
    } catch (err) {
      setToast({ message: 'Upload failed', type: 'error' });
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
        setToast({ message: 'Project updated!', type: 'success' });
      } else {
        await API.post('/projects', formData);
        setToast({ message: 'Project created!', type: 'success' });
      }
      setTimeout(() => navigate('/admin/projects'), 1500);
    } catch (err) {
      setToast({ message: err.response?.data?.error || 'Save failed', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image'],
      ['code-block'],
      ['clean']
    ]
  };

  if (loading && id) {
    return <div className="bg-black min-h-screen flex items-center justify-center text-white">Loading project...</div>;
  }

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
            <label className="block text-gray-300 mb-2">Short Description (excerpt)</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="3"
              className="w-full bg-gray-800 text-white px-4 py-2 rounded"
              placeholder="Brief summary of the project"
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Detailed Project Explanation</label>
            <ReactQuill
              theme="snow"
              value={formData.content}
              onChange={handleContentChange}
              modules={modules}
              className="bg-white text-black rounded"
              placeholder="Describe what you did, how you did it, challenges, solutions, etc."
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
            {fileUploading && <p className="text-gray-400 text-sm mt-1">Uploading...</p>}
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
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded disabled:opacity-50"
          >
            {loading ? 'Saving...' : 'Save'}
          </button>
        </form>
      </div>
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </div>
  );
};

export default ProjectForm;