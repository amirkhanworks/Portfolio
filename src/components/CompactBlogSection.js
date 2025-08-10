import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, BookOpen } from 'lucide-react';

const CompactBlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dev.to/api/articles?username=akash_roy_3bc76e473db5e40&per_page=2', {
      cache: 'no-store'
    })
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch blogs');
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="w-full mt-6 pt-6 border-t border-cyan-700/30"
    >
      <div className="flex items-center gap-2 mb-4">
        <BookOpen size={16} className="text-cyan-400" />
        <h3 className="text-sm font-semibold text-white">Latest Blogs</h3>
      </div>
      
      {loading ? (
        <p className="text-xs text-gray-400">Loading...</p>
      ) : blogs.length === 0 ? (
        <p className="text-xs text-gray-400">No blogs found.</p>
      ) : (
        <div className="space-y-3">
          {blogs.map((blog, index) => (
            <motion.a
              key={blog.id}
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.4, duration: 0.3 }}
              className="block p-3 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-colors group"
              aria-label={`Read blog titled ${blog.title}`}
            >
              <h4 className="text-xs font-medium text-white mb-1 line-clamp-2 group-hover:text-cyan-300 transition-colors">
                {blog.title}
              </h4>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400">
                  {new Date(blog.published_at).toLocaleDateString()}
                </span>
                <ExternalLink size={12} className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.a>
          ))}
          
          <motion.a
            href="https://dev.to/akash_roy_3bc76e473db5e40"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.3 }}
            className="inline-flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 transition-colors mt-2"
          >
            <span>View All</span>
            <ExternalLink size={10} />
          </motion.a>
        </div>
      )}
    </motion.div>
  );
};

export default CompactBlogSection;
