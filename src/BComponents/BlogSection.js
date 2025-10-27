import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dev.to/api/articles?username=akash_roy_3bc76e473db5e40&per_page=3', {
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
        // Silently handle errors in production
        setLoading(false);
      });
  }, []);

  return (
    <section id="blogs" className="px-4 sm:px-6 py-8 sm:py-12 text-white">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8 sm:mb-12"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">Blogs</h2>
        <div className="h-1 w-12 bg-cyan-400 mx-auto mb-4 rounded-full" />
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto px-4">
          Technical insights and DevOps knowledge sharing
        </p>
      </motion.div>
      {loading ? (
        <p className="text-gray-400">Loading latest blogs...</p>
      ) : blogs.length === 0 ? (
        <p className="text-gray-400">No blogs found.</p>
      ) : (
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-6 md:grid-cols-2">
            {blogs.map((blog, index) => (
              <motion.a
                key={blog.id}
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="block p-6 rounded-xl card hover:shadow-lg transition-all duration-300"
                aria-label={`Read blog titled ${blog.title}`}
              >
                <h3 className="text-lg font-semibold text-white mb-2">{blog.title}</h3>
                <p className="text-sm text-gray-400 line-clamp-3">{blog.description}</p>
                <span className="block mt-4 text-cyan-400 text-sm font-medium">Read More →</span>
              </motion.a>
            ))}
          </div>
        </div>
      )}

      <div className="mt-6 text-center">
        <a
          href="https://dev.to/akash_roy_3bc76e473db5e40"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:underline font-medium"
        >
          More Blogs →
        </a>
      </div>
    </section>
  );
};

export default BlogSection;
