import React from "react";

const Login = ({ handleLogin, togglePasswordVisibility, showPassword, errorMessage }) => { // Add errorMessage prop
  return (
    <div className="login-box">
      <div className="dashboard-container3">
      <h2 className="login-H">Login</h2>
      {errorMessage && <div className="error-message">{errorMessage}</div>} {/* Conditionally render error message */}
      <form className="login-form" onSubmit={handleLogin}>
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
          <label htmlFor="password">Password</label>
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
        </div>{" "}
        <br />
        <button type="submit" className="login-b">
          Login
        </button>
      </form>
      </div>
    </div>
  );
};

export default Login;
