import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./FacultyDashboard.css";
import QRCode from "react-qr-code";

const FacultyDashboard = () => {
  const navigate = useNavigate();
  const [facultyName] = useState("Dr. Smith");
  const [courses] = useState(["MBA", "MSCIT", "BBA", "IMCA", "BCA"]); // Course names
  const [subjects, setSubjects] = useState([]); // Subjects based on selected course
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [showQR, setShowQR] = useState(false);
  const [qrData, setQrData] = useState("");
  const [timestamp, setTimestamp] = useState(null);
  const [showStudentList, setShowStudentList] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  
  // Sample students data
  const [students] = useState([
    {
      id: "101",
      name: "John Doe",
      subject: "Data Structures",
      attendance: [
        {
          date: "2024-03-10",
          time: "10:30 AM",
          subject: "Data Structures",
          status: "Present"
        },
        {
          date: "2024-03-09",
          time: "11:30 AM",
          subject: "Data Structures",
          status: "Absent"
        }
      ]
    },
    {
      id: "102",
      name: "Jane Smith",
      subject: "Database Management",
      attendance: [
        {
          date: "2024-03-10",
          time: "09:30 AM",
          subject: "Database Management",
          status: "Present"
        },
        {
          date: "2024-03-09",
          time: "10:30 AM",
          subject: "Database Management",
          status: "Present"
        }
      ]
    }
  ]);

  useEffect(() => {
    // Set subjects based on selected course
    if (selectedCourse === "MBA") {
      setSubjects(["PHP", "Python", "MySQL", "AI", "Java"]);
    } else if (selectedCourse === "MSCIT") {
      setSubjects(["CP", "AI", "FS", "Java", "Adv. Java"]);
    } else if (selectedCourse === "BBA") {
      setSubjects(["DBMS", "AI", "Python"]);
    } else if (selectedCourse === "IMCA") {
      setSubjects(["PHP", "MySQL", "Java"]);
    } else if (selectedCourse === "BCA") {
      setSubjects(["Python", "AI", "Java", "DBMS"]);
    } else {
      setSubjects([]);
    }
  }, [selectedCourse]);

  const handleGenerateQR = () => {
    if (!selectedSubject.trim()) {
      alert("Please select a subject");
      return;
    }

    const qrValue = `https://your-attendance-system.com/verify?course=${encodeURIComponent(selectedCourse)}&subject=${encodeURIComponent(selectedSubject)}`;
    const staticDateTime = new Date().toLocaleString();
    setQrData(qrValue);
    setShowQR(true);
    setTimestamp(staticDateTime);
  };

  const handleShowHistory = () => {
    setShowStudentList(true);
    setSelectedStudent(null);
  };

  const handleStudentClick = (student) => {
    setSelectedStudent(student);
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
            <label>Select Course:</label>
            <select
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              className="subject-input"
            >
              <option value="">Select a course</option>
              {courses.map((course, index) => (
                <option key={index} value={course}>{course}</option>
              ))}
            </select>
          </div>

          <div className="input-group">
            <label>Select Subject:</label>
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="subject-input"
              disabled={!selectedCourse} // Disable if no course is selected
            >
              <option value="">Select a subject</option>
              {subjects.map((subject, index) => (
                <option key={index} value={subject}>{subject}</option>
              ))}
            </select>
          </div>

          <div className="action-buttons">
            <button onClick={handleGenerateQR} className="generate-btn">
              <i className="fas fa-qrcode"></i> Generate QR
            </button>
            <button onClick={handleShowHistory} className="history-btn">
              <i className="fas fa-history"></i> Show Student History
            </button>
          </div>
        </div>

        {showQR && (
          <div className="qr-display">
            <h2>QR Code for {selectedCourse} - {selectedSubject}</h2>
            <div className="qr-code">
              {qrData ? <QRCode value={qrData} size={200} /> : <p>Please select a subject to generate a QR code.</p>}
            </div> 
            <p className="qr-info">Generated on: <strong>{timestamp}</strong></p>
          </div>
        )}

        {showStudentList && !selectedStudent && (
          <div className="student-list">
            <div className="list-header">
              <h2>Student List</h2>
              <button className="close-btn" onClick={() => setShowStudentList(false)}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            <table className="student-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Subject</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.subject}</td>
                    <td>
                      <button 
                        className="view-history-btn"
                        onClick={() => handleStudentClick(student)}
                      >
                        View History
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {selectedStudent && (
          <div className="attendance-history">
            <div className="history-header">
              <h2>Attendance History - {selectedStudent.name}</h2>
              <button 
                className="back-btn"
                onClick={() => setSelectedStudent(null)}
              >
                <i className="fas fa-arrow-left"></i> Back to List
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
                {selectedStudent.attendance.map((record, index) => (
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

export default FacultyDashboard;