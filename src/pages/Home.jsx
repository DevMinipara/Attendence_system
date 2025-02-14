import './Home.css'
const Home = () => {
  return (
    <div className="bgimage">
      <div className="hero">
        <div className="content">
          <h1>Smart QR Attendance</h1>
          <h2>Simple. Fast. Secure.</h2>
          <p>
            Transform your classroom with our <span className="highlight">instant QR-based attendance system</span>. 
            No more paperwork, no more time waste.
          </p>
          <p>
            <span className="highlight">One scan</span> is all it takes.
          </p>
          <button className="get-started-btn">Get Started</button>
        </div>
        
        <div className="features">
          <div className="feature">
            <div className="icon">⚡</div>
            <div>
              <h3>Quick Scan</h3>
              <p>Mark attendance in seconds</p>
            </div>
          </div>
          
          <div className="feature">
            <div className="icon">📊</div>
            <div>
              <h3>Live Updates</h3>
              <p>Real-time tracking & reports</p>
            </div>
          </div>
          
          <div className="feature">
            <div className="icon">🔒</div>
            <div>
              <h3>Secure</h3>
              <p>Encrypted & tamper-proof</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home