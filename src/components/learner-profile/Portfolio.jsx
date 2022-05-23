import portfolioImg from "./test-img/portfolio-img.JPG";
import { ConfReactIcon, ConfHtmltIcon, ConfJsIcon } from "./ConfigureIcons";

const Portfolio = (props) => {
  return (
    <div data-aos="fade-up" className="portfolio-card">
      <h4>{props.name}</h4>
      <div className="technoligies flex">
        <ConfReactIcon />
        <ConfHtmltIcon />
        <ConfJsIcon />
      </div>
      <div
        className="portfoilio-img"
        style={{
          backgroundImage: `url(${props.img})`,
        }}
      ></div>
      <p>November 18 2020</p>
      <p>
        Little project using API to fetch recipes and other stuff. Worked in
        groups bla bla bla
      </p>
    </div>
  );
};

export default Portfolio;
