// import react from "react";
// import "./VideoComponent.css";

// const VideoComponent = ({ currentNavLink }) => (
//   <div className="video-background">
//     <video autoPlay loop muted>
//       <source src="./salesforce.mp4" type="video/mp4" />
//       Your browser does not support the video tag.
//     </video>
//     {currentNavLink && <div className="overlay">{currentNavLink}</div>}
//   </div>
// );

// export default VideoComponent;

import React from "react";
import { useInView } from "react-intersection-observer";
import "./VideoComponent.css";

const VideoBackground = ({ currentNavLink }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Load the video only once
    threshold: 0.1, // Load when 10% of the component is visible
  });

  return (
    <div className="video-background" ref={ref}>
      {inView && (
        <video autoPlay loop muted>
          <source src="./salesforce.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      {currentNavLink && <div className="overlay">{currentNavLink}</div>}
    </div>
  );
};

export default VideoBackground;
