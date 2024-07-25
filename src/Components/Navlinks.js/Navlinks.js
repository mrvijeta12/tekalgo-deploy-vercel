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
      <NavLink to="/joinOurTeam" onClick={() => handleNavClick("join")}>
        Join Our Team
      </NavLink>
    </div>
  );
};

export default Navlinks;
