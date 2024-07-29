import React from "react";
import { useInView } from "react-intersection-observer";
import "./VideoComponent.css";

const VideoComponent = ({ currentNavLink }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="video-background" ref={ref}>
      {inView && (
        <video autoPlay loop muted>
          <source src="./s1080.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      {currentNavLink && <div className="overlay">{currentNavLink}</div>}
    </div>
  );
};

export default VideoComponent;
