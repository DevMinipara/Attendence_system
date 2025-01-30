import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./pages/Navigation";
import Home from "./pages/Home";
import Attendance from "./pages/Attendance";
import Report from "./pages/Report";
import StudentRegister from "./pages/StudentRegister";
import StudentLogin from "./pages/StudentLogin";
import AdminDashboard from "./pages/AdminDashboard";
import Faculty from "./Faculty";
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
          <Route path="Student" element={<Student />} />
          <Route path="Faculty" element={<Faculty />} />
        </Routes>


        <AdminDashboard />
      </BrowserRouter>
    </>
  );
};

export default App;
