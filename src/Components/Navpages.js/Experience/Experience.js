import React, { useEffect } from "react";
import "../Experience/Experience";
import "../About/About.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Experience = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="experience">
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

          <p data-aos="zoom-in">
            Our breadth of application experience and depth of industry-specific
            best practices set us apart from other Salesforce consulting firms.
            We understand that every organization is unique, and that’s why we
            take the time to get to know your business and its unique
            challenges. Our team of experts works closely with your team to
            develop tailored solutions that meet your specific business
            requirements.
          </p>

          <p data-aos="zoom-out">
            At TekAlgo, we pride ourselves on our ability to provide
            comprehensive Salesforce consulting services. From implementation to
            ongoing support and maintenance, we are with you every step of the
            way. Our team of experts has the experience and expertise you need
            to ensure your Salesforce investment is a success.
          </p>

          <p data-aos="zoom-in">
            As a Salesforce consultant, we understand that technology is only
            part of the equation. That’s why we focus on building strong
            relationships with our clients. We believe that collaboration and
            communication are key to a successful Salesforce implementation.
          </p>

          <p data-aos="zoom-out">
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
            <div className="cards card1" data-aos="fade-right">
              <h2>SALESFORCE SALES CLOUD</h2>
            </div>
            <div className="cards card2" data-aos="fade-left">
              <h2>SALESFORCE SALES CLOUD</h2>
            </div>{" "}
            <div className="cards card3" data-aos="fade-right">
              <h2>SALESFORCE SALES CLOUD</h2>
            </div>{" "}
            <div className="cards card4" data-aos="fade-left">
              <h2>SALESFORCE SALES CLOUD</h2>
            </div>{" "}
            <div className="cards card5" data-aos="fade-right">
              <h2>SALESFORCE SALES CLOUD</h2>
            </div>{" "}
            <div className="cards card6" data-aos="fade-left">
              <h2>SALESFORCE SALES CLOUD</h2>
            </div>{" "}
            <div className="cards card7" data-aos="fade-right">
              <h2>SALESFORCE SALES CLOUD</h2>
            </div>{" "}
            <div className="cards card8" data-aos="fade-left">
              <h2>SALESFORCE SALES CLOUD</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
