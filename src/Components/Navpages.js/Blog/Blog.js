import React, { useEffect } from "react";
import "./Blog.css";
import picture from "../../Assets/arif-riyanto-vJP-wZ6hGBg-unsplash.jpg";
import Aos from "aos";

const Blog = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="blog_container">
      <div className="blog_data">
        <div className="blog_cards blog_card1">
          <div className="user_image">
            <img src={picture} alt="" />
          </div>
          <div className="blog_content">
            <h2>
              How to select a Salesforce Revenue Lifecycle Management
              Consultant?
            </h2>
            <p>
              How to Select a Salesforce RLM Consultant Implementing Salesforce
              Revenue Lifecycle Management (RLM) is a significant…
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
            <img src={picture} alt="" />
          </div>
          <div className="blog_content">
            <h2>
              How to select a Salesforce Revenue Lifecycle Management
              Consultant?
            </h2>
            <p>
              How to Select a Salesforce RLM Consultant Implementing Salesforce
              Revenue Lifecycle Management (RLM) is a significant…
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
        <div className="blog_cards blog_card1" data-aos="fade-right">
          <div className="user_image">
            <img src={picture} alt="" />
          </div>
          <div className="blog_content">
            <h2>
              How to select a Salesforce Revenue Lifecycle Management
              Consultant?
            </h2>
            <p>
              How to Select a Salesforce RLM Consultant Implementing Salesforce
              Revenue Lifecycle Management (RLM) is a significant…
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
      </div>
    </div>
  );
};

export default Blog;
