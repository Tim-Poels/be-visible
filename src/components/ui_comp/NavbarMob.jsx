import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from "react";

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
      ;<div className={navbar ? "navbar-left block" : "navbar-left none"}></div>
    </>
  );
};

export default NavbarMob;
