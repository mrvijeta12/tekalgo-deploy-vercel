import React from "react";
import { NavLink } from "react-router-dom";
import "./Navlinks.css";

const Navlinks = ({ handleNavClick }) => {
  const handleClick = (linkName) => {
    localStorage.setItem("currentNavLink", linkName);
    handleNavClick(linkName);
  };

  return (
    <div className="navlinks">
      <NavLink to="/" onClick={() => handleClick("ABOUT US")}>
        About Us
      </NavLink>
      <NavLink to="/experience" onClick={() => handleClick("OUR EXPERIENCE")}>
        Experience
      </NavLink>
      <NavLink to="/whatWeDo" onClick={() => handleClick("WHAT WE DO")}>
        What We Do
      </NavLink>
      <NavLink to="/blog" onClick={() => handleClick("BLOG")}>
        Blog
      </NavLink>
      <NavLink to="/contactUs" onClick={() => handleClick("CONTACT US")}>
        Contact Us
      </NavLink>
      <NavLink to="/joinOurTeam" onClick={() => handleClick("JOIN OUR TEAM")}>
        Join Our Team
      </NavLink>
    </div>
  );
};

export default Navlinks;
