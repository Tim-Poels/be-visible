import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState, useContext } from "react";
import { userContext } from "../../context";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../../images/logo.jpg";

const NavbarMob = () => {
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => {
    setNavbar(!navbar);
  };

  const { userId } = useContext(userContext);

  return (
    <>
      {navbar ? (
        <AiOutlineClose className="ButtonStyle" onClick={handleClick} />
      ) : (
        <AiOutlineMenu className="ButtonStyle" onClick={handleClick} />
      )}
      <div className={navbar ? "navbar-left block" : "navbar-left none"}>
        <div className="navbar-cont">
          <div className="profile">
            <img src={logo} alt="Be Visible logo" />

            <a href="#hero">
              <h4>BeVisible</h4>
            </a>
          </div>
          <ul>
            <li>
              <Link to="/students">Home</Link>
            </li>
            <li>
              <Link to="/">Logout</Link>
            </li>
            <li>
              <Link to="/edit">Edit my page</Link>
            </li>
            <li>
              <Link to="/addproject">Add a project</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavbarMob;
