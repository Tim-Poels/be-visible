import React from 'react'
import styled from 'styled-components'
import parse from 'html-react-parser'
import mySvgArr from './svgArr.js'
import './button.css'



const Button = ({ buttonText, buttonImage, width,marginTop, submitForm }) => {



  return (
    <UiBut className='uiBut' style={{width: width,marginTop:marginTop}} onClick={submitForm}>{buttonText}{buttonImage != null ? parse(mySvgArr[buttonImage]) : ''}</UiBut>
  )
}

export default Button

const UiBut = styled.button`
height: 45px;
display: flex;
align-items: center;
justify-content: center;
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
transition: 0.3s;

:hover{
  background: white;
  border: solid 1px #65C0CE;
  color: black;
}

:active{
  transform: translate(0px,4px);
  background: white;
  border: solid 1px #65C0CE;
  color: black;
}

`
