import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        userType: "student",
        name: "",
        email: "",
        course: "",
        year: "",
        phone: "",
        password: ""
    });

    const [successMessage, setSuccessMessage] = useState("");
    const [errors, setErrors] = useState({});

    // Regex patterns for validation
    const patterns = {
        name: /^[A-Za-z ]{3,}$/,
        email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/,
        phone: /^[0-9]{10}$/,
        password: /^[A-Za-z0-9@#$%^&+=]{6,}$/
    };

    // Handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Validate form
    const validateForm = () => {
        let newErrors = {};
        
        if (!patterns.name.test(formData.name)) newErrors.name = "Enter a valid name (min 3 letters)";
        if (!patterns.email.test(formData.email)) newErrors.email = "Enter a valid email";
        if (!formData.course) newErrors.course = "Enter your course";
        if (!formData.year) newErrors.year = "Select your year";
        if (!patterns.phone.test(formData.phone)) newErrors.phone = "Enter a valid 10-digit phone number";
        if (!patterns.password.test(formData.password)) newErrors.password = "Password must be at least 6 characters";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission with navigation
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setSuccessMessage("Registration Successful!");
            
            // Navigate based on user type after a short delay
            setTimeout(() => {
                if (formData.userType === "student") {
                    navigate('/StudentDashboard');
                } else if (formData.userType === "faculty") {
                    navigate('/FacultyDashboard');
                }
            }, 1500); // 1.5 second delay to show success message
        }
    };

    const handleLogin = () => {
        navigate('/login');
    };

    return (
        <div className="register-page">
            <div className="register-container">
                <div className="register-left">
                    <div className="register-header">
                        <h2>Create Account</h2>
                        <p>Please fill in the details to register</p>
                    </div>
                    {successMessage && <div className="success-message">{successMessage}</div>}
                    <form onSubmit={handleSubmit} className="register-form">
                        <div className="form-group radio-group">
                            <label className="radio-label">Register as:</label>
                            <div className="radio-options">
                                <label className="radio-option">
                                    <input
                                        type="radio"
                                        name="userType"
                                        value="student"
                                        checked={formData.userType === "student"}
                                        onChange={handleChange}
                                    />
                                    <span>Student</span>
                                </label>
                                <label className="radio-option">
                                    <input
                                        type="radio"
                                        name="userType"
                                        value="faculty"
                                        checked={formData.userType === "faculty"}
                                        onChange={handleChange}
                                    />
                                    <span>Faculty</span>
                                </label>
                            </div>
                        </div>

                        <div className="form-group">
                            <label>
                                <i className="fas fa-user"></i>
                                <span>Full Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            {errors.name && <span className="error">{errors.name}</span>}
                        </div>

                        <div className="form-group">
                            <label>
                                <i className="fas fa-envelope"></i>
                                <span>Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <span className="error">{errors.email}</span>}
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>
                                    <i className="fas fa-graduation-cap"></i>
                                    <span>Course</span>
                                </label>
                                <input
                                    type="text"
                                    name="course"
                                    placeholder="Enter your course"
                                    value={formData.course}
                                    onChange={handleChange}
                                />
                                {errors.course && <span className="error">{errors.course}</span>}
                            </div>

                            <div className="form-group">
                                <label>
                                    <i className="fas fa-clock"></i>
                                    <span>Year</span>
                                </label>
                                <select name="year" value={formData.year} onChange={handleChange}>
                                    <option value="">Select Year</option>
                                    <option value="1">1st Year</option>
                                    <option value="2">2nd Year</option>
                                    <option value="3">3rd Year</option>
                                    <option value="4">4th Year</option>
                                </select>
                                {errors.year && <span className="error">{errors.year}</span>}
                            </div>
                        </div>

                        <div className="form-group">
                            <label>
                                <i className="fas fa-phone"></i>
                                <span>Phone Number</span>
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Enter your phone number"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                            {errors.phone && <span className="error">{errors.phone}</span>}
                        </div>

                        <div className="form-group">
                            <label>
                                <i className="fas fa-lock"></i>
                                <span>Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Create a password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            {errors.password && <span className="error">{errors.password}</span>}
                        </div>

                        <button type="submit" className="register-btn">
                            <span>Register Now</span>
                            <i className="fas fa-arrow-right"></i>
                        </button>
                    </form>
                    <div className="register-footer">
                        <p>Already have an account?</p>
                        <button onClick={handleLogin} className="login-link">
                            Login Here
                        </button>
                    </div>
                </div>
                <div className="register-right">
                    <div className="register-image">
                        <img src="/path-to-your-image.svg" alt="Register" />
                        <h3>AttendEase</h3>
                        <p>Join our Smart Attendance Management System</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;