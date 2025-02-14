import { useState } from "react";

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        dob: "",
        gender: "",
        course: "",
        year: "",
        phone: "",
        address: "",
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
        if (!formData.dob) newErrors.dob = "Select your date of birth";
        if (!formData.gender) newErrors.gender = "Select your gender";
        if (!formData.course) newErrors.course = "Enter your course";
        if (!formData.year) newErrors.year = "Select your year";
        if (!patterns.phone.test(formData.phone)) newErrors.phone = "Enter a valid 10-digit phone number";
        if (!formData.address) newErrors.address = "Enter your address";
        if (!patterns.password.test(formData.password)) newErrors.password = "Password must be at least 6 characters";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setSuccessMessage("Registration Successful!");
            setFormData({
                name: "",
                email: "",
                dob: "",
                gender: "",
                course: "",
                year: "",
                phone: "",
                address: "",
                password: ""
            });
            setErrors({});
        }
    };

    return (
        <div className="register-container">
            <h2>Student Register</h2>
            {successMessage && <p className="success">{successMessage}</p>}
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Enter Your Name" value={formData.name} onChange={handleChange} />
                {errors.name && <p className="error">{errors.name}</p>}

                <input type="email" name="email" placeholder="Enter Your Email" value={formData.email} onChange={handleChange} />
                {errors.email && <p className="error">{errors.email}</p>}

                <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
                {errors.dob && <p className="error">{errors.dob}</p>}

                <select name="gender" value={formData.gender} onChange={handleChange}>
                    <option value="">Select Your Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
                {errors.gender && <p className="error">{errors.gender}</p>}

                <input type="text" name="course" placeholder="Enter Your course" value={formData.course} onChange={handleChange} />
                {errors.course && <p className="error">{errors.course}</p>}

                <select name="year" value={formData.year} onChange={handleChange}>
                    <option value="">Select Your Year</option>
                    <option value="1st">1st Year</option>
                    <option value="2nd">2nd Year</option>
                    <option value="3rd">3rd Year</option>
                    <option value="4th">4th Year</option>
                </select>
                {errors.year && <p className="error">{errors.year}</p>}

                <input type="text" name="phone" placeholder="Enter Your Phone No" value={formData.phone} onChange={handleChange} />
                {errors.phone && <p className="error">{errors.phone}</p>}

                <input type="text" name="address" placeholder="Enter Your Address" value={formData.address} onChange={handleChange} />
                {errors.address && <p className="error">{errors.address}</p>}

                <input type="password" name="password" placeholder="Enter Your Password" value={formData.password} onChange={handleChange} />
                {errors.password && <p className="error">{errors.password}</p>}

                <select id="dropdown" value={selectedValue} onChange={handleChange}>
                    <option value="">Select...</option>
                    <option value="option1">Student</option>
                    <option value="option2">Faculty</option>
                </select>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default Register;