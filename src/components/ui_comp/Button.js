import React from 'react'
import styled from 'styled-components'

const Button = ({ buttonText, buttonImage, width }) => {


  return (
    <UiBut style={{width: width}}>{buttonText}{buttonImage}</UiBut>
  )
}

export default Button

const UiBut = styled.button`
height: 45px;
background-color: #65C0CE;
border: none;
border-radius: 10px;
align-self: center;
color:white;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 25px;
line-height: 29px;
`