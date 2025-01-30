import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav>
        <div>
          <h3 className="Logo">Logo</h3>
        </div>
        <p>chekc chekc</p>
        <ul>
          <li><NavLink to={"/"}>Home</NavLink></li>
          <li><NavLink to={"attendance"}>Attendance</NavLink></li>
          <li><NavLink to={"report"}>Report</NavLink></li>
          <li><NavLink to={"Faculty"}>Faculty</NavLink></li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
