import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("student");
  const navigate = useNavigate();

  const loginBtn = () => {
    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }

    if (userType === "student") {
      navigate('/StudentDashboard');
    } else if (userType === "faculty") {
      navigate('/FacultyDashboard');
    }
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-left">
          <div className="login-header">
            <h2>Welcome Back!</h2>
            <p>Please login to access your account</p>
          </div>
          <form className="login-form">
            <div className="form-group radio-group">
              <label className="radio-label">Login as:</label>
              <div className="radio-options">
                <label className="radio-option">
                  <input
                    type="radio"
                    name="userType"
                    value="student"
                    checked={userType === "student"}
                    onChange={(e) => setUserType(e.target.value)}
                  />
                  <span>Student</span>
                </label>
                <label className="radio-option">
                  <input
                    type="radio"
                    name="userType"
                    value="faculty"
                    checked={userType === "faculty"}
                    onChange={(e) => setUserType(e.target.value)}
                  />
                  <span>Faculty</span>
                </label>
              </div>
            </div>

            <div className="form-group">
              <label>
                <i className="fas fa-envelope"></i>
                <span>Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>
                <i className="fas fa-lock"></i>
                <span>Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span className="forgot-password">Forgot Password?</span>
            </div>
            <button type="button" onClick={loginBtn} className="login-btn">
              <span>Login Now</span>
              <i className="fas fa-arrow-right"></i>
            </button>
          </form>
          <div className="login-footer">
            <p>Don't have an account?</p>
            <button onClick={handleRegister} className="register-btn">
              Create Account
            </button>
          </div>
        </div>
        <div className="login-right">
          <div className="login-image">
            <img src="/path-to-your-image.svg" alt="Login" />
            <h3>AttendEase</h3>
            <p>Smart Attendance Management System</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
