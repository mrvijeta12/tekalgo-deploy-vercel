import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Layout.css";
import { BrowserRouter } from "react-router-dom";

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentNavLink, setCurrentNavLink] = useState(
    // localStorage.getItem("currentNavLink") || "ABOUT US"
    sessionStorage.getItem("currentNavLink") || "ABOUT US"
    // "ABOUT US"
  );

  useEffect(() => {
    const storedNavLink = localStorage.getItem("currentNavLink");
    if (storedNavLink) {
      setCurrentNavLink(storedNavLink);
    }
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleNavClick = (navLinkName) => {
    // localStorage.setItem("currentNavLink", navLinkName);
    sessionStorage.setItem("currentNavLink", navLinkName);

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
        <Footer handleNavClick={handleNavClick} />
      </BrowserRouter>
    </div>
  );
};

export default Layout;
