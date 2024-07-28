import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Layout.css";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentNavLink, setCurrentNavLink] = useState("");

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleNavClick = (navLinkName) => {
    setSidebarOpen(false);
    setCurrentNavLink(navLinkName);
  };
  return (
    <div className="layout">
      <BrowserRouter>
        <Header
          currentNavLink={currentNavLink}
          sidebarOpen={sidebarOpen}
          toggleSidebar={toggleSidebar}
          handleNavClick={handleNavClick}
        />
        <main className="content">{children}</main>
        {/* <GoToTop /> */}
        <Footer handleNavClick={handleNavClick} />
      </BrowserRouter>
    </div>
  );
};

export default Layout;
