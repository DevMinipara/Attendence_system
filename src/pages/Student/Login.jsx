import { useState } from "react";
import { NavLink } from "react-router-dom";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginBtn = () => {
    console.log("Login button clicked");
    
  };

  return (
    <>
      <div className="login-container">
        <header>
          <h1>E-Authentication System with QR Code & OTP</h1>
        </header>
        <main>
          <h2>Student Login</h2>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button onClick={loginBtn}>Login</button>

          {/* NavLink for Register */}
          <NavLink to="/register" className="register-link">
            Register!
          </NavLink>
        </main>
      </div>
    </>
  );
}

export default Login;
