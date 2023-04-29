import "./HeroImgStyles.css";
import batmanImg from "../assets/batman.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={batmanImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>HI,I am A FULL-STACK DEVELOPER</p>
        <h1>Software Developer </h1>
        <div>
          <Link to="projects" className="btn">
            Projects
          </Link>
          <Link to="contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
