import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./pages/Navigation";
import Home from "./pages/Home";
import Attendance from "./pages/Attendance";
import Report from "./pages/Report";
import StudentRegister from "./pages/Student/StudentRegister";
// import StudentLogin from "./pages/Student/StudentLogin";
// import AdminDashboard from "./pages/Admin/AdminDashboard";
import Faculty from "./pages/Faculty/Faculty";
import Student from "./pages/Student/Student";
import Facultyregister from "./pages/Faculty/Facultyregister";
import StudentDashboard from "./pages/Student/StudentDashboard";
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
          <Route path="register" element={<StudentRegister />} />  
          <Route path="faculty-register" element={<Facultyregister />} />   
          <Route path="StudentDashboard" element={<StudentDashboard />} />   
          <Route path="FacultyDashborad" element={<FacultyDashboard />} /> 
          
        </Routes>


      </BrowserRouter>
    </>
  );
};

export default App;
