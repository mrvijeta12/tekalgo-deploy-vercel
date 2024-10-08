//! working

import React, { useState } from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import logo from "../Assets/tekAlgo_logo_in_white.png";

const Footer = ({ handleNavClick }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
  };

  const handleClick = (linkName) => {
    // localStorage.setItem("currentNavLink", linkName);
    sessionStorage.setItem("currentNavLink", linkName);

    handleNavClick(linkName);
  };

  return (
    <div className="footer">
      <div className="logo footer-logo">
        <img src={logo} alt="Logo" onClick={() => handleClick("ABOUT US")} />
      </div>
      <div className="footer-content-container">
        <div className="footer-menu footer-content">
          <h2>Useful Links</h2>
          <div className="footer-nav">
            <NavLink to="/" onClick={() => handleClick("ABOUT US")}>
              About Us
            </NavLink>
            <NavLink
              to="/experience"
              onClick={() => handleClick("OUR EXPERIENCE")}
            >
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
            <NavLink
              to="/joinOurTeam"
              onClick={() => handleClick("JOIN OUR TEAM")}
            >
              Join Our Team
            </NavLink>
          </div>
        </div>

        <div className="footer-contact-us footer-content">
          <h2>Contact us</h2>
          <p>Saket, New Delhi</p>
          <p>India</p>
          <p>
            <b>Phone:</b> +919118618111
          </p>
          <p>
            <b>Email:</b> sales@tekalgo.com
          </p>
        </div>

        <div className="newsletter footer-content">
          <div className="subscription-content">
            <h2>Our Newsletter</h2>
            <p>
              Subscribe to our newsletter for weekly updates filled with
              excitement!
            </p>
          </div>

          <div className="subscription-input">
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <div className="copyright">
        <span>
          © Copyright <b>TekAlgo Solution </b>|| All Rights Reserved
        </span>
      </div>
    </div>
  );
};

export default Footer;
