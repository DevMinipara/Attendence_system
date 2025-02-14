import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav>
        <div>
          <img className="logo" src="ealogo.png" alt="EA Logo" />
        </div>
        <ul>
          <li><NavLink to={"/"}><i className="fas fa-home"></i> Home</NavLink></li>
          <li><NavLink to={"attendance"}><i className="fas fa-clipboard-check"></i> Attendance</NavLink></li>
          <li><NavLink to={"report"}><i className="fas fa-chart-bar"></i> Report</NavLink></li>
          <li className="login-item">
            <NavLink to={"login"}>Login</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
