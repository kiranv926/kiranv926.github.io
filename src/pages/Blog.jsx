import React from 'react';

const blogPosts = [
  {
    id: 1,
    title: 'TBD'
  }
];

const Blog = () => (
  <div className="page blog-page">
    <h1>Blog</h1>
    <div className="blog-list">
      {blogPosts.map(post => (
        <div className="blog-post" key={post.id}>
          <h2>{post.title}</h2>
          <p className="blog-date">{post.date}</p>
          <p>{post.summary}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Blog; 