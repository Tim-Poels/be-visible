import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Carousel = (props) => {
  const options = {
    rewind: true,
    gap: 20,
    perPage: 1,
    perMove: 1,
    type: "loop",
    pagination: false,
    mediaQuery: "min",
    breakpoints: {
      500: {
        perPage: 2,
      },
      1247: {
        perPage: 3,
      },
    },
  };
  return (
    <Splide options={options} aria-label="Portfolio">
      {props.projects.map((project) => (
        <SplideSlide key={Math.random()}>
          <a href={project.link}>
            <div className="portfolio-slide">
              <div
                className="portfolio-img"
                style={{
                  backgroundImage: `url(${project.image[0]})`,
                }}
              ></div>
            </div>
            <h4>{project.name}</h4>
          </a>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default Carousel;
