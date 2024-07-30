import React, { useEffect, useState } from "react";
import "../Experience/Experience.css";
import "./ContactUs.css";
import SocialLinks from "../../Social Links/SocialLinks";
import VideoComponent from "../../Video Component/VideoComponent";
import Aos from "aos";

const ContactUs = () => {
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

  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  return (
    <div className="experience">
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
          <div className="contact_address contact" data-aos="fade-right">
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

          <div className="contact_links contact" data-aos="fade-left">
            <h2>Social Links:</h2>
            <SocialLinks />
          </div>
        </div>

        <div className="contact_form contact" data-aos="zoom-in">
          <form onSubmit={handleSubmit}>
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
  );
};

export default ContactUs;
