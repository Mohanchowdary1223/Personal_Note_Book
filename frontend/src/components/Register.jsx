import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

const Register = ({ handleRegister, togglePasswordVisibility, showPassword }) => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log("Register data:", data);
    try {
      const response = await fetch("http://localhost:8000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.status === 200) {
        // Redirect to login page after successful registration
        navigate("/login"); // Navigate to login page
      } else {
        // Handle registration failure
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <div className="register-box">
      <div className="dashboard-container2">
        <h2 className="login-H">Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username</label> <br />
            <input
              type="text"
              id="username"
              name="username"
              placeholder="enter your name"
              className="box-l"
              minLength={3}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email</label> <br />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="enter email"
              className="box-l"
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label> <br />
            <div className="password-eye">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="enter password"
                className="box-l"
                required
              />
              <i
                className={`fa-solid fa-eye${showPassword ? "-slash" : ""} fa-xs`}
                onClick={togglePasswordVisibility}
                style={{ cursor: "pointer", marginLeft: "-15px" }}
              ></i>
            </div>
          </div>
          <button type="submit" className="login-b">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
