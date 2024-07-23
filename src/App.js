import React from "react";
import Layout from "./Components/Layout/Layout";
import { Route, Router, Routes } from "react-router-dom";
import Navbar from "./Components/Navlinks.js/Navlinks";
import Aboutus from "./Components/Navpages.js/Aboutus";
import Experience from "./Components/Navpages.js/Experience";
import WhatWeDo from "./Components/Navpages.js/WhatWeDo";
import Blog from "./Components/Navpages.js/Blog";
import JoinTheTeam from "./Components/Navpages.js/JoinTheTeam";
import ContactUs from "./Components/Navpages.js/ContactUs";
import "./App.css";
const App = () => {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Aboutus />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/whatWeDo" element={<WhatWeDo />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/joinTheTeam" element={<JoinTheTeam />} />
          <Route path="/contactUs" element={<ContactUs />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
