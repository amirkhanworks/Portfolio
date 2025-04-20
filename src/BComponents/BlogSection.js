import React, { useEffect, useState } from 'react';

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
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <section id="blogs" className="mb-16 px-6 md:px-12">
      <h2 className="text-2xl font-bold mb-6">Blogs</h2>
      {loading ? (
        <p className="text-gray-400">Loading latest blogs...</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {blogs.map((blog) => (
            <a
              key={blog.id}
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-lg bg-[#121427] hover:bg-[#1c1e36] transition-all"
            >
              <h3 className="text-lg font-semibold text-white mb-2">{blog.title}</h3>
              <p className="text-sm text-gray-400">{blog.description}</p>
              <span className="block mt-4 text-cyan-400 text-sm">Read More →</span>
            </a>
          ))}
        </div>
      )}
      <div className="mt-6 text-right">
        <a
          href="https://dev.to/akash_roy_3bc76e473db5e40"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:underline"
        >
          More Blogs →
        </a>
      </div>
    </section>
  );
};

export default BlogSection;
