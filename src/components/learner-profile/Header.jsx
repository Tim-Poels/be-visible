import ProfilePic from "./test-img/learner-pic.jpg";
import { FaGithub, FaLinkedin, FaDribbble } from "react-icons/fa";

const Header = (props) => {
  return (
    <div className="header">
      <img src={ProfilePic} alt="Profile Image" />
      <h1>{props.name}</h1>
      <h3>{props.dev}</h3>
      <div className="social">
        {/* Need to be ahrefs later */}
        <FaGithub />
        <FaLinkedin />
        <FaDribbble />
      </div>
      <div>
        <p className="bio center-align">{props.bio}</p>
      </div>
    </div>
  );
};

export default Header;
