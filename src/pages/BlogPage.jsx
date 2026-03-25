import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { Calendar, User, BookOpen } from 'lucide-react';
import API from '../services/api';

const BlogPage = () => {
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

  if (loading) return <div className="bg-black min-h-screen flex items-center justify-center text-white">Loading posts...</div>;

  return (
    <div className="bg-black min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-white">Networking </span>
            <span className="text-purple-500">Blog</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Daily insights, tutorials, and hands‑on experiences in telecommunications and networking.
          </p>
        </div>

        <div className="space-y-8">
          {posts.map(post => (
            <div key={post._id} className="bg-gray-800 rounded-lg p-6 hover:transform hover:scale-102 transition-all duration-300">
              <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-400">
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  {new Date(post.createdAt).toLocaleDateString()}
                </span>
                <span className="flex items-center gap-1">
                  <User size={14} />
                  {post.author}
                </span>
                <span className="flex items-center gap-1">
                  <BookOpen size={14} />
                  {post.category === 'networking' ? 'Networking' : 'Software'}
                </span>
              </div>
              <h2 className="text-white text-2xl font-semibold mb-3">{post.title}</h2>
              <p className="text-gray-400 mb-4">{post.excerpt}</p>
              <Link to={`/blog/${post._id}`} className="text-purple-500 hover:text-purple-400 font-medium">
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;