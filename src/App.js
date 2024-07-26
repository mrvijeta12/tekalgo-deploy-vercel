import React from "react";
import Layout from "./Components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
// import Navbar from "./Components/Navlinks.js/Navlinks";
// import Aboutus from "./Components/Navpages.js/Aboutus";
// import Experience from "./Components/Navpages.js/Experience";
// import WhatWeDo from "./Components/Navpages.js/WhatWeDo";
// import Blog from "./Components/Navpages.js/Blog";
// import JoinOurTeam from "./Components/Navpages.js/JoinOurTeam";
// import ContactUs from "./Components/Navpages.js/ContactUs";
import ScrollToTop from "./Components/Navpages.js/ScrollToTop";
import GoToTop from "./Components/Navpages.js/GoToTop";
import AnimatedRoutes from "./Components/Navpages.js/AnimatedRoutes";
import "./App.css";

const App = () => {
  return (
    <div>
      <Layout>
        <ScrollToTop />
        <AnimatedRoutes />
        <GoToTop />
      </Layout>
    </div>
  );
};

export default App;
