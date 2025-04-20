// src/BComponents/BlogCard.js
import React from 'react';

const BlogCard = ({ title, excerpt, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className="blog-card">
    <h3 className="blog-title">{title}</h3>
    <p className="blog-excerpt">{excerpt}</p>
    <span className="blog-readmore">Read More →</span>
  </a>
);

export default BlogCard;