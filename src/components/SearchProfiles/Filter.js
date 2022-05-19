import React from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs"
import { FiFilter } from "react-icons/fi"

export default function Filter() {
  const myComponentStyle = {
    width: "100%"
  } 
  return (
		<Wrapper>
			<div style={myComponentStyle}>
        <Label>Search Now</Label>				
        <br />
        <BsSearch className="search-icon" />
				<Input placeholder="Search"></Input>
			</div>
      <LilWrapper>
        <Text>Filter</Text>
        <FiFilter className="filter-icon"/>
      </LilWrapper>
      
		</Wrapper>
	);
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 10px;
  
`;

const Input = styled.input`
	border: 0;
	border-bottom: 2px solid black;
	padding-left: 15px;
	margin-left: -16px;
  background: none;
  width: 80%;
`;

const Label = styled.label`
  font-family: roboto;
`;

const LilWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Text = styled.p`
	font-family: roboto;
  padding-right: 3px;
`;