import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  console.log("hello");
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/appointments">Appointments</Link>
          </li>
          <li>
            <Link to="/reviews">Reviews</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/sign">Sign Up</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
