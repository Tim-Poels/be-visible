import React, { useState, useContext } from "react";
import { userContext } from "../../context";
import styled from "styled-components"
import { MdPeopleOutline } from "react-icons/md"
import "./profiles.css"
import Filter from "./Filter.js"
import Profiles from "./Profiles.js";
import profileData from "../../data.js";
import NavbarMob from "../ui_comp/NavbarMob";
import { Outlet } from 'react-router-dom';

export default function SearchProfiles() {
	//useContext for user id and token
		const [switchPage, setSwitchPage] = useState(false);
	const { userId, setUserId, token, setToken } = useContext(userContext);
	const [profiles, setProfiles] = useState(null);
	//console log for testing
	console.log("test user id " + userId + "test user token " + token)
  return (
		<Container>
			<Outlet />
			<NavbarMob />
			<Header>
				<TitleContainer>
					<MdPeopleOutline className="students-icon" />
					<Title>Students</Title>
				</TitleContainer>
				<Subtext>Meet the students!</Subtext>
			</Header>
			<Filter
				setProfiles={setProfiles}
				profiles={profiles}
				switchPage={switchPage}
				setSwitchPage={setSwitchPage}
			/>
			<Profiles
				setProfiles={setProfiles}
				profiles={profiles}
				switchPage={switchPage}
				setSwitchPage={setSwitchPage}
			/>
		</Container>
	);
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
	height: 12vh;
	display: flex;
	flex-direction: column;
  align-items:center
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
  font-size: 1rem;
`;