import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav>
        <div>
          <h3 className="Logo">Logo</h3>
        </div>
        <ul>
          <li><NavLink to={"/"}>Home</NavLink></li>
          <li><NavLink to={"attendance"}>Attendance</NavLink></li>
          <li><NavLink to={"report"}>Report</NavLink></li>
          <li><NavLink to={"Faculty"}>Faculty</NavLink></li>
          <li><NavLink to={"Student"}>Student</NavLink></li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
