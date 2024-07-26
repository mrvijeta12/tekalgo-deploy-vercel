import React from "react";
import { FaLinkedin } from "react-icons/fa";
import "./SocialLinks.css";

const SocialLinks = () => {
  return (
    <div className="sociallinks">
      <a
        href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A100876215&keywords=tekalgo&origin=RICH_QUERY_SUGGESTION&position=0&searchId=65ade143-d0f8-4d68-bec0-ad8e80362362&sid=NKD&spellCorrectionEnabled=false"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="linkdein">
          <FaLinkedin />
        </span>
      </a>
    </div>
  );
};

export default SocialLinks;
