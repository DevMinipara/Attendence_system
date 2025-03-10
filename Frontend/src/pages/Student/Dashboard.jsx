import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const [studentName] = useState("John Doe");
  const [showHistory, setShowHistory] = useState(false);

  // Sample attendance data
  const attendanceData = {
    totalClasses: 30,
    classesAttended: 25,
    percentage: 83.33
  };

  // Sample attendance history data
  const attendanceHistory = [
    {
      date: "2024-03-10",
      time: "10:30 AM",
      subject: "Data Structures",
      status: "Present"
    },
    {
      date: "2024-03-09",
      time: "11:30 AM",
      subject: "Database Management",
      status: "Present"
    },
    {
      date: "2024-03-08",
      time: "09:30 AM",
      subject: "Web Development",
      status: "Absent"
    }
  ];

  const handleAttendanceClick = () => {
    setShowHistory(!showHistory);
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
          <button onClick={() => navigate('/scan')} className="scan-qr-btn">
            <i className="fas fa-qrcode"></i>
            <span>Scan QR Code</span>
          </button>
        </div>

        <div className="dashboard-stats">
          <div className="stat-card">
            <h3>Total Classes</h3>
            <p>{attendanceData.totalClasses}</p>
          </div>
          <div className="stat-card clickable" onClick={handleAttendanceClick}>
            <h3>Classes Attended</h3>
            <p>{attendanceData.classesAttended}</p>
          </div>
          <div className="stat-card">
            <h3>Attendance Percentage</h3>
            <p>{attendanceData.percentage}%</p>
          </div>
        </div>

        {showHistory && (
          <div className="attendance-history">
            <div className="history-header">
              <h2>Attendance History</h2>
              <button className="close-history" onClick={() => setShowHistory(false)}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            <table className="history-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Subject</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {attendanceHistory.map((record, index) => (
                  <tr key={index}>
                    <td>{record.date}</td>
                    <td>{record.time}</td>
                    <td>{record.subject}</td>
                    <td>
                      <span className={`status-badge ${record.status.toLowerCase()}`}>
                        {record.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;