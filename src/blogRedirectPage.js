import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import BlogSection from './BComponents/BlogSection';

const BlogRedirectApp = () => (
  <div className="min-h-screen bg-[#0e0f23] text-white font-sans px-6 md:px-12 py-10">
    <section id="blogs" className="mb-16">
      <BlogSection />
    </section>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BlogRedirectApp />);
