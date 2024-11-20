import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check for adminToken and redirect to login if not found
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  const handleCardClick = (path) => {
    navigate(`/admin/dashboard/${path}`);
  };

  return (
    <div className="dashboard-container">
      <h1>Admin Dashboard</h1>
      <div className="dashboard-cards">
        <div className="dashboard-card" onClick={() => handleCardClick('labs')}>
          <h2>Labs</h2>
          <p>Manage and review lab submissions.</p>
        </div>
        <div className="dashboard-card" onClick={() => handleCardClick('blogs')}>
          <h2>Blogs</h2>
          <p>Manage and review blog posts.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
