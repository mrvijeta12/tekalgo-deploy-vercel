import React from "react";
import "./About.css";
import VideoComponent from "../../Video Component/VideoComponent";

const Aboutus = () => {
  return (
    <div className="about">
      {/* <VideoComponent /> */}
      {/* <div class="video-background">
        <video autoPlay loop muted playsInline>
          <source src="./salesforce.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div class="centered-text">
          {" "}
          <h2>ABOUT TEKALGO</h2>
        </div>
      </div> */}

      <div className="welcome about_data">
        <h2>WELCOME TO TekAlgo</h2>
        <p>
          At TekAlgo, we believe in building the digital foundations that
          support and elevate your business. Our expertise in cloud computing
          and digital transformation empowers organizations to innovate, scale,
          and thrive in the dynamic landscape of today’s technology-driven
          world.
        </p>
      </div>
      <div className="mission about_data">
        <h2>OUR MISSION</h2>
        <p>
          Our mission is to provide seamless, robust, and scalable cloud
          solutions tailored to meet the unique needs of each client. We strive
          to deliver exceptional value through innovative services, expert
          guidance, and a commitment to excellence.
        </p>
      </div>
      <div className="whoweare about_data">
        <h2>WHO WE ARE</h2>
        <p>
          TekAlgo is a team of dedicated professionals with a passion for
          technology and a deep understanding of the cloud ecosystem. Our
          diverse team of cloud architects, engineers, and consultants brings
          together years of experience and a wealth of knowledge to tackle the
          most complex challenges.
        </p>
      </div>
      <div className="ourvalues about_data">
        <h2>OUR VALUES</h2>

        <ul>
          <li>
            <span>
              <strong>Innovation:</strong>
              We stay ahead of the curve, constantly exploring and adopting
              cutting-edge technologies to deliver innovative solutions.
            </span>
          </li>

          <li>
            <span>
              <strong>Customer-Centricity:</strong>
              Our clients are at the heart of our business. We tailor our
              solutions to meet their specific needs and exceed their
              expectations.
            </span>
          </li>

          <li>
            <span>
              <strong>Integrity:</strong>
              We operate with transparency, honesty, and a strong sense of
              ethics in everything we do.
            </span>
          </li>

          <li>
            <span>
              <strong>Excellence:</strong>
              We are committed to delivering high-quality services and
              solutions, ensuring the best outcomes for our clients.
            </span>
          </li>
        </ul>
      </div>

      <div className="ourApproach about_data">
        <h2>OUR APPROACH</h2>
        <p>
          At TekAlgo, we believe in a collaborative approach. We work closely
          with our clients to understand their goals, challenges, and unique
          requirements. This partnership ensures that our solutions are not only
          technically sound but also aligned with your business objectives.
        </p>
      </div>

      <div className="joinUs about_data">
        <h2>JOIN US</h2>
        <p>
          Discover how TekAlgo can transform your business. Whether you’re
          looking to migrate to the cloud, optimize your current setup, or need
          ongoing support, we are here to help you every step of the way.
        </p>
      </div>
    </div>
  );
};

export default Aboutus;
