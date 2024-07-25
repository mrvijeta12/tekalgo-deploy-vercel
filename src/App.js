import React from "react";
import Layout from "./Components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
// import Navbar from "./Components/Navlinks.js/Navlinks";
import Aboutus from "./Components/Navpages.js/Aboutus";
import Experience from "./Components/Navpages.js/Experience";
import WhatWeDo from "./Components/Navpages.js/WhatWeDo";
import Blog from "./Components/Navpages.js/Blog";
import JoinOurTeam from "./Components/Navpages.js/JoinOurTeam";
import ContactUs from "./Components/Navpages.js/ContactUs";
import ScrollToTop from "./Components/Navpages.js/ScrollToTop";
import GoToTop from "./Components/Navpages.js/GoToTop";
import "./App.css";
const App = () => {
  return (
    <div>
      <Layout>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Aboutus />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/whatWeDo" element={<WhatWeDo />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/joinOurTeam" element={<JoinOurTeam />} />
          <Route path="/contactUs" element={<ContactUs />} />
        </Routes>
        <GoToTop />
      </Layout>
    </div>
  );
};

export default App;
