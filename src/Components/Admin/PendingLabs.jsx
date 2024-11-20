import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './PendingLabs.css';

const PendingLabs = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      if (!token) {
        navigate('/login');
        return;
      }

      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/bookings/pending`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setBookings(response.data);
    } catch (err) {
      setError('Failed to fetch bookings');
      if (err.response?.status === 401) {
        navigate('/login');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleBookingAction = async (bookingId, action) => {
    try {
      const token = localStorage.getItem('adminToken');
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/bookings/${bookingId}/${action}`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      // Remove the processed booking from the list
      setBookings(bookings.filter(booking => booking._id !== bookingId));
    } catch (err) {
      setError(`Failed to ${action} booking`);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="dashboard-container">
      <h1>Pending Lab Bookings</h1>
      {error && <div className="error-message">{error}</div>}
      <table className="bookings-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Lab</th>
            <th>Date</th>
            <th>Time</th>
            <th>Faculty</th>
            <th>Equipment</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking._id}>
              <td>{booking.name}</td>
              <td>{booking.email}</td>
              <td>{booking.lab}</td>
              <td>{new Date(booking.date).toLocaleDateString()}</td>
              <td>{`${booking.startTime} - ${booking.endTime}`}</td>
              <td>{booking.selectedFaculty.join(', ')}</td>
              <td>{booking.equipment.join(', ')}</td>
              <td>
                <button 
                  className="accept-btn"
                  onClick={() => handleBookingAction(booking._id, 'approve')}
                >
                  ✓
                </button>
                <button 
                  className="reject-btn"
                  onClick={() => handleBookingAction(booking._id, 'reject')}
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

export default PendingLabs;