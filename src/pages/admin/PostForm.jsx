import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import API from '../../services/api'
import Toast from '../../components/Toast';

const PostForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    excerpt: '',
    category: 'networking',
    attachments: []
  });
  const [loading, setLoading] = useState(false);
  const [fileUploading, setFileUploading] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (id) fetchPost();
  }, [id]);

  const fetchPost = async () => {
    setLoading(true);
    try {
      const res = await API.get(`/posts/${id}`);
      setFormData(res.data);
    } catch (err) {
      setToast({ message: 'Failed to load post', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleContentChange = (value) => setFormData({ ...formData, content: value });

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const form = new FormData();
    form.append('file', file);
    setFileUploading(true);
    try {
      const res = await API.post('/upload', form);
      setFormData({
        ...formData,
        attachments: [...formData.attachments, res.data]
      });
      setToast({ message: 'File uploaded', type: 'success' });
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
        await API.put(`/posts/${id}`, formData);
        setToast({ message: 'Post updated!', type: 'success' });
      } else {
        await API.post('/posts', formData);
        setToast({ message: 'Post created!', type: 'success' });
      }
      setTimeout(() => navigate('/admin/posts'), 1500);
    } catch (err) {
      setToast({ message: err.response?.data?.error || 'Save failed', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image'],
      ['code-block'],
      ['clean']
    ]
  };

  return (
    <div className="bg-black min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-6">{id ? 'Edit Post' : 'New Post'}</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-300 mb-2">Title</label>
            <input type="text" name="title" value={formData.title} onChange={handleChange} className="w-full bg-gray-800 text-white px-4 py-2 rounded" required />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Excerpt</label>
            <textarea name="excerpt" value={formData.excerpt} onChange={handleChange} rows="3" className="w-full bg-gray-800 text-white px-4 py-2 rounded" required />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Category</label>
            <select name="category" value={formData.category} onChange={handleChange} className="w-full bg-gray-800 text-white px-4 py-2 rounded">
              <option value="networking">Networking</option>
              <option value="software">Software</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Content</label>
            <ReactQuill theme="snow" value={formData.content} onChange={handleContentChange} modules={modules} className="bg-white text-black rounded" />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Attachments</label>
            <input type="file" onChange={handleFileUpload} disabled={fileUploading} className="text-gray-300" />
            {fileUploading && <p className="text-gray-400 text-sm mt-1">Uploading...</p>}
            <div className="mt-2 space-y-2">
              {formData.attachments.map((att, idx) => (
                <div key={idx} className="flex justify-between items-center bg-gray-800 p-2 rounded">
                  <a href={att.path} target="_blank" rel="noopener noreferrer" className="text-blue-400">{att.originalName}</a>
                  <button type="button" onClick={() => removeAttachment(idx)} className="text-red-400 text-sm">Remove</button>
                </div>
              ))}
            </div>
          </div>
          <button type="submit" disabled={loading} className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded disabled:opacity-50">
            {loading ? 'Saving...' : 'Save'}
          </button>
        </form>
      </div>
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </div>
  );
};

export default PostForm;