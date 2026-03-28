import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router';
import { Calendar, User, BookOpen, Download, Share2, Facebook, Twitter, Linkedin, Mail, Link as LinkIcon, FileText, Check } from 'lucide-react';
import API from '../services/api';

const PostDetail = () => {
  const { slug } = useParams();                 // changed from id to slug
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showShareTop, setShowShareTop] = useState(false);
  const [showShareBottom, setShowShareBottom] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  useEffect(() => {
    fetchPost();
    // eslint-disable-next-line
  }, [slug]);                                    // dependency changed to slug

  const fetchPost = async () => {
    try {
      const res = await API.get(`/posts/${slug}`);
      setPost(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const shareUrl = window.location.href;
  const shareTitle = post?.title || 'Check out this post';
  const shareText = post?.excerpt || '';

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareTitle)}&summary=${encodeURIComponent(shareText)}`,
    email: `mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(shareUrl)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(shareTitle + ' ' + shareUrl)}`
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const downloadAsPDF = () => {
    window.print();
  };

  const ShareDropdown = ({ show, setShow, position = 'bottom' }) => (
    <div className="relative">
      <button
        onClick={() => setShow(!show)}
        className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors bg-gray-800 px-3 py-1.5 rounded-lg"
      >
        <Share2 size={16} />
        Share
      </button>
      {show && (
        <div className={`absolute ${position === 'bottom' ? 'right-0 mt-2' : 'right-0 mb-2 bottom-full'} bg-gray-800 rounded-lg shadow-xl p-2 z-10 flex gap-2 border border-gray-700`}>
          <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-gray-700 rounded transition-colors text-blue-400">
            <Facebook size={18} />
          </a>
          <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-gray-700 rounded transition-colors text-blue-400">
            <Twitter size={18} />
          </a>
          <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-gray-700 rounded transition-colors text-blue-600">
            <Linkedin size={18} />
          </a>
          <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-gray-700 rounded transition-colors text-green-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
            </svg>
          </a>
          <a href={shareLinks.email} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-gray-700 rounded transition-colors text-gray-300">
            <Mail size={18} />
          </a>
          <button
            onClick={copyToClipboard}
            className="p-2 hover:bg-gray-700 rounded transition-colors text-gray-300 relative"
            title="Copy link"
          >
            {copySuccess ? <Check size={18} className="text-green-400" /> : <LinkIcon size={18} />}
          </button>
        </div>
      )}
    </div>
  );

  if (loading) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center">
        <div className="text-white text-xl animate-pulse">Loading post...</div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center">
        <div className="text-white text-xl">Post not found</div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mb-6 group"
        >
          <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Blog
        </Link>

        <div className="bg-gray-200/80 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-gray-700">
          <div className="p-6 md:p-8">
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-black mb-4 leading-tight">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center justify-between gap-4 text-gray-600 text-sm border-b border-gray-700 pb-4">
                <div className="flex flex-wrap gap-4">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {new Date(post.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
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
                <ShareDropdown show={showShareTop} setShow={setShowShareTop} position="bottom" />
              </div>
            </div>

            <div className="prose prose-invert prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            {post.attachments && post.attachments.length > 0 && (
              <div className="mt-8 border-t border-gray-700 pt-6">
                <h3 className="text-white text-lg font-semibold mb-3 flex items-center gap-2">
                  <Download size={18} /> Attachments
                </h3>
                <ul className="space-y-2">
                  {post.attachments.map((att, idx) => (
                    <li key={idx}>
                      <a
                        href={att.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors bg-gray-700/50 px-3 py-1.5 rounded-lg"
                      >
                        <Download size={14} />
                        {att.originalName}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-8 pt-6 border-t border-gray-700 flex flex-wrap items-center justify-between gap-4">
              <div className="flex gap-3">
                <ShareDropdown show={showShareBottom} setShow={setShowShareBottom} position="top" />
                <button
                  onClick={downloadAsPDF}
                  className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors bg-gray-800 px-3 py-1.5 rounded-lg"
                >
                  <FileText size={16} />
                  Save as PDF
                </button>
              </div>
              <div className="text-sm text-gray-500">
                {new Date(post.createdAt).toLocaleDateString()} · {post.category}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm mt-8">
          © {new Date().getFullYear()} Sarota Raphael. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default PostDetail;