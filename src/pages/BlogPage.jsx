import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { Calendar, User, BookOpen, ChevronRight } from 'lucide-react';
import API from '../services/api';

const BlogPage = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [displayedPosts, setDisplayedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);
  const postsPerLoad = 6;

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await API.get('/posts');
      setAllPosts(res.data);
      setDisplayedPosts(res.data.slice(0, visibleCount));
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = () => {
    setLoadingMore(true);
    setTimeout(() => {
      const newCount = visibleCount + postsPerLoad;
      setVisibleCount(newCount);
      setDisplayedPosts(allPosts.slice(0, newCount));
      setLoadingMore(false);
    }, 500); // small delay for better UX
  };

  const hasMore = displayedPosts.length < allPosts.length;

  // Loading skeleton
  if (loading) {
    return (
      <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="h-12 w-64 bg-gray-800 rounded-lg animate-pulse mx-auto mb-4"></div>
            <div className="h-6 w-96 bg-gray-800 rounded-lg animate-pulse mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-gray-800/50 rounded-xl overflow-hidden animate-pulse">
                <div className="h-48 bg-gray-700"></div>
                <div className="p-6 space-y-3">
                  <div className="h-6 bg-gray-700 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-700 rounded w-full"></div>
                  <div className="h-4 bg-gray-700 rounded w-5/6"></div>
                  <div className="h-8 bg-gray-700 rounded w-24 mt-4"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (allPosts.length === 0) {
    return (
      <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen flex items-center justify-center">
        <div className="text-center text-gray-400">
          <BookOpen size={48} className="mx-auto mb-4 opacity-50" />
          <h2 className="text-2xl font-semibold mb-2">No posts yet</h2>
          <p>Check back soon for new articles!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
        
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-white">Networking </span>
            <span className="bg-purple-400  bg-clip-text text-transparent">Blog</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Daily insights, tutorials, and hands‑on experiences in telecommunications and networking.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedPosts.map((post, index) => (
            <div
              key={post._id}
              className="group bg-gray-800/60  rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:cursor-pointer border border-gray-700/50"
              style={{ animationDelay: `${index * 0.05}s` }}
            >

              <div className="p-6">
                {/* Meta info */}
                <div className="flex flex-wrap items-center gap-3 mb-4 text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {new Date(post.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                  </span>
                  <span className="flex items-center gap-1">
                    <User size={12} />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-1 px-2 py-0.5 bg-gray-700 rounded-full">
                    <BookOpen size={12} />
                    {post.category === 'networking' ? 'Networking' : 'Software'}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-white mb-3 line-clamp-2  ">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

            <Link to={`/blog/${post.slug}`} className="text-purple-500 hover:text-purple-400 font-medium">
  Read More →
</Link>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="text-center mt-12">
            <button
              onClick={loadMore}
              disabled={loadingMore}
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 mx-auto"
            >
              {loadingMore ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Loading...
                </>
              ) : (
                <>Load More</>
              )}
            </button>
          </div>
        )}

        {/* End of content message */}
        {!hasMore && allPosts.length > 0 && (
          <div className="text-center mt-12 text-gray-500 text-sm">
            — You've reached the end —
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;