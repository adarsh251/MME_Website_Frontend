// src/components/BlogDetail/BlogDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { formatDate } from './utils';
import defaultBlogImage from '../../assets/Blog default.jpg';
import './BlogDetail.css';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchBlog();
  }, [id]);

  const fetchBlog = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/blogs/${id}`);
      if (!response.ok) {
        throw new Error('Blog not found');
      }
      const data = await response.json();
      setBlog(data);
      setError('');
    } catch (err) {
      setError('Failed to fetch blog. Please try again later.');
      console.error('Error fetching blog:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    navigate('/blog');
  };

  if (loading) {
    return (
      <div className="blog-detail-loading">
        <div className="loading-text">Loading blog...</div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="blog-detail-error">
        <div className="error-message">{error || 'Blog not found'}</div>
        <button onClick={handleBack} className="back-button">
          Back to Blogs
        </button>
      </div>
    );
  }

  return (
    <div className="blog-detail-container">
      <button onClick={handleBack} className="back-button">
        ← Back to Blogs
      </button>

      <article className="blog-detail">
        <div className="blog-detail-header">
          <h1 className="blog-detail-title">{blog.title}</h1>
          <div className="blog-detail-meta">
            <h1 className="blog-detail-author">By {blog.author}</h1>
            <time className="blog-detail-date">
              {formatDate(blog.createdAt)}
            </time>
          </div>
        </div>

        <div className="blog-detail-image-container">
          <img
                  src={`${import.meta.env.VITE_BACKEND_URL}/api/blogs/${blog._id}/image`}
                  alt={`Cover for ${blog.title} by ${blog.author}`}
                  className="blog-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = defaultBlogImage;
                    e.target.alt = 'Blog image placeholder';
                  }}
                />
        </div>

        <div 
          className="blog-detail-content"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </article>
    </div>
  );
};

export default BlogDetail;