import './Home.css'
const Home = () => {
  return (
    <>
    <div className="bgimage">
      <div className="hero">
        <div className="content">
          <h1>ATTENDENCE SYSTEM</h1>
          <button className="read-more-btn">Read More</button>
        </div>

        <div className="features">
          <div className="feature">
            <span className="icon">🎓</span>
            <span>Student</span>
          </div>
          <div className="feature">
            <span className="icon">🎓</span>
            <span>Faculty</span>
          </div>
          
        </div>
      </div>
    </div>
    </>
  )
}

export default Home