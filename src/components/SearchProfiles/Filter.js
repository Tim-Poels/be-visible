import React, {useState} from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs"
import { FiFilter } from "react-icons/fi"

export default function Filter() {

	const [regEx, setRegEx] = useState([]);

	function storeAndUpdate(data) {
		//adding data and to the current
		let variable = data.target.value;
		setRegEx((regEx) => (variable));
		console.log(regEx);
	}
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