import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import API from '../../services/api';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await API.get('/posts');
      setPosts(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const deletePost = async (id) => {
    if (window.confirm('Are you sure?')) {
      try {
        await API.delete(`/posts/${id}`);
        fetchPosts();
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
          <h1 className="text-3xl font-bold text-white">Blog Posts</h1>
          <Link to="/admin/posts/new" className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded">
            + New Post
          </Link>
        </div>
        <div className="space-y-4">
          {posts.map(post => (
            <div key={post._id} className="bg-gray-800 p-4 rounded flex justify-between items-center">
              <div>
                <h3 className="text-white font-semibold">{post.title}</h3>
                <p className="text-gray-400 text-sm">{new Date(post.createdAt).toLocaleDateString()}</p>
              </div>
              <div className="space-x-2">
                <Link to={`/admin/posts/edit/${post._id}`} className="text-blue-400 hover:underline">Edit</Link>
                <button onClick={() => deletePost(post._id)} className="text-red-400 hover:underline">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostList;