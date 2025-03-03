import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AdminDashboard from './pages/Admin/AdminDashboard';
import StudentHistory from './pages/StudentHistory';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/student-history" element={<StudentHistory />} />
      </Routes>
    </Router>
  );
};

export default App; 