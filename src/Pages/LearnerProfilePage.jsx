import React from "react";
import "../components/learner-profile/learner-profile-style.css";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

import portfolioImg from "../components/learner-profile/test-img/portfolio-img.JPG";
import theaterapp from "../components/learner-profile/test-img/theaterapp.jpg";

import Header from "../components/learner-profile/Header";
import Resume from "../components/learner-profile/Resume";
import StatusBar from "../components/learner-profile/StatusBar";
import Portfolio from "../components/learner-profile/Portfolio";
import Certifications from "../components/learner-profile/Certifications";
import ContactPhone from "../components/learner-profile/ContactPhone";
import ContactEmail from "../components/learner-profile/ContactEmail";
import Footer from "../components/Footer";
import NavbarMob from "../components/ui_comp/NavbarMob";

const LearnerProfile = () => {
  React.useEffect(() => {
    AOS.init();
    AOS.refresh();

    const LOGIN_URL = "https://bevisible-backend.herokuapp.com/user/profile";

    const urlArray = window.location.href.split("/");
    const id = urlArray[urlArray.length - 1];
    console.log(id);
    fetch(LOGIN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-access-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTQ3YzRmOTkwNmQ3MmY4MDZmZTg2MCIsImlhdCI6MTY1Mzg5ODQ2NywiZXhwIjoxNjUzOTg0ODY3fQ.FK8WGP5uZoaSR5L7YmQjz1buOpO9HILIkI9lbJSs75Q",
      },
      mode: "cors",
      body: JSON.stringify({
        id: id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
  /*
  GET ONE PROFILE
    /user/profile
    token needed
    {
        "id": "current user id"
    } */

  const heroStyle = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div className="body-container">
      <Section primary style={heroStyle}>
        <NavbarMob />
        <Header
          id="hero"
          name={"Augustus Granpa"}
          dev={"Frontend Developer"}
          bio={
            "Little description of yourself here. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit magni debitis consequatur inventore"
          }
        />
      </Section>

      <Section>
        <h2 className="dashboard-h2">Professional experience</h2>
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

        <ContactPhone />
        <ContactEmail />
      </Section>
      <Footer position={"sticky"} />
    </div>
  );
};

const Section = styled.div`
  padding: 40px;
  background-color: ${(props) => (props.primary ? "#DAECF6" : "white")};
`;

export default LearnerProfile;
