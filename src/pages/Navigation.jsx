import { NavLink, useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('login');
  };

  return (
    <>
      <nav>
        <div>
          <img className="logo" src="ealogo.png" alt="EA Logo" />
        </div>
        <ul>
          <li><NavLink to={"/"}><i className="fas fa-home"></i> QR Scanner </NavLink></li>
          <li><NavLink to={"/"}><i className="fas fa-home"></i> Dashboard</NavLink></li>
          <li className="login-item">
            <NavLink to={"login"}>
              <i className="fas fa-sign-in-alt"></i> Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
