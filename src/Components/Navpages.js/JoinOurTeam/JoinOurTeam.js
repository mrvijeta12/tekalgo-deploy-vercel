import React from "react";
import "./joinOurTeam.css";
import picture from "../../Assets/arif-riyanto-vJP-wZ6hGBg-unsplash.jpg";
import VideoComponent from "../../Video Component/VideoComponent";

const JoinOurTeam = () => {
  return (
    <div className="joinourteam">
      {/* <VideoComponent /> */}
      {/* <div class="video-background">
        <video autoPlay loop muted playsInline>
          <source src="./salesforce.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div class="centered-text">
          {" "}
          <h2>JOIN OUR TEAM</h2>
        </div>
      </div> */}

      <div className="joinourteam_data_container">
        <div className="joinourteam_data">
          <h4>WHY TEKALGO</h4>
          <h2>
            <span>
              <strong>
                LOOKING FOR A WORKPLACE WHERE YOU CAN TRULY THRIVE? LOOK NO
                FURTHER THAN TEKALGO.&nbsp;
              </strong>
              OUR COMPANY CULTURE VALUES EACH AND EVERY EMPLOYEE FOR WHO THEY
              ARE AND WHAT THEY BRING TO THE TABLE.
            </span>
          </h2>

          <h2>
            Together, we cultivate an environment where everyone feels valued
            and supported. Our secret sauce? Mentorship! Our associates lift
            each other up and ignite passion throughout the company. Join us at
            TekAlgo and discover your potential for success.
          </h2>
        </div>

        <div className="join_cards_container">
          <div className="join_cards join_card1">
            <h3>Open culture</h3>
            <p>
              TekAlgo values an open environment where collaboration is
              encouraged, and every team member is seen as a contributor to our
              growth and success. We prioritize hearing and valuing everyone's
              voice and actively work together to achieve shared goals.
            </p>
          </div>
          <div className="join_cards  join_card2">
            <h3>Open culture</h3>
            <p>
              TekAlgo values an open environment where collaboration is
              encouraged, and every team member is seen as a contributor to our
              growth and success. We prioritize hearing and valuing everyone's
              voice and actively work together to achieve shared goals.
            </p>
          </div>
          <div className="join_cards join_card3">
            <h3>Open culture</h3>
            <p>
              TekAlgo values an open environment where collaboration is
              encouraged, and every team member is seen as a contributor to our
              growth and success. We prioritize hearing and valuing everyone's
              voice and actively work together to achieve shared goals.
            </p>
          </div>
          <div className="join_cards join_card4">
            <h3>Open culture</h3>
            <p>
              TekAlgo values an open environment where collaboration is
              encouraged, and every team member is seen as a contributor to our
              growth and success. We prioritize hearing and valuing everyone's
              voice and actively work together to achieve shared goals.
            </p>
          </div>
        </div>

        <div className="join_complex_problem_data">
          <h2>
            <span>
              WE KNOW THAT DIVERSITY &nbsp;
              <strong>IS KEY TO SUCCESS,&nbsp;</strong>
              AND WE’RE ALL ABOUT HIRING A DIVERSE TALENT POOL WITH UNIQUE
              PERSPECTIVES TO HELP US SOLVE &nbsp;
              <strong>COMPLEX PROBLEMS.</strong>
            </span>
          </h2>

          <p>
            Our goal is to make sure every employee feels seen and known for
            their full selves, and we provide industry opportunities in
            alignment with our demographic goals and leadership. If
            transparency, respect, and safety are important to you too, then
            you’ve found your perfect fit at TekAlgo!
          </p>
        </div>

        <div className="missin_vision_conatainer">
          <h4>MISSION AND VISION</h4>
          <div className="missin_vision_data">
            <div className="mdata mdata_1">
              <h2>
                <span>
                  AT TekAlgo, WE EMBRACE DIVERSITY AND ARE INTENTIONAL IN
                  CREATING A &nbsp;
                  <strong>
                    WORKPLACE CULTURE THAT ACTIVELY PROMOTES INCLUSIVITY FOR ALL
                  </strong>
                </span>
              </h2>
            </div>
            <div className="mdata mdata_2">
              <p>
                We are committed to promoting open communication strategies that
                make it easy for everyone to express their concerns and feelings
                in a safe and comfortable environment. Join us at TekAlgo and
                help us build a brighter and more inclusive future for all.
              </p>
            </div>
          </div>
        </div>

        <div className="join_user_comments_container">
          <h4>SEE WHAT OUR EMPLOYEES SAY ABOUT US</h4>
          <div className="join_user_comments_data">
            <div className="join_user_cards card1">
              <div className="join_user_image_conatiner">
                <div className="join_user_image">
                  <img src={picture} alt="" />
                </div>
                <div className="join_user_name">
                  <p>
                    <strong>SARAH LEONE </strong>
                  </p>

                  <p>
                    {" "}
                    <small>SALESFORCE</small>{" "}
                  </p>
                  <p>
                    {" "}
                    <small>CONSULTANT</small>{" "}
                  </p>
                </div>
              </div>
              <div className="join_user_comment">
                <p>
                  TRUST! I love that I am not micromanaged and that we trust
                  each other to pull our weight in our own particular ways.
                </p>
              </div>
            </div>
            <div className="join_user_cards card1">
              <div className="join_user_image_conatiner">
                <div className="join_user_image">
                  <img src={picture} alt="" />
                </div>
                <div className="join_user_name">
                  <p>
                    <strong>SARAH LEONE </strong>
                  </p>

                  <p>
                    {" "}
                    <small>SALESFORCE</small>{" "}
                  </p>
                  <p>
                    {" "}
                    <small>CONSULTANT</small>{" "}
                  </p>
                </div>
              </div>
              <div className="join_user_comment">
                <p>
                  Working at TekAlgo has brought me a new and wonderful career
                  trajectory – I joined TekAlgo as a business analyst, which was
                  a change for me from a Salesforce-certified business
                  development rep. Then during my time here, I completed a
                  coding boot camp and became a Salesforce developer.
                </p>
              </div>
            </div>
            <div className="join_user_cards card1">
              <div className="join_user_image_conatiner">
                <div className="join_user_image">
                  <img src={picture} alt="" />
                </div>
                <div className="join_user_name">
                  <p>
                    <strong>SARAH LEONE </strong>
                  </p>

                  <p>
                    {" "}
                    <small>SALESFORCE</small>{" "}
                  </p>
                  <p>
                    {" "}
                    <small>CONSULTANT</small>{" "}
                  </p>
                </div>
              </div>
              <div className="join_user_comment">
                <p>
                  I love the work/life balance, the support given by upper
                  management, and the focus on employee growth and development.
                </p>
              </div>
            </div>
            <div className="join_user_cards card1">
              <div className="join_user_image_conatiner">
                <div className="join_user_image">
                  <img src={picture} alt="" />
                </div>
                <div className="join_user_name">
                  <p>
                    <strong>SARAH LEONE </strong>
                  </p>

                  <p>
                    {" "}
                    <small>SALESFORCE</small>{" "}
                  </p>
                  <p>
                    {" "}
                    <small>CONSULTANT</small>{" "}
                  </p>
                </div>
              </div>
              <div className="join_user_comment">
                <p>
                  I really enjoy the people I work with. We really have a good
                  team.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="missin_vision_conatainer">
          <h4>OPPORTUNITIES WITH US</h4>
          <div className="missin_vision_data">
            <div className="mdata mdata_1">
              <h2>
                <span>
                  WELCOME TO TEKALGO, WHERE &nbsp;
                  <strong>WE DELIVER SALESFORCE SUCCESS. BUILD WITH US</strong>
                </span>
              </h2>
            </div>
            <div className="mdata mdata_2">
              <p>
                Join our team of experienced Salesforce associates and be a part
                of our fresh and innovative approach to consulting. We embrace
                challenges and develop best-in-class solutions for our clients.
                We’re seeking individuals who love to learn and crave knowledge,
                excited to work on rewarding projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinOurTeam;
