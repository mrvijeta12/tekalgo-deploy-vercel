import React from "react";
import Layout from "./Components/Layout/Layout";
import ScrollToTop from "./Components/Scroll To Top/ScrollToTop";
import GoToTop from "./Components/GoToTopBtn/GoToTop";
import AnimatedRoutes from "./Components/Animated Routes/AnimatedRoutes";
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
