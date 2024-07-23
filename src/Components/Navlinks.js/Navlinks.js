import React from "react";
import { NavLink } from "react-router-dom";
import "./Navlinks.css";

const Navlinks = ({ handleNavClick }) => {
  return (
    <div className="navlinks">
      <NavLink to="/" onClick={() => handleNavClick("home")}>
        About Us
      </NavLink>
      <NavLink to="/experience" onClick={() => handleNavClick("about")}>
        experience
      </NavLink>
      <NavLink to="/whatWeDo" onClick={() => handleNavClick("about")}>
        what We Do
      </NavLink>
      <NavLink to="/blog" onClick={() => handleNavClick("blog")}>
        Blog
      </NavLink>
      <NavLink to="/contactUs" onClick={() => handleNavClick("contact")}>
        Contact Us
      </NavLink>
      <NavLink to="/joinTheTeam" onClick={() => handleNavClick("join")}>
        Join The Team
      </NavLink>

      {/* <NavLink to="/">About Us</NavLink>
      <NavLink to="/experience">experience</NavLink>
      <NavLink to="/whatWeDo">what We Do</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/contactUs">Contact Us</NavLink>
      <NavLink to="/joinTheTeam">Join The Team</NavLink> */}
    </div>
  );
};

export default Navlinks;
