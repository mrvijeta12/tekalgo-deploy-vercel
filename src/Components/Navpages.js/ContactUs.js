import React from "react";
import "./Experience.css";
import "./ContactUs.css";
import SocialLinks from "./SocialLinks";

const ContactUs = () => {
  return (
    <div className="experience">
      <div class="video-background">
        <video autoPlay loop muted playsInline>
          <source src="./salesforce.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div class="centered-text">
          {" "}
          <h2>CONTACT US</h2>
        </div>
      </div>

      <div className="experience_data_container">
        <div className="ourExperience experience_data ">
          {/* <h2>Contact Us</h2> */}
          <p className="contact_para">
            We're here to help! If you have any questions, feedback, or need
            assistance, please reach out to us through any of the following
            methods:
          </p>
        </div>

        <h1 className="contact_header">Contact Us</h1>
        <div className="conatct_links_conatiner">
          <div className="contact_address contact">
            <p>
              <b>Email:</b>sales@tekalgo.com
            </p>

            <p>
              <b>Phone:</b> +919118618111
            </p>
            <p>
              <b>Address:</b>Saket,New Delhi,India
            </p>

            <p>
              {" "}
              <b>Business Hours:</b> Monday - Friday: 9:00 AM - 5:00 PM
            </p>
          </div>

          <div className="contact_links contact">
            <h2>Social Links:</h2>
            <SocialLinks />
          </div>
        </div>

        <div className="contact_form contact">
          <form action="">
            <div className="form">
              <label htmlFor="">Name:</label>
              <input type="text" name="" id="" required />
            </div>

            <div className="form">
              <label htmlFor="">Email:</label>
              <input type="email" name="" id="" required />
            </div>

            <div className="form">
              <label htmlFor="">Subject:</label>
              <input type="text" name="" id="" required />
            </div>

            <div className="form">
              <label htmlFor="">Message:</label>
              <textarea name="" id=""></textarea>
            </div>

            <button>Submitt</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
