import { useState } from "react";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    const newErrors = {};

    if (!email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!validateEmail(email)) {
      newErrors.email = "Email is not valid";
      valid = false;
    }
    if (!password) {
      newErrors.password = "Password is required";
      valid = false;
    }

    setError(newErrors);

    if (valid) {
      // Handle form submission here
      console.log("Form submitted", { email, password });
    }
  };

  return (
    <section className="login">
      <div className="image-container">
        <img src="/images/doctor_login.png" alt="Doctor" />
      </div>
      <div className="form-container login-form-container">
        <h1>Please Login</h1>
        <p>
          Are you a new member?
          <a href="../Sign_Up/Sign_Up.html">Sign Up Here</a>
        </p>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="login-validation">
            {error?.email && (
              <span style={{ color: "red", fontSize: "0.8rem" }}>
                {error.email}
              </span>
            )}
          </p>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="login-validation">
            {error?.password && (
              <span style={{ color: "red", fontSize: "0.8rem" }}>
                {error.password}
              </span>
            )}
          </p>
          <div className="login-button-container">
            <button type="submit" className="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
