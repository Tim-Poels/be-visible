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
import Carousel from "../components/learner-profile/Carousel";
import Certifications from "../components/learner-profile/Certifications";
import ContactPhone from "../components/learner-profile/ContactPhone";
import ContactEmail from "../components/learner-profile/ContactEmail";
import Footer from "../components/Footer";
import NavbarMob from "../components/ui_comp/NavbarMob";
import { userContext } from "../context";
import { useContext, useState } from "react";

const LearnerProfile = () => {
  const { userId, token } = useContext(userContext);
  console.log("testing states " + token);

  const [profile, setProfile] = useState(null);

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
        "x-access-token": token,
      },
      mode: "cors",
      body: JSON.stringify({
        id: id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        //handle errors here later
        setProfile(data);
        console.log(data);
      });
  }, []);

  const heroStyle = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  if (profile === null) {
    return <div>Still loading...</div>;
  }
  return (
    <div className="body-container">
      <Section primary style={heroStyle}>
        <NavbarMob />
        <Header
          id="hero"
          name={profile.data.firstname + " " + profile.data.lastname}
          dev={profile.data.title}
          bio={profile.data.about}
          img={profile.data.picture}
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
        <Carousel projects={profile.projects} />
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
