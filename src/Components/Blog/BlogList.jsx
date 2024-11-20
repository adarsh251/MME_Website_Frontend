import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { formatDate, truncateText } from './utils';
import defaultBlogImage from '../../assets/Blog default.jpg'
import './BlogList.css';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    console.log(import.meta.env.VITE_BACKEND_URL+"test");
    try {
      console.log(import.meta.env.VITE_APP_BACKEND_URL+"test");
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/blogs`);
      if (!response.ok) {
        console.log(response);
        throw new Error('Failed to fetch blogs');
      }
      const data = await response.json();
      setBlogs(data);
      setError('');
    } catch (err) {
      console.log(import.meta.env.VITE_APP_BACKEND_URL+"test");
      console.log(error);
      setError('Failed to fetch blogs. Please try again later.');
      console.error('Error fetching blogs:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredBlogs = blogs.filter((blog) =>
    blog?.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleNewBlog = () => {
    navigate('/blog/new');
  };

  if (loading) {
    return (
      <div className="blogs-loading">
        <div className="loading-text">Loading blogs...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="blogs-error">
        {error}
      </div>
    );
  }

  return (
    <div className="blogs-container">
      <div className="blogs-header">
        <h1 className="blogs-title">Blog Posts</h1>
        <div className="blogs-controls">
          <input
            type="text"
            placeholder="Search by title..."
            className="search-input"
            value={searchTerm}
            onChange={handleSearch}
          />
          <button className="new-blog-button" onClick={handleNewBlog}>
            + New Blog
          </button>
        </div>
      </div>
      
      {filteredBlogs.length > 0 ? (
        <div className="blogs-grid">
          {filteredBlogs.map((blog) => (
            <article key={blog._id} className="blog-card">
              <Link to={`/blog/${blog._id}`} className="blog-link">
              <div className="blog-image-container">
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
              
              <div className="blog-content">
                <h2 className="blog-title">{blog.title}</h2> {/* Display title */}

                
                <div className="blog-preview">
                  {truncateText(blog.content.replace(/<[^>]+>/g, ''), 200)}
                </div>
                
                <span className="read-more">Read More →</span>
                <div className="blog-header">
                  <h3 className="blog-author">By {blog.author}</h3>
                  <time className="blog-date">
                    {formatDate(blog.createdAt)}
                  </time>
                </div>
              </div>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <div className="blogs-empty">
          No blogs found. Check back later!
        </div>
      )}
    </div>
  );
};

export default BlogList;
