import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css'; // Assuming you have a CSS file for styling

const AdminDashboard = () => {
  const navigate = useNavigate();
  
  // State for adding student and faculty
  const [studentData, setStudentData] = useState({
    name: '',
    email: '',
    course: '',
    year: '',
  });

  const [facultyData, setFacultyData] = useState({
    name: '',
    email: '',
    department: '',
  });

  const handleLogout = () => {
    // Logic for logging out (e.g., clearing tokens, redirecting to login)
    navigate('/login');
  };

  const handleStudentChange = (e) => {
    setStudentData({ ...studentData, [e.target.name]: e.target.value });
  };

  const handleFacultyChange = (e) => {
    setFacultyData({ ...facultyData, [e.target.name]: e.target.value });
  };

  const handleAddStudent = (e) => {
    e.preventDefault();
    // Logic to add student (e.g., API call)
    console.log('Student added:', studentData);
    // Reset form
    setStudentData({ name: '', email: '', course: '', year: '' });
  };

  const handleAddFaculty = (e) => {
    e.preventDefault();
    // Logic to add faculty (e.g., API call)
    console.log('Faculty added:', facultyData);
    // Reset form
    setFacultyData({ name: '', email: '', department: '' });
  };

  return (
    <div className="admin-dashboard">
      <nav className="admin-nav">
        <ul>
          <li onClick={() => navigate('/add-student-faculty')}>Add Student/Faculty</li>
          <li onClick={() => navigate('/view-students')}>View Students</li>
          <li onClick={() => navigate('/view-faculty')}>View Faculty</li>
          <li onClick={handleLogout}>Logout</li>
        </ul>
      </nav>

      <div className="dashboard-content">
        <h1>Welcome to the Admin Dashboard</h1>

        {/* Add Student Form */}
        <h2>Add Student</h2>
        <form onSubmit={handleAddStudent}>
          <input
            type="text"
            name="name"
            placeholder="Student Name"
            value={studentData.name}
            onChange={handleStudentChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Student Email"
            value={studentData.email}
            onChange={handleStudentChange}
            required
          />
          <input
            type="text"
            name="course"
            placeholder="Course"
            value={studentData.course}
            onChange={handleStudentChange}
            required
          />
          <input
            type="text"
            name="year"
            placeholder="Year"
            value={studentData.year}
            onChange={handleStudentChange}
            required
          />
          <button type="submit">Add Student</button>
        </form>

        {/* Add Faculty Form */}
        <h2>Add Faculty</h2>
        <form onSubmit={handleAddFaculty}>
          <input
            type="text"
            name="name"
            placeholder="Faculty Name"
            value={facultyData.name}
            onChange={handleFacultyChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Faculty Email"
            value={facultyData.email}
            onChange={handleFacultyChange}
            required
          />
          <input
            type="text"
            name="department"
            placeholder="Department"
            value={facultyData.department}
            onChange={handleFacultyChange}
            required
          />
          <button type="submit">Add Faculty</button>
        </form>
      </div>
    </div>
  );
};

export default AdminDashboard;

