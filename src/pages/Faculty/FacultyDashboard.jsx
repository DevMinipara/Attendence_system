import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./FacultyDashboard.css";
import QRCode from "react-qr-code";


const FacultyDashboard = () => {
  const navigate = useNavigate();
  const [facultyName] = useState("Dr. Smith");
  const [subject, setSubject] = useState("");
  const [showQR, setShowQR] = useState(false);
  const [showAttendance, setShowAttendance] = useState(false);
  const [qrData, setQrData] = useState("");
  const [timestamp, setTimestamp] = useState(null);
  const [attendanceHistory] = useState([
    {
      date: "2024-03-10",
      time: "10:30 AM",
      subject: "Data Structures",
      present: 45,
      total: 60,
    },
    {
      date: "2024-03-09",
      time: "11:30 AM",
      subject: "Database Management",
      present: 52,
      total: 60,
    },
  ]);
  const [currentDateTime, setCurrentDateTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date().toLocaleString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // ✅ Fix: Correct function for QR generation
  const handleGenerateQR = () => {
    if (!subject.trim()) {
      alert("Please enter a subject name");
      return;
    }
  
    const qrValue = `https://your-attendance-system.com/verify?subject=${encodeURIComponent(subject)}`;
    const staticDateTime = new Date().toLocaleString();
    setQrData(qrValue);
    setShowQR(true);
    setShowAttendance(false);
    setTimestamp(staticDateTime);
  };

  const handleShowAttendance = () => {
    setShowAttendance(true);
    setShowQR(false);
  };

  return (
    <div className="dashboard-container">
      {/* Navigation Bar */}
      <nav className="dashboard-nav">
        <div className="nav-left">
          <img src="/logo.png" alt="Logo" className="nav-logo" />
        </div>
        <div className="nav-links">
          <Link to="/FacultyDashboard" className="nav-link active">
            <i className="fas fa-home"></i> Dashboard
          </Link>
          <Link to="/manage-attendance" className="nav-link">
            <i className="fas fa-clipboard-check"></i> Manage Attendance
          </Link>
          <Link to="/class-schedule" className="nav-link">
            <i className="fas fa-calendar-alt"></i> Class Schedule
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
          <h1>Welcome, {facultyName} </h1>
          <p>Generate QR code for attendance or view attendance history</p>
        </div>

        <div className="qr-generator-section">
          <div className="input-group">
            <label>Enter Subject Name:</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="e.g., Data Structures"
              className="subject-input"
            />
          </div>
          <div className="action-buttons">
            <button onClick={handleGenerateQR} className="generate-btn">
              <i className="fas fa-qrcode"></i> Generate QR
            </button>
            <button onClick={handleShowAttendance} className="history-btn">
              <i className="fas fa-history"></i> Show Attendance History
            </button>
          </div>
        </div>

        {showQR && (
          <div className="qr-display">
            <h2>QR Code for {subject}</h2>
            <div className="qr-code">
              {qrData ? <QRCode value={qrData} size={200} /> : <p>Please enter a subject to generate a QR code.</p>}
            </div> 
            <p className="qr-info">Generated on: <strong>{timestamp}</strong></p>
          </div>
        )}

        {showAttendance && (
          <div className="attendance-history">
            <h2>Attendance History</h2>
            <div className="attendance-table">
              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Subject</th>
                    <th>Attendance</th>
                    <th>Percentage</th>
                  </tr>
                </thead>
                <tbody>
                  {attendanceHistory.map((record, index) => (
                    <tr key={index}>
                      <td>{record.date}</td>
                      <td>{record.time}</td>
                      <td>{record.subject}</td>
                      <td>{record.present}/{record.total}</td>
                      <td>{((record.present / record.total) * 100).toFixed(1)}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default FacultyDashboard;
