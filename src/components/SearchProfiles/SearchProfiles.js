import React, {useState} from "react";
import styled from "styled-components"
import { MdPeopleOutline } from "react-icons/md"
import "./profiles.css"
import Filter from "./Filter.js"
import Profiles from "./Profiles.js";

export default function SearchProfiles() {
  const [profiles, setProfiles] = useState
    ({
      data: [
			{
				id: "0",
				name: "Wade Warren",
				photo_id: "0",
				role: "React Dev",
				description:
					"lorem ipsum fvoibiu zib ozib iu zi bebi foizuehfozihuefio uheofzuih zeiu h?! lorem ipsum fvoibiu zib ozib iu zi bebi foizuehfozihuefio uheofzuih zeiu h?! lorem ipsum fvoibiu zib ozib iu zi bebi foizuehfozihuefio uheofzuih zeiu h?!",
			},
			{
				id: "1",
				name: "Billy Burger",
				photo_id: "1",
				role: "Vue.js Dev",
				description:
					"lorem ipsum fvoibiu zib ozib iu zi bebi foizuehfozihuefio uheofzuih zeiu h?!",
			},
			{
				id: "2",
				name: "Tina Turner",
				photo_id: "2",
				role: "Software Engineer",
				description:
					"lorem ipsum fvoibiu zib ozib iu zi bebi foizuehfozihuefio uheofzuih zeiu h?!",
			},
			{
				id: "3",
				name: "Don Domingo",
				photo_id: "3",
				role: "Security Consultant",
				description:
					"lorem ipsum fvoibiu zib ozib iu zi bebi foizuehfozihuefio uheofzuih zeiu h?!",
			},
			{
				id: "4",
				name: "Fred Firefox",
				photo_id: "4",
				role: "Web Designer",
				description:
					"lorem ipsum fvoibiu zib ozib iu zi bebi foizuehfozihuefio uheofzuih zeiu h?!",
			},
			{
				id: "5",
				name: "Mary Monroe",
				photo_id: "5",
				role: "Backend Developer",
				description:
					"lorem ipsum fvoibiu zib ozib iu zi bebi foizuehfozihuefio uheofzuih zeiu h?!",
			},
			{
				id: "6",
				name: "Sara short",
				photo_id: "6",
				role: "Freelancer",
				description:
					"lorem ipsum fvoibiu zib ozib iu zi bebi foizuehfozihuefio uheofzuih zeiu h?!",
			},
			{
				id: "7",
				name: "Captain Crunch",
				photo_id: "7",
				role: "CEO",
				description:
					"lorem ipsum fvoibiu zib ozib iu zi bebi foizuehfozihuefio uheofzuih zeiu h?!",
			},
		],
  });
  return (
		<Container>
			<Header>
				<TitleContainer>
					<MdPeopleOutline className="students-icon" />
					<Title>Students</Title>
				</TitleContainer>
				<Subtext>Meet the students!</Subtext>
			</Header>
			<Filter setProfiles={setProfiles} profiles={profiles} />
			<Profiles profiles={profiles} />
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