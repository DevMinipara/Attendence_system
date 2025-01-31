import { useState } from "react";

const Facultyregister = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
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
        if (!patterns.phone.test(formData.phone)) newErrors.phone = "Enter a valid 10-digit phone number";
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
                phone: "",
                password: ""
            });
            setErrors({});
        }
    };

    return (
        <div className="register-container">
            <h2>Faculty Register</h2>
            {successMessage && <p className="success">{successMessage}</p>}
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Enter Your Name" value={formData.name} onChange={handleChange} />
                {errors.name && <p className="error">{errors.name}</p>}

                <input type="email" name="email" placeholder="Enter Your Email" value={formData.email} onChange={handleChange} />
                {errors.email && <p className="error">{errors.email}</p>}

                <input type="text" name="phone" placeholder="Enter Your Phone No" value={formData.phone} onChange={handleChange} />
                {errors.phone && <p className="error">{errors.phone}</p>}

                <input type="password" name="password" placeholder="Enter Your Password" value={formData.password} onChange={handleChange} />
                {errors.password && <p className="error">{errors.password}</p>}

                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default Facultyregister;
