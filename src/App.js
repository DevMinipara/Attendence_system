import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Home from './pages/Home';
import AdminDashboard from './pages/Admin/AdminDashboard';
import StudentHistory from './pages/StudentHistory';
import { fetchUsers } from './api'; // Ensure this path is correct

function App() {
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState("");
    const [error, setError] = useState(null); // State for error handling

    useEffect(() => {
        // Fetch users from the API
        const getUsers = async () => {
            try {
                const userList = await fetchUsers();
                setUsers(userList);
            } catch (error) {
                console.error("Error fetching users:", error);
                setError("Failed to fetch users."); // Set error message
            }
        };

        // Fetch message from the backend
        const getMessage = async () => {
            try {
                const response = await axios.get("http://localhost:5000/"); // Backend URL
                setMessage(response.data);
            } catch (error) {
                console.error("Error fetching message:", error);
                setError("Failed to fetch message."); // Set error message
            }
        };

        getUsers();
        getMessage();
    }, []);

    return (
        <Router>
            <div>
                {error && <h2 style={{ color: 'red' }}>{error}</h2>} {/* Display error message */}
                <h1>{message}</h1> {/* Display message from backend */}
                <h2>User List</h2>
                <ul>
                    {users.map(user => (
                        <li key={user._id}>
                            {user.username} - {user.email} - Enrollment No: {user.enrollmentNo}
                        </li>
                    ))}
                </ul>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/admin" element={<AdminDashboard />} />
                    <Route path="/student-history" element={<StudentHistory />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App; 