import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import './NewBlog.css';

const NewBlog = () => {
  const [formData, setFormData] = useState({
    author: '',
    email: '',
    title: '',
    content: '',
    image: null
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [resetQuill, setResetQuill] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
    setSuccess('');
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0]
    });
    setError('');
    setSuccess('');
  };

  const handleEditorChange = (content) => {
    setFormData({
      ...formData,
      content: content
    });
    setError('');
    setSuccess('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('author', formData.author);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('title', formData.title);
      formDataToSend.append('content', formData.content);
      if (formData.image) formDataToSend.append('image', formData.image);

      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/blogs`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      //if (response.status === 201) {
        //alert('Blog post submitted for approval!');
        setSuccess('Blog post submitted for approval!');
        setFormData({
          author: '',
          email: '',
          title:'',
          content: '',
          image: null
        });
        setResetQuill(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      //}
    } catch (error) {
      console.error('Error submitting blog:', error);
      setError('Error submitting blog post. Please try again.');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } finally {
      
      setLoading(false);
    }
  };
  useEffect(() => {
    if (resetQuill) {
        setResetQuill(false);
    }
  }, [resetQuill]);
  useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => {
        setSuccess('');
        setError('');
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [success, error]);

  return (
    <div className="blog-container">
      
      <h1 className="blog-title">Create New Blog Post</h1>
      {error && 
        <div className="error-message">
          {error}
        </div>
      }
      {success && 
        <div className="success-message">
          {success}
        </div>
      }
      <form onSubmit={handleSubmit} className="blog-form">
        <div className="form-group">
          <label>Author</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Cover image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            //required
          />
        </div>

        <div className="form-group">
          <label>Content</label>
          <ReactQuill
            value={formData.content}
            onChange={handleEditorChange}
            className="editor"
            modules={{
              toolbar: [
                [{ 'header': '1'}, {'header': '2'}],
                ['bold', 'italic', 'underline', 'strike'],
                [{'list': 'ordered'}, {'list': 'bullet'}],
                ['link', 'image'],
                ['clean']
              ]
            }}
            key={resetQuill ? 'reset' : 'default'}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`submit-button ${loading ? 'loading' : ''}`}
        >
          {loading ? 'Submitting...' : 'Submit Blog'}
        </button>
      </form>
    </div>
  );
};

export default NewBlog;