import React from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs"
import { FiFilter } from "react-icons/fi"
import { useState } from "react"
import { profileClicked } from "./Profiles.js";

export default function Filter(props) {
	const [backup, setBackup] = useState(props)

	const storeAndUpdate = (ev) => {
		let remaining = document.getElementById("profileContainer").childNodes;
		for (let i = 0; i < remaining.length; i++) {
			let profile = remaining[i];
			profile.className = "after-quick-fade-out";
			if (profile.childNodes.length > 1) {
				console.log(`${profile.id} was open`);
				let descriptionDiv = profile.childNodes[1];
				descriptionDiv.remove();
				let profileDiv = profile.childNodes[0];
				let arrow = profileDiv.childNodes[2];
				arrow.replaceWith(arrow.cloneNode(true));
				arrow = profileDiv.childNodes[2];
				arrow.className = "arrow-down";
				arrow.addEventListener("click", function clicked() {
					profileClicked(profile.id, props);
				});
			} else {
				console.log(`${profile.id} was not open`);
				let profileDiv = profile.childNodes[0];
				let arrow = profileDiv.childNodes[2];
				arrow.replaceWith(arrow.cloneNode(true));
				arrow = profileDiv.childNodes[2];
				arrow.className = "arrow-down";
				arrow.addEventListener("click", function clicked() {
					profileClicked(profile.id, props);
				});
			}
		}
		//filtering
		let passData = { data: [] };
		for (let i = 0; i < backup.profiles.data.length; i++) {
			if (
				backup.profiles.data[i].name
					.toLowerCase()
					.includes(ev.target.value.toLowerCase())
			) {
				passData.data.push(backup.profiles.data[i]);
			}
		}
		props.setProfiles(passData);
	};
  return (
		<Wrapper>
			<div className="label-float">
				<FlexCont>
					<Icon>
						<BsSearch />
					</Icon>
					<input type="text" placeholder="Search" onChange={storeAndUpdate} />
					<label>Search Now</label>
				</FlexCont>
			</div>
			<LilWrapper>
				<Text>Filter</Text>
				<FiFilter className="filter-icon" />
			</LilWrapper>
		</Wrapper>
	);
}

const FlexCont = styled.div`
	display: flex;
`;

const Icon = styled.div`
height: 22px;
width: 22px;
margin-bottom: 3px;
z-index: 10;
`

const Wrapper = styled.div`
	display: flex;

	flex-direction: row;
	justify-content: space-between;
	padding-bottom: 25px;
`;

const LilWrapper = styled.div`
  display: flex;
  flex-direction: row;	
  padding-top: 13px;
`;

const Text = styled.p`
	font-family: roboto;
  padding-right: 3px;
`;