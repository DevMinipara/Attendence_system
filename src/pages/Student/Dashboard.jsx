import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/");
  };

  return (
    <div>
      <h2>Student Dashboard</h2>
      <nav>
        <ul>
          <li><Link to="/attendance">View Attendance</Link></li>
          <li><Link to="/timetable">View Timetable</Link></li>
          <li><Link to="/scan-qr">Scan QR</Link></li>
          <li><Link to="/enter-otp">Enter OTP</Link></li>
        </ul>
      </nav>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;