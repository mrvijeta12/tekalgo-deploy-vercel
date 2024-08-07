import React, { useEffect } from "react";
import "../Experience/Experience.css";
import "./WhatWeDo.css";
import Aos from "aos";

const Experience = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);
  return (
    <div className="experience">
      <div className="experience_data_container">
        <div className="ourExperience experience_data">
          <p>
            At TekAlgo, we specialize in helping businesses achieve success with
            Salesforce. Our team is dedicated to partnering with our clients to
            identify untapped business value, design scalable technical
            solutions, and execute their delivery.
          </p>
          <p>
            We offer four distinct practices to suit the needs of our clients:
            TekAlgo Impact, TekAlgo Momentum, TekAlgo Marketing Automation
            Practice, and TekAlgo CPQ Practice.
          </p>
          <h2>TekAlgo Impact</h2>
          <p data-aos="zoom-in">
            For businesses looking to achieve their desired project outcomes
            with a defined velocity and execution, our TekAlgo Impact team is
            the answer. We work with you from the very start to clearly define
            tangible measurements for ROI and ongoing success with the
            Salesforce platform, establish actionable project timelines, and
            budget accordingly. Our Impact team ensures project success within a
            predetermined timeframe and budget.
          </p>
          <h2>TekAlgo Momentum</h2>
          <p data-aos="zoom-out">
            For businesses that require ongoing assistance and flexibility, our
            TekAlgo Momentum practice is the perfect solution. Our Momentum
            practice provides access to our entire pool of consulting resources
            to support anticipated needs and those that arise unexpectedly. We
            work with you to design a team structure, method of collaboration,
            and project cadence that best suits your business needs.
          </p>
          <h2>TekAlgo Marketing Automation Practice</h2>
          <p data-aos="zoom-in">
            TekAlgo’s Marketing Automation Practice provides services to help
            clients leverage the power of Salesforce Marketing Cloud and
            Salesforce Marketing Cloud Account Engagement, powered by Pardot for
            their marketing automation needs, all while delivering significant
            value and helping clients achieve their business goals.
          </p>
          <h2>TekAlgo CPQ Practice</h2>
          <p data-aos="zoom-out">
            TekAlgo’s dedicated Salesforce CPQ and Salesforce Industries CPQ
            practice supports organizations by maximizing the value driven
            through their quote-to-cash solutions. With subject matter experts
            focused on the entire lifecycle of the quote-to-cash process and its
            connected system of applications, such as billing, we pride
            ourselves on tailoring the CPQ solution to meet today’s business
            requirements while designing for the scale of tomorrow.
          </p>
          <p data-aos="zoom-out">
            We understand the complexities and challenges that businesses face
            when working with the Salesforce platform. That is why we have
            structured our services to help our clients succeed and overcome any
            obstacles that may arise. Our team is committed to delivering
            best-in-class service and support to our clients every step of the
            way.
          </p>

          <p data-aos="zoom-out">
            Partner with us today and unlock the full potential of Salesforce
            for your business.
          </p>
        </div>

        <div className=" whatwedo_conatiner">
          <h2> Service Offering</h2>

          <div className="whatwedo_data">
            <div className="cards card1" data-aos="fade-left">
              <h2>SALESFORCE SALES CLOUD</h2>
            </div>
            <div className="cards card2" data-aos="fade-right">
              <h2>SALESFORCE SALES CLOUD</h2>
            </div>{" "}
            <div className="cards card3" data-aos="fade-left">
              <h2>SALESFORCE SALES CLOUD</h2>
            </div>{" "}
            <div className="cards card4" data-aos="fade-right">
              <h2>SALESFORCE SALES CLOUD</h2>
            </div>{" "}
            <div className="cards card5" data-aos="fade-left">
              <h2>SALESFORCE SALES CLOUD</h2>
            </div>{" "}
            {/* <div className="cards card6">
            <h2>SALESFORCE SALES CLOUD</h2>
          </div>{" "}
          <div className="cards card7">
            <h2>SALESFORCE SALES CLOUD</h2>
          </div>{" "}
          <div className="cards card8">
            <h2>SALESFORCE SALES CLOUD</h2>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
