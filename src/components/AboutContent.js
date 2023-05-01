import React from "react";
import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import React1 from "..//assets/react01.png";
import React2 from "..//assets/frontEnd.webp";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I</h1>
        <p>
          Hello Everyone. I am Ilija from Skopje,North Macedonia. I am Software
          Developer focused on improving and learning every day. I have skills
          on both sides of the story but find Front-End technologies more
          exciting and enjoyable. Highly motivated person and I am always
          energetic and eager to learn new skills.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={React1} className="img" alt="true" />
          </div>
          <div className="img-stack bottom">
            <img src={React2} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
