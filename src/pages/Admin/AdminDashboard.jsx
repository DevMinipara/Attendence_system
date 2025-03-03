import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css"; // Assuming you have a CSS file for styling

const AdminDashboard = () => {
  const navigate = useNavigate();

  // State for adding student and faculty
  const [studentData, setStudentData] = useState({
    name: "",
    email: "",
    course: "",
    year: "",
  });

  const [facultyData, setFacultyData] = useState({
    name: "",
    email: "",
    department: "",
  });

  const handleLogout = () => {
    // Logic for logging out (e.g., clearing tokens, redirecting to login)
    navigate("/login");
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
    console.log("Student added:", studentData);
    // Reset form
    setStudentData({ name: "", email: "", course: "", year: "" });
  };

  const handleAddFaculty = (e) => {
    e.preventDefault();
    // Logic to add faculty (e.g., API call)
    console.log("Faculty added:", facultyData);
    // Reset form
    setFacultyData({ name: "", email: "", department: "" });
  };

  return (
    <div className="admin-dashboard">
      <div className="dashboard-content">
        <h1>Welcome to the Admin Dashboard</h1>

        {/* Add Faculty Form */}
        <h2>Add Faculty</h2>
        <form className="addFacultyForm" onSubmit={handleAddFaculty}>
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
          <div className="addRemoveFaculty">
            <button>Add Faculty</button>
            <button>Remove Faculty</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminDashboard;
