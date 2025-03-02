import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const [studentName] = useState("John Doe"); // Replace with actual student name

  const handleScanQR = () => {
    navigate('/scan-qr');
  };

  return (
    <div className="dashboard-container">
      {/* Navigation Bar */}
      <nav className="dashboard-nav">
        <div className="nav-left">
          <img src="/logo.png" alt="Logo" className="nav-logo" />
        </div>
        <div className="nav-links">
          <Link to="/StudentDashboard" className="nav-link active">
            <i className="fas fa-home"></i> Dashboard
          </Link>
          <Link to="/attendance" className="nav-link">
            <i className="fas fa-clipboard-check"></i> Attendance
          </Link>
          <Link to="/timetable" className="nav-link">
            <i className="fas fa-calendar-alt"></i> Timetable
          </Link>
        </div>
        <div className="nav-right">
          <button onClick={() => navigate('/login')} className="logout-btn">
            <i className="fas fa-sign-out-alt"></i> Logout
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="dashboard-content">
        <div className="welcome-section">
          <h1>Welcome, {studentName}</h1>
          <p>Access your attendance and schedule information here</p>
        </div>

        <div className="quick-actions">
          <button onClick={handleScanQR} className="scan-qr-btn">
            <i className="fas fa-qrcode"></i>
            <span>Scan QR Code</span>
          </button>
        </div>

        <div className="dashboard-stats">
          <div className="stat-card">
            <h3>Total Classes</h3>
            <p>30</p>
          </div>
          <div className="stat-card">
            <h3>Classes Attended</h3>
            <p>25</p>
          </div>
          <div className="stat-card">
            <h3>Attendance Percentage</h3>
            <p>83.33%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;