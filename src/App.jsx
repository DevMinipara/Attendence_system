import { Routes, Route } from "react-router-dom";
import Navigation from "./pages/Navigation";
import Home from "./pages/Home";
import Attendance from "./pages/Attendance";
import Report from "./pages/Report";
import Register from "./pages/Student/Register";
import Login from "./pages/Student/Login";
// import StudentLogin from "./pages/Student/StudentLogin";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import Faculty from "./pages/Faculty/Faculty";
import Student from "./pages/Student/Student";
import StudentDashboard from "./pages/Student/Dashboard";
import FacultyDashboard from "./pages/Faculty/FacultyDashboard";


const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/report" element={<Report />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/student" element={<Student />} />
        <Route path="/StudentDashboard" element={<StudentDashboard />} />   
        <Route path="/FacultyDashborad" element={<FacultyDashboard />} /> 
        <Route path="/AdminDashboard" element={<AdminDashboard/>} /> 
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
