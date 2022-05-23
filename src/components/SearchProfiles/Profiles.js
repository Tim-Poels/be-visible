import react, { useState } from "react";
import placeHolderImg from "../../images/unknown.png"
import styled from "styled-components";


export default function Profiles(props) {
  let profiles = []
  for (let i = 0; i < props.profiles.length; i++) {
    let profile = props.profiles[i];
    profiles.push(
      <ProfileContainer key={i}>
        <Profile>
				<Img src={placeHolderImg}></Img>
				<div>
					<Name>{profile.name}</Name>
					<Role>{profile.role}</Role>
				</div>
				<P onClick={() => profileClicked(profile)}>^</P>
			</Profile>
      </ProfileContainer>	
		);
  }
  return (
    <Container id="profileContainer">
      {profiles}
    </Container>
  )
}

const profileClicked = (profile) => {
  let profiles = document.getElementById("profileContainer").childNodes
  let profileDiv = profiles[profile.id];
  profileDiv.className = "profile-div-expand";
  let descriptionDiv = document.createElement("div")
  descriptionDiv.className = "profile-description-div-expand"
  let description = document.createElement("p")
  description.className = "profile-short-desc"
  description.innerText = profile.description
  descriptionDiv.appendChild(description)
  let button = document.createElement("button")
  button.innerText = "Profile"
  button.className = "profile-button-expand"
  descriptionDiv.appendChild(button)
  profileDiv.appendChild(descriptionDiv)
  let arrow = profileDiv.childNodes[0].childNodes[2];
  arrow.replaceWith(arrow.cloneNode(true));
  arrow = profileDiv.childNodes[0].childNodes[2];
  arrow.className = "arrow-up";
  arrow.addEventListener("click", () => {
    descriptionDiv.remove();
    profileDiv.className = null;
    arrow.replaceWith(arrow.cloneNode(true));
		arrow = profileDiv.childNodes[0].childNodes[2];
		arrow.className = "arrow-down";
    arrow.addEventListener("click", function clicked() {
      profileClicked(profile)
    });
  })
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ProfileContainer = styled.div`
	height: 8vh;
	display: flex;
  flex-direction: column;
  margin-top: 2.5px;
  margin-bottom: 2.5px;
`;

const Profile = styled.div`
  width: 100%;
  height: 8vh;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Img = styled.img`
  height: 8vh;
  border: 2px solid black;
  border-radius: 100%;
  margin-right: 5px;
  padding: 2px;
`;

const Name = styled.p`
  font-family: roboto;
  font-weight: bold;
  font-size: 2.5vh;
`;

const Role = styled.p`
	font-family: roboto;
	font-size: 2vh;
  color: grey;
`;

const P = styled.p`
  font-size: 1.5rem;
	margin-right: 20px;
	margin-left: auto;
	position: relative;
	font-family: raleway;
	font-weight: bolder;
	transform: scale(1, 0.5) rotate(0.5turn);
`;