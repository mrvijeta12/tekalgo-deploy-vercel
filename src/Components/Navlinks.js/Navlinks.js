import React from "react";
import { NavLink } from "react-router-dom";
import "./Navlinks.css";

const Navlinks = ({ handleNavClick }) => {
  return (
    <div className="navlinks">
      <NavLink to="/" onClick={() => handleNavClick("ABOUT US")}>
        About Us
      </NavLink>
      <NavLink
        to="/experience"
        onClick={() => handleNavClick(" OUR EXPERIENCE")}
      >
        experience
      </NavLink>
      <NavLink to="/whatWeDo" onClick={() => handleNavClick("WHAT WE DO")}>
        what We Do
      </NavLink>
      <NavLink to="/blog" onClick={() => handleNavClick("BLOG")}>
        Blog
      </NavLink>
      <NavLink to="/contactUs" onClick={() => handleNavClick("CONTACT US")}>
        Contact Us
      </NavLink>
      <NavLink
        to="/joinOurTeam"
        onClick={() => handleNavClick("JOIN OUR TEAM")}
      >
        Join Our Team
      </NavLink>
    </div>
  );
};

export default Navlinks;
