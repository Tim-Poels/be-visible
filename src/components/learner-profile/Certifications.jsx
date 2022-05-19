import { ConfReactIcon, ConfHtmltIcon, ConfJsIcon } from "./ConfigureIcons";
import { FaGithub, FaLinkedin, FaDribbble, FaPhone } from "react-icons/fa";
import CoachPic from "./test-img/micha.png";

const Certifications = (props) => {
  return (
    <div className="feedback">
      <div className="feedback-title flex">
        <img src={CoachPic} alt="coach" />
        <div className="flex">
          <h4>Coach Micha</h4>
        </div>
      </div>

      <p>
        We liked to work with Augustus. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Nemo error doloribus nostrum facil.
      </p>
      <p>
        He is reaaly good. Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Dicta dolorem, incidunt esse voluptate ducimus, expedi.
      </p>
      <p>
        He is reaaly good. Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Dicta dolorem, incidunt esse voluptate ducimus, expedi.
      </p>

      <h4>Coach Micha gave these badges:</h4>
      <div className="social">
        <FaGithub />
        <ConfReactIcon />
        <FaLinkedin />
        <ConfJsIcon />
      </div>
      <div className="social">
        <FaGithub />
        <FaLinkedin />
        <ConfJsIcon />
        <ConfReactIcon />
      </div>
    </div>
  );
};

export default Certifications;
