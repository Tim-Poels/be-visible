import React from "react";
import styled from "styled-components"
import { MdPeopleOutline } from "react-icons/md"
import "./profiles.css"
import Filter from "./Filter.js"
import Profiles from "./Profiles.js";

export default function SearchProfiles(props) {
  return (
    <Container>
      <Header>
        <TitleContainer>
          <MdPeopleOutline className="students-icon" />
          <Title>Students</Title>
        </TitleContainer>
        <Subtext>Meet the students!</Subtext>
      </Header>
      <Filter />
      <Profiles profiles={props.profiles.data} />
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
  height: auto;
  padding: 40px;
  display: flex;
  flex-direction: column;
`;
const Header = styled.div`
  width: 100%;
  height: 15vh;
`;

const TitleContainer = styled.div`
  display: flex;
`;

const Title = styled.h2`
  font-family: raleway;
  font-size: 2rem;
`;

const Subtext = styled.p`
	font-family: raleway;
  font-size: 1rem
`;