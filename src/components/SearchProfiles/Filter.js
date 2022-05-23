import React from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs"
import { FiFilter } from "react-icons/fi"
import { useState } from "react"

export default function Filter(props) {
	/*
	const storeAndUpdate = (ev) => {
		if (ev.target.value.length < 2) {
			return
		}
		let passData = {data: []};
		const reg = new RegExp(`(${ev.target.value})`, "gi");
		console.log(props.profiles.data.length);
		for (let i = 0; i < props.profiles.data.length; i++) {
			console.log(props.profiles.data[i].name);
			if (reg.test(props.profiles.data[i].name) === true) {
				console.log('its a match')
				passData.data.push(props.profiles.data[i]);
			}
		}
		console.log(passData)
		props.setProfiles(passData)
	}
	*/
	const [backup, setBackup] = useState(props.profiles)

	const storeAndUpdate = (ev) => {
		let passData = { data: [] }
		for (let i = 0; i < backup.data.length; i++) {
			if (backup.data[i].name.toLowerCase().includes(ev.target.value.toLowerCase())) {
				passData.data.push(backup.data[i]);
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