import React, { useEffect } from "react";
import "./Blog.css";
import b1 from "../../Assets/b1.jpg";
import b2 from "../../Assets/b2.jpg";
import b3 from "../../Assets/b3.jpg";

import Aos from "aos";

const Blog = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);
  return (
    <div className="blog_container">
      <div className="blog_data">
        <div className="blog_cards blog_card1">
          <div className="user_image">
            <img src={b1} alt="" />
          </div>
          <div className="blog_content">
            <h2>
              How to select a Salesforce Revenue Lifecycle Management
              Consultant?
            </h2>
            <p>
              Salesforce RLM is a comprehensive solution designed to manage all
              aspects of your company’s revenue operations, from opportunity
              creation to revenue recognition and renewals. It integrates
              functionalities such as Configure, Price, Quote (CPQ); order and
              contract management; billing and invoicing; and revenue
              recognition. Implementing Salesforce RLM can streamline processes,
              improve accuracy, and drive financial outcomes.
            </p>

            <div className="user_details">
              <p>
                {" "}
                <b>MacLain Johnson</b>
              </p>
              <p>09 June, 2024</p>
            </div>
          </div>
        </div>
        <div className="blog_cards blog_card1" data-aos="fade-left">
          <div className="user_image">
            <img src={b2} alt="" />
          </div>
          <div className="blog_content">
            <h2>
              What are the best use cases for Salesforce Revenue Lifecycle
              Management?
            </h2>
            <p>
              Salesforce RLM is an end-to-end solution designed to manage every
              aspect of your company’s revenue operations. It integrates
              functionalities such as Configure, Price, Quote (CPQ); order and
              contract management; billing and invoicing; and revenue
              recognition into one cohesive platform. By automating and
              streamlining these processes, Salesforce RLM helps businesses
              improve accuracy, enhance efficiency, and achieve better financial
              outcomes.
            </p>

            <div className="user_details">
              <p>
                {" "}
                <b>Peyton Morrison</b>
              </p>
              <p>19 April, 2023</p>
            </div>
          </div>
        </div>
        <div className="blog_cards blog_card1" data-aos="fade-right">
          <div className="user_image">
            <img src={b3} alt="" />
          </div>
          <div className="blog_content">
            <h2>
              Understanding Salesforce Industry CPQ: Key Features and Their
              Impact on Your Business
            </h2>
            <p>
              Salesforce Industry Configure-Price-Quote (CPQ) is a robust
              solution that streamlines the sales process, enabling
              organizations to configure products, price orders, and generate
              quotes with speed and accuracy. As a leading Salesforce consulting
              firm, TekAlgo has extensive experience in helping businesses to
              successfully implement and optimize Salesforce Industry CPQ
              solutions.
            </p>

            <div className="user_details">
              <p>
                {" "}
                <b>Alan Dean</b>
              </p>
              <p>25 Dec, 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
