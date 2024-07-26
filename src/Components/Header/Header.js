import React, { useState } from "react";
import Navlinks from "../Navlinks.js/Navlinks";
import "./Header.css";
import logo from "../Assets/tekAlgo_logo_in_white.png";
import { VscThreeBars } from "react-icons/vsc";
import { ImCross } from "react-icons/im";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleNavClick = () => {
    setSidebarOpen(false);
  };

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
    </div>
  );
};

export default Header;
