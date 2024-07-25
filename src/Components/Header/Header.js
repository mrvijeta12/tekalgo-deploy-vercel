import React, { useState } from "react";
import Navlinks from "../Navlinks.js/Navlinks";
import "./Header.css";
import logo from "../Assets/tekAlgo_logo_in_white.png";
import { VscThreeBars } from "react-icons/vsc";
import { ImCross } from "react-icons/im";
// import Aboutus from "../Navpages.js/Aboutus";
// import Blog from "../Navpages.js/Blog";
// import ContactUs from "../Navpages.js/ContactUs";
// import Experience from "../Navpages.js/Experience";
// import JoinTheTeam from "../Navpages.js/JoinTheTeam";
// import WhatWeDo from "../Navpages.js/WhatWeDo";
// import Footer from "../Footer/Footer";

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
          <img src={logo} alt="Logo" /> {/* Adjust the src as necessary */}
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
