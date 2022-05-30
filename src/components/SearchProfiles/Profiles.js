import react, { useEffect } from "react";
import styled from "styled-components";
import placeholderImg from "../../images/unknown.png"

export default function Profiles(props) {
	fetchAllProfiles(props);
  let profilesElems = []
	if (props.profiles == null) {
		return <Container id="profileContainer">
			awaiting data
		</Container>;
	}
  for (let i = 0; i < props.profiles.data.length; i++) {
    let profile = props.profiles.data[i].profile;
    profilesElems.push(
			<ProfileContainer key={i} className="quick-fade-in" id={profile._id}>
				<Profile>
					{profile.picture === "nopic" && <Img src={placeholderImg}></Img>}
					{profile.picture !== "nopic" && <Img src={profile.picture}></Img>}
					<div>
						<Name>{profile.name}</Name>
						<Role>{profile.title}</Role>
					</div>
					<P onClick={() => profileClicked(profile._id, props)}>^</P>
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

const fetchAllProfiles = (props) => {
	if (props.profiles == null) {
		const LOGIN_URL = "https://bevisible-backend.herokuapp.com/user/all";
		const options = {
			method: "GET",
			mode: "cors",
			headers: {
				"x-access-token":
					"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOGUyOWRkZDM2ZGM0MGQ1MDAxOWNiZCIsImlhdCI6MTY1MzY0MjA4MiwiZXhwIjoxNjUzNzI4NDgyfQ.qH0gKV2lOkiUy1IxEp373FOb6JwZqcqw3MzSedafg8I",
			}
		};
		fetch(LOGIN_URL, options)
			.then((response) => response.json())
			.then((data) => {
				console.log(JSON.stringify(data));
				props.setProfiles(data)
			});
	}	
}


export const profileClicked = (profileID, props) => {
  let profilesFromComp = document.getElementById("profileContainer").childNodes;
  let profileDiv = "empty"
	let rightI;
  for (let i = 0; i < props.profiles.data.length; i++) {
    if (profileID === props.profiles.data[i].profile._id) {
      profileDiv = profilesFromComp[i];
			rightI = i
      break;
    }
  }
  if (profileDiv == "empty") {
    console.log("error profileDiv is empty")
  }
  profileDiv.className = "extend-out-before";
  let descriptionDiv = document.createElement("div");
	descriptionDiv.className = "profile-description-div-expand";
	let descriptionEl = document.createElement("p");
	descriptionEl.className = "profile-short-desc";
	descriptionEl.innerText = props.profiles.data[rightI].profile.about;
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
			profileUnClicked(profileID, props);
		});
	}, 500);	
}

export const profileUnClicked = (profileID, props) => {
  let profilesFromComp = document.getElementById("profileContainer").childNodes;
	let profileDiv = "empty";
	for (let i = 0; i < props.profiles.data.length; i++) {
		if (profileID === props.profiles.data[i].profile._id) {
			profileDiv = profilesFromComp[i];
			break;
		}
	}
	if (profileDiv == "empty") {
		console.log("error profileDiv is empty");
	}
  let descriptionDiv = profileDiv.childNodes[1];
	profileDiv.className = "quick-fade-out";
  descriptionDiv.style.display = "none"
  let TitleDiv = profileDiv.childNodes[0];
	let arrow = TitleDiv.childNodes[2];
	arrow.replaceWith(arrow.cloneNode(true));
	arrow = TitleDiv.childNodes[2];
	arrow.className = "arrow-down";
  setTimeout(() => {
    descriptionDiv.remove();
		profileDiv.className = "after-quick-fade-out"
    arrow.addEventListener("click", function clicked() {
			profileClicked(profileID, props);
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