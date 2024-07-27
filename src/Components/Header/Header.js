import React, { useState } from "react";
import Navlinks from "../Navlinks.js/Navlinks";
import "./Header.css";
import logo from "../Assets/tekAlgo_logo_in_white.png";
import { VscThreeBars } from "react-icons/vsc";
import { ImCross } from "react-icons/im";
import VideoComponent from "../Video Component/VideoComponent";

const Header = ({
  sidebarOpen,
  currentNavLink,
  toggleSidebar,
  handleNavClick,
}) => {
  // const [sidebarOpen, setSidebarOpen] = useState(false);
  // const [currentNavLink, setCurrentNavLink] = useState("Home");

  // const toggleSidebar = () => {
  //   setSidebarOpen(!sidebarOpen);
  // };

  // const handleNavClick = (navLinkName) => {
  //   setSidebarOpen(false);
  //   setCurrentNavLink(navLinkName);
  // };

  // const handleNavLinkClick = (navLinkName) => {
  //   setCurrentNavLink(navLinkName);
  // };

  return (
    <div className="header_container">
      <div className="header">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <div className="bars_container">
          <button className="bars" onClick={toggleSidebar}>
            {sidebarOpen ? <ImCross /> : <VscThreeBars />}
          </button>
        </div>
        <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
          <Navlinks handleNavClick={handleNavClick} />
        </div>
      </div>
      <div className="videocomponent">
        <VideoComponent currentNavLink={currentNavLink} />
      </div>
    </div>
  );
};

export default Header;
