import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Layout.css";
import { BrowserRouter } from "react-router-dom";
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <BrowserRouter>
        <Header />
        <main className="content">{children}</main>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Layout;
