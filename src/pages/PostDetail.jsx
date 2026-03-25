import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router';
import { Calendar, User, BookOpen, Download } from 'lucide-react';
import API from '../services/api';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPost();
  }, [id]);

  const fetchPost = async () => {
    try {
      const res = await API.get(`/posts/${id}`);
      setPost(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="bg-black min-h-screen flex items-center justify-center text-white">Loading post...</div>;
  if (!post) return <div className="bg-black min-h-screen flex items-center justify-center text-white">Post not found</div>;

  return (
    <div className="bg-black min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <Link to="/blog" className="text-purple-500 hover:underline mb-4 inline-block">&larr; Back to Blog</Link>
        <div className="bg-gray-800 rounded-lg p-8">
          <div className="mb-6">
            <h1 className="text-4xl font-bold text-white mb-4">{post.title}</h1>
            <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
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
          </div>
          <div className="prose prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
          {post.attachments && post.attachments.length > 0 && (
            <div className="mt-8 border-t border-gray-700 pt-6">
              <h3 className="text-white text-lg font-semibold mb-3">Attachments</h3>
              <ul className="space-y-2">
                {post.attachments.map((att, idx) => (
                  <li key={idx}>
                    <a
                      href={att.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:underline flex items-center gap-2"
                    >
                      <Download size={16} />
                      {att.originalName}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostDetail;