import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/register" className="nav-link">
            Register
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className="nav-link">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" className="nav-link">
            Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
