//! working
import React, { useState, useEffect } from "react";
import Navlinks from "../Navlinks.js/Navlinks";
import "./Header.css";
import logo from "../Assets/tekAlgo_logo_in_white.png";
import { NavLink } from "react-router-dom";
import { VscThreeBars } from "react-icons/vsc";
import { ImCross } from "react-icons/im";
import VideoComponent from "../Video Component/VideoComponent";
import "../Navlinks.js/Navlinks.css";

const Header = ({
  sidebarOpen,
  currentNavLink,
  toggleSidebar,
  handleNavClick,
}) => {
  const [navLink, setNavLink] = useState(currentNavLink);

  useEffect(() => {
    const storedNavLink = localStorage.getItem("currentNavLink");
    if (storedNavLink) {
      setNavLink(storedNavLink);
    }
  }, []);

  useEffect(() => {
    setNavLink(currentNavLink);
  }, [currentNavLink]);

  const handleLogoClick = () => {
    localStorage.setItem("currentNavLink", "ABOUT US");
    setNavLink("ABOUT US");
    handleNavClick("ABOUT US");
  };

  const handleNavClickWrapper = (navLinkName) => {
    handleNavClick(navLinkName);
    toggleSidebar(); // Close the sidebar after navigation
  };

  return (
    <div className="header_container">
      <div className="header">
        <div className="logo">
          <NavLink className="navlinkLogo" to="/" onClick={handleLogoClick}>
            <img src={logo} alt="Logo" />
          </NavLink>
        </div>

        <div className="bars_container">
          <button className="bars" onClick={toggleSidebar}>
            {sidebarOpen ? <ImCross /> : <VscThreeBars />}
          </button>
        </div>
        <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
          <Navlinks handleNavClick={handleNavClickWrapper} />
        </div>
      </div>
      <div className="videocomponent">
        <VideoComponent currentNavLink={navLink} />
      </div>
    </div>
  );
};

export default Header;
