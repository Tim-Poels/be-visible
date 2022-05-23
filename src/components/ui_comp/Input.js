import React from 'react'
import './input.css'
import styled from 'styled-components'

const Input = ({placeholder, title, icon}) => {
  return (
    <Container>
      <InpTitle>{title}</InpTitle>
      <div className="label-float">
        <FlexCont>
        <Icon>{icon}</Icon>
        <input type="text" placeholder={title}/>
        <label>{placeholder}</label>
      </FlexCont> 
      </div>
    </Container>
  )
}

export default Input

const Container = styled.div`
align-self: center;
`

const InpTitle = styled.h2`
font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 24px;
margin-bottom: 0;
`
const FlexCont = styled.div`
display: flex;
`

const Icon = styled.div`
height: 22px;
width: 22px;
border: solid 1px black;
margin-bottom: 3px;
z-index: 10;
`
