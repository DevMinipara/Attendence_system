import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./pages/Navigation";
import Home from "./pages/Home";
import Attendance from "./pages/Attendance";
import Report from "./pages/Report";
import Register from "./pages/Student/Register";
// import StudentLogin from "./pages/Student/StudentLogin";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import Faculty from "./pages/Faculty/Faculty";
import Student from "./pages/Student/Student";
import StudentDashboard from "./pages/Student/Dashboard";
import FacultyDashboard from "./pages/Faculty/FacultyDashboard";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        {/* <Scan /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="report" element={<Report />} />
          <Route path="faculty" element={<Faculty />} />
          <Route path="student" element={<Student />} />
          <Route path="StudentDashboard" element={<StudentDashboard />} />   
          <Route path="FacultyDashborad" element={<FacultyDashboard />} /> 
          <Route path="AdminDashboard" element={<AdminDashboard/>} /> 
          <Route path="register" element={<Register />} />     
        </Routes>


      </BrowserRouter>
    </>
  );
};

export default App;
