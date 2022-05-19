import React from "react";
import "./learner-profile-style.css";
import styled from "styled-components";
import portfolioImg from "./test-img/portfolio-img.JPG";
import theaterapp from "./test-img/theaterapp.jpg";

import Header from "./Header";
import Resume from "./Resume";
import StatusBar from "./StatusBar";
import Portfolio from "./Portfolio";
import Certifications from "./Certifications";
import ContactPhone from "./ContactPhone";
import ContactEmail from "./ContactEmail";

const LearnerProfile = () => {
  const heroStyle = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div className="body-container">
      <Section primary style={heroStyle}>
        <Header
          name={"Augustus Granpa"}
          dev={"Frontend Developer"}
          bio={
            "Little description of yourself here. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit magni debitis consequatur inventore"
          }
        />
      </Section>

      <Section>
        <h2>Professional experience</h2>
        <Resume location={"Brussel"} title={"Graphic Designer"} />
        <Resume location={"Riga"} title={"Teacher"} />
      </Section>

      <Section primary>
        <h2>Skills</h2>
        <StatusBar tech={"HTML"} level={"100%"} />
        <StatusBar tech={"React"} level={"80%"} />
        <StatusBar tech={"JS"} level={"75%"} />
        <StatusBar tech={"CSS"} level={"50%"} />
      </Section>

      <Section>
        <h2>Portfolio</h2>
        <Portfolio name={"DogBook"} img={portfolioImg} />
        <Portfolio name={"One Theater App"} img={theaterapp} />
      </Section>

      <Section primary>
        <h2>Certifications</h2>
        <Certifications />
      </Section>

      <Section>
        <h2>Contact</h2>
        {/* Can make this a single component and pass icon as a prop? */}
        <ContactPhone />
        <ContactEmail />
      </Section>
    </div>
  );
};

const Section = styled.div`
  padding: 40px;
  background-color: ${(props) => (props.primary ? "#DAECF6" : "white")};
`;

export default LearnerProfile;
