import { useState } from "react";
import "./Sign_Up.css";

const Sign_Up = () => {
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    role: "",
    email: "",
    phone: "",
    name: "",
    password: "",
  });

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhone = (phone) => {
    const regex = /^\d{10}$/;
    return regex.test(phone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    const newErrors = {};

    if (!role) {
      newErrors.role = "Role is required";
      valid = false;
    }
    if (!email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!validateEmail(email)) {
      newErrors.email = "Email is not valid";
      valid = false;
    }
    if (!phone) {
      newErrors.phone = "Phone number is required";
      valid = false;
    } else if (!validatePhone(phone)) {
      newErrors.phone = "Phone number is not valid";
      valid = false;
    }
    if (!name) {
      newErrors.name = "Name is required";
      valid = false;
    }
    if (!password) {
      newErrors.password = "Password is required";
      valid = false;
    }

    setError(newErrors);

    if (valid) {
      // Handle form submission here
      console.log("Form submitted", { role, email, phone, name, password });
    }
  };

  return (
    <section className="sign_up">
      <div className="form-container">
        <h1>Hi, User!</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="role">Role</label>
          <select
            id="role"
            name="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Select the Role</option>
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
          </select>
          <p>
            {error?.role && (
              <span style={{ color: "red", fontSize: "0.8rem" }}>
                {error.role}
              </span>
            )}
          </p>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p>
            {error?.email && (
              <span style={{ color: "red", fontSize: "0.8rem" }}>
                {error.email}
              </span>
            )}
          </p>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <p>
            {error?.phone && (
              <span style={{ color: "red", fontSize: "0.8rem" }}>
                {error.phone}
              </span>
            )}
          </p>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p>
            {error?.name && (
              <span style={{ color: "red", fontSize: "0.8rem" }}>
                {error.name}
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
          <p>
            {error?.password && (
              <span style={{ color: "red", fontSize: "0.8rem" }}>
                {error.password}
              </span>
            )}
          </p>
          <div className="button-container">
            <button type="reset" className="reset">
              Reset
            </button>
            <button type="submit" className="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="image-container">
        <img src="/images/doctor_Signup.png" alt="Doctor" />
      </div>
    </section>
  );
};

export default Sign_Up;
