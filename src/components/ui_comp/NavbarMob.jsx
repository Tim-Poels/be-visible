import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from "react";
import "./navbar.css";
import logo from "../../images/logo.jpg";

const NavbarMob = () => {
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => {
    setNavbar(!navbar);
    console.log(navbar);
  };

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
              <h4>Be Visible</h4>
            </a>
          </div>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Logout</a>
            </li>
            <li>
              <a href="#">Edit my profile</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavbarMob;
