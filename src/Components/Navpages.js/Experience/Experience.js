import React from "react";
import "../Experience/Experience";
import "../About/About.css";

const Experience = () => {
  return (
    <div className="experience">
      <div className="video-background">
        <video autoPlay loop muted playsInline>
          <source src="./salesforce.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="centered-text">
          {" "}
          <h2>OUR EXPERIENCE</h2>
        </div>
      </div>

      <div className="experience_data_container">
        <div className="ourExperience experience_data">
          <h2>Our Experience</h2>
          <p>
            At TekAlgo, we are proud to be a full-service provider of Salesforce
            consulting services. Our team of experts has an average of over 5
            years of experience implementing Salesforce and collectively holds
            almost every Salesforce certification offered. As a consulting firm
            solely focused on Salesforce and its ecosystem of connected
            applications, we are uniquely positioned to provide you with the
            expertise you need to get the most out of your Salesforce
            investment.
          </p>

          <p>
            Our breadth of application experience and depth of industry-specific
            best practices set us apart from other Salesforce consulting firms.
            We understand that every organization is unique, and that’s why we
            take the time to get to know your business and its unique
            challenges. Our team of experts works closely with your team to
            develop tailored solutions that meet your specific business
            requirements.
          </p>

          <p>
            At TekAlgo, we pride ourselves on our ability to provide
            comprehensive Salesforce consulting services. From implementation to
            ongoing support and maintenance, we are with you every step of the
            way. Our team of experts has the experience and expertise you need
            to ensure your Salesforce investment is a success.
          </p>

          <p>
            As a Salesforce consultant, we understand that technology is only
            part of the equation. That’s why we focus on building strong
            relationships with our clients. We believe that collaboration and
            communication are key to a successful Salesforce implementation.
          </p>

          <p>
            Whether you are just starting with Salesforce or looking to optimize
            your existing Salesforce implementation, TekAlgo is here to help.
            Contact us today to learn more about our Salesforce consulting
            services and how we can help you get the most out of your Salesforce
            investment.
          </p>
        </div>

        <div className="ourExpertise experience_data">
          <h2> Our Expertise</h2>

          <div className="ourExpertise_data">
            <div className="cards card1">
              <h2>SALESFORCE SALES CLOUD</h2>
            </div>
            <div className="cards card2">
              <h2>SALESFORCE SALES CLOUD</h2>
            </div>{" "}
            <div className="cards card3">
              <h2>SALESFORCE SALES CLOUD</h2>
            </div>{" "}
            <div className="cards card4">
              <h2>SALESFORCE SALES CLOUD</h2>
            </div>{" "}
            <div className="cards card5">
              <h2>SALESFORCE SALES CLOUD</h2>
            </div>{" "}
            <div className="cards card6">
              <h2>SALESFORCE SALES CLOUD</h2>
            </div>{" "}
            <div className="cards card7">
              <h2>SALESFORCE SALES CLOUD</h2>
            </div>{" "}
            <div className="cards card8">
              <h2>SALESFORCE SALES CLOUD</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
