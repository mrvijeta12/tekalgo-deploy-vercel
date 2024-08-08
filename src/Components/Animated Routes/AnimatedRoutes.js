import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Aboutus from "../Navpages.js/About/Aboutus";
import Experience from "../Navpages.js/Experience/Experience";
import WhatWeDo from "../Navpages.js/WhatWeDo/WhatWeDo";
import Blog from "../Navpages.js/Blog/Blog";
import ContactUs from "../Navpages.js/ContactUs/ContactUs";
import JoinOurTeam from "../Navpages.js/JoinOurTeam/JoinOurTeam";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Aboutus />
            </motion.div>
          }
        />
        <Route
          path="/experience"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Experience />
            </motion.div>
          }
        />
        <Route
          path="/whatWeDo"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <WhatWeDo />
            </motion.div>
          }
        />
        <Route
          path="/contactUs"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ContactUs />
            </motion.div>
          }
        />{" "}
        <Route
          path="/blog"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Blog />
            </motion.div>
          }
        />{" "}
        <Route
          path="/joinOurTeam"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <JoinOurTeam />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;

//
