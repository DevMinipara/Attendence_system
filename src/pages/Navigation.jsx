import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav>
        <div>
           <img src="ealogo.png"></img>
        </div>
        <ul>
          <li><NavLink to={"/"}>Home</NavLink></li>
          <li><NavLink to={"attendance"}>Attendance</NavLink></li>
          <li><NavLink to={"report"}>Report</NavLink></li>
          <li><NavLink to={"Faculty"}>Faculty</NavLink></li>
          <li><NavLink to={"Student"}>Student</NavLink></li>
          <li><NavLink to={"StudentDashboard"}>StudentDashboard</NavLink></li>
          <li><NavLink to={"FacultyDashboard"}>FacultyDashboard</NavLink></li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
