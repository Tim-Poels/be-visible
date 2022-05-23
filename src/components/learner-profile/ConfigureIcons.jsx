import { IconContext } from "react-icons";
import { FaReact, FaHtml5, FaJsSquare } from "react-icons/fa";

//Functions to configure the colors of icons

const ConfReactIcon = () => {
  return (
    <>
      <IconContext.Provider value={{ color: "#61DAFB" }}>
        <FaReact />
      </IconContext.Provider>
    </>
  );
};

const ConfHtmltIcon = () => {
  return (
    <>
      <IconContext.Provider value={{ color: "orange" }}>
        <FaHtml5 />
      </IconContext.Provider>
    </>
  );
};

const ConfJsIcon = () => {
  return (
    <>
      <IconContext.Provider value={{ color: "#EAD41C" }}>
        <FaJsSquare />
      </IconContext.Provider>
    </>
  );
};

export { ConfReactIcon, ConfHtmltIcon, ConfJsIcon };
