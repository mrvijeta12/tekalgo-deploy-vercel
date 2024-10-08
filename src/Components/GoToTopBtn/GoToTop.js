import React, { useState } from "react";
import "./GoToTop.css";
import { FaArrowUp } from "react-icons/fa6";
import { useEffect } from "react";

const GoToTop = () => {
  const [visible, setVisible] = useState(false);
  function goToBtn() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  function listenToScroll() {
    let height = 100;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    // console.log(winScroll);

    if (winScroll > height) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <div className="top-btn-container">
      {visible && (
        <div className="top-btn" onClick={goToBtn}>
          <FaArrowUp />
        </div>
      )}
    </div>
  );
};

export default GoToTop;
