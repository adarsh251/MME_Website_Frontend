import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './PendingBlogs.css';

const PendingBlogs = () => {
  const [pendingBlogs, setPendingBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchPendingBlogs();
  }, []);

  const fetchPendingBlogs = async () => {
    try {
        console.log("fetch");
        const token = localStorage.getItem('adminToken');
        if (!token) {
            navigate('/login');
            return;
        }
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/blogs/pending`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setPendingBlogs(response.data);
    } catch (err) {
      setError('Failed to fetch pending blogs');
      if (err.response?.status === 401) {
        navigate('/login');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleBlogAccept = async (blogId) => {
    try {
      const token = localStorage.getItem('adminToken');
      await axios.patch(`${import.meta.env.VITE_BACKEND_URL}/api/blogs/${blogId}/approve`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      });

      // Remove the processed blog from the list
      setPendingBlogs(pendingBlogs.filter(blog => blog._id !== blogId));
    } catch (err) {
      setError(`Failed to approve blog`);
    }
  };

  const handleBlogDelete = async (blogId) => {
    try {
      const token = localStorage.getItem('adminToken');
      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/blogs/${blogId}`,{
        headers: { Authorization: `Bearer ${token}` }
      });
      // Remove the processed blog from the list
      setPendingBlogs(pendingBlogs.filter(blog => blog._id !== blogId));
    } catch (err) {
      setError(`Failed to delete blog`);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="pending-blogs-container">
      <h1>Pending Blogs</h1>
      {error && <div className="error-message">{error}</div>}
      <table className="pending-blogs-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Content</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {pendingBlogs.map((blog) => (
            <tr key={blog._id}>
              <td>{blog.title}</td>
              <td>{blog.author}</td>
              <td><div
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                /></td>
              <td>
                <button
                  className="approve-btn"
                  onClick={() => handleBlogAccept(blog._id)}
                >
                  ✓
                </button>
                <button
                  className="reject-btn"
                  onClick={() => handleBlogDelete(blog._id)}
                >
                  ✗
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PendingBlogs;