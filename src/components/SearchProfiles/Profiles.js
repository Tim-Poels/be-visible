import react, { useEffect } from "react";
import placeHolderImg from "../../images/unknown.png"
import styled from "styled-components";

export default function Profiles(props) {
  let profilesElems = []
  for (let i = 0; i < props.profiles.data.length; i++) {
    let profile = props.profiles.data[i];
    profilesElems.push(
			<ProfileContainer key={i} className="quick-fade-in" id={props.profiles.data[i].id}>
				<Profile>
					<Img src={placeHolderImg}></Img>
					<div>
						<Name>{profile.name}</Name>
						<Role>{profile.role}</Role>
					</div>
					<P onClick={() => profileClicked(profile.id, profile.description)}>^</P>
				</Profile>
			</ProfileContainer>
		);
  }
  return (
    <Container id="profileContainer">
      {profilesElems}  
    </Container>
  )
}


export const profileClicked = (profileID, description) => {
  let profilesChildren = document.getElementById("profileContainer").childNodes
  let profileDiv;
  console.log(profilesChildren);
  for (let i = 0; i < profilesChildren.length; i++) {
    console.log(profilesChildren[i].id, profileID);
    if (profilesChildren[i].id == profileID) {
      profileDiv = profilesChildren[i];
      break;
    }
  }
  console.log(profileDiv)
  profileDiv.className = "extend-out-before";
  let descriptionDiv = document.createElement("div");
	descriptionDiv.className = "profile-description-div-expand";
	let descriptionEl = document.createElement("p");
	descriptionEl.className = "profile-short-desc";
	descriptionEl.innerText = description;
	descriptionDiv.appendChild(descriptionEl);
  let button = document.createElement("button");
	button.innerText = "Profile";
	button.className = "profile-button-expand";
	descriptionDiv.appendChild(button);
	profileDiv.appendChild(descriptionDiv);
  let arrow = profileDiv.childNodes[0].childNodes[2];
	arrow.replaceWith(arrow.cloneNode(true));
	arrow = profileDiv.childNodes[0].childNodes[2];
	arrow.className = "arrow-up";
	setTimeout(() => {
		profileDiv.className = "profile-div-expand";
		arrow.addEventListener("click", () => {
			profileUnClicked(profileID, description);
		});
	}, 500);	
}

export const profileUnClicked = (profileID, desc) => {
  let profilesChildren = document.getElementById("profileContainer").childNodes;
	let profile;
	for (let i = 0; i < profilesChildren.length; i++) {
		if (profilesChildren[i].id == profileID) {
			profile = profilesChildren[i];
			break;
		}
	}
  let descriptionDiv = profile.childNodes[1];
	profile.className = "quick-fade-out";
  descriptionDiv.style.display = "none"
  let profileDiv = profile.childNodes[0];
	let arrow = profileDiv.childNodes[2];
	arrow.replaceWith(arrow.cloneNode(true));
	arrow = profileDiv.childNodes[2];
	arrow.className = "arrow-down";
  setTimeout(() => {
    descriptionDiv.remove();
		profile.className = "after-quick-fade-out"
    arrow.addEventListener("click", function clicked() {
			profileClicked(profileID, desc);
		});
	}, 450);	
	};
  /*
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
  */

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

const ProfileContainer = styled.div`
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