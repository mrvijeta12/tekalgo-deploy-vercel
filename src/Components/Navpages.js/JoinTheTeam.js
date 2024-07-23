import React from "react";
import "./Experience.css";
import "./joinTheTeam.css";
import { useState } from "react";

const JoinTheTeam = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handelChange(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setInput({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }
  return (
    <div>
      <div className="experience">
        <div class="video-background">
          <video autoPlay loop muted playsInline>
            <source src="./salesforce.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div class="centered-text">
            {" "}
            <h2>JOIN THE TEAM</h2>
          </div>
        </div>

        <div className="jointheteam">
          <div className="intro">
            <p>
              Welcome to TekAlgo With 8 years of experience in Salesforce
              development, we specialize in delivering tailored solutions to
              meet your business needs. Our team is dedicated to helping you
              optimize your Salesforce implementation and achieve your goals.
            </p>
          </div>

          <div className="services">
            <h2 style={{ textAlign: "left" }}>Our Services</h2>
            <p>
              <b>Custom Salesforce Development:</b>
              Tailored solutions to fit your unique business requirements.
            </p>
            <p>
              <b>Salesforce Integration:</b>
              Seamlessly integrate Salesforce with your existing systems.
            </p>
            <p>
              <b>Salesforce Administration:</b>
              Efficient management and maintenance of your Salesforce
              environment.
            </p>
            <p>
              <b>Salesforce Consulting:</b>
              Expert advice to maximize the value of your Salesforce investment.
            </p>
            <p>
              <b>AppExchange Development:</b>
              Development and deployment of custom applications on the
              Salesforce AppExchange.
            </p>
          </div>

          <div className="whychooseus">
            <h2 style={{ textAlign: "left" }}>Why Choose Us</h2>

            <p>
              <b>Proven Track Record:</b>
              Successfully delivered [X] Salesforce projects across various
              industries.
            </p>
            <p>
              <b>Certified Experts:</b>
              Our team consists of Salesforce-certified professionals with deep
              knowledge and experience.
            </p>
            <p>
              <b>Client-Centric Approach:</b>
              We prioritize your needs and ensure solutions are aligned with
              your business objectives.
            </p>
            <p>
              <b>Innovative Solutions:</b>
              We leverage the latest Salesforce features and best practices to
              deliver cutting-edge solutions.
            </p>
          </div>
          <div className="ourprocess">
            <h2 style={{ textAlign: "left" }}>Our Process</h2>

            <p>
              {" "}
              <b>Discovery:</b> Understand your business needs and objectives.
            </p>
            <p>
              <b> Planning:</b> Develop a comprehensive plan tailored to your
              requirements.
            </p>
            <p>
              <b>Development:</b> Build and customize your Salesforce solution.
            </p>
            <p>
              <b>Testing: </b> Ensure the solution meets your expectations and
              functions seamlessly.
            </p>
            <p>
              <b>Deployment:</b> Implement the solution in your environment.
            </p>
            <p>
              <b>Support:</b> Provide ongoing support and maintenance.
            </p>
          </div>

          <div className="contact_form contact">
            <form onSubmit={handleSubmit}>
              <div className="contactus_Join">
                <h2>Contact Us</h2>
                <p>
                  Ready to Elevate Your Business with Salesforce? <br /> Contact
                  us today to schedule a free consultation and discover how we
                  can help you achieve your business goals with Salesforce.
                </p>
              </div>
              <div className="form">
                <label htmlFor="">Name:</label>
                <input
                  type="text"
                  name="name"
                  id=""
                  required
                  onChange={handelChange}
                  value={input.name}
                />
              </div>

              <div className="form">
                <label htmlFor="">Email:</label>
                <input
                  type="email"
                  name="email"
                  id=""
                  required
                  onChange={handelChange}
                  value={input.email}
                />
              </div>

              <div className="form">
                <label htmlFor="">Subject:</label>
                <input
                  type="text"
                  name="subject"
                  id=""
                  required
                  onChange={handelChange}
                  value={input.subject}
                />
              </div>

              <div className="form">
                <label htmlFor="">Message:</label>
                <textarea
                  name="message"
                  id=""
                  value={input.message}
                  onChange={handelChange}
                ></textarea>
              </div>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinTheTeam;
