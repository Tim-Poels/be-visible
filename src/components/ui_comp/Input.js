import { useState, useEffect } from 'react'
import './input.css'
import styled from 'styled-components'
import parse from 'html-react-parser'
import mySvgArr from './svgArr.js'

const Input = ({ placeholder, title, icon, marginB, type, handleChange, dataName, area }) => {
  const [inputValue, setInputValue] = useState('')


  useEffect(() => {
    handleChange({ [dataName]: inputValue })
  }, [inputValue])


  //logos Github and Linkendin needs an extra margin
  if (marginB === undefined) {
    marginB = "4px"
  }

  function updValue(e) {
    setInputValue(e.target.value)
  }

  return (
    <Container>
      <InpTitle>{title}</InpTitle>
      <div className="label-float">
        <FlexCont style={area === undefined ? {display:"visible"} : {display:"none"}}>
          <Icon style={{ marginBottom: marginB }} >{icon != null ? parse(mySvgArr[icon]) : ''}</Icon>
          <input type={type != null ? type : "text"} placeholder={title} onChange={updValue} value={inputValue} />
          <label>{placeholder}</label>
        </FlexCont>
        <FlexCont style={area === "true" ? {display:"visible"} : {display:"none"}}>
          <Icon style={{ marginBottom: marginB }} >{icon != null ? parse(mySvgArr[icon]) : ''}</Icon>
          <textarea style={{outline:"none"}} rows="4" cols="50" type={type != null ? type : "text"} placeholder={placeholder} onChange={updValue} value={inputValue}></textarea>
          <label>{}</label>
        </FlexCont>
      </div>
    </Container>
  )
}

export default Input

const Container = styled.div`
align-self: center;
width:300px;
`
const InpTitle = styled.h2`
font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 24px;
margin-top: 0;
margin-bottom: 0;
`
const FlexCont = styled.div`
display: flex;
margin-bottom: 2rem;
`

const Icon = styled.div`
height: 22px;
width: 22px;
// border: solid 1px black;
margin-bottom: ${props => props.marginB} 4px;
opacity: 0.7;
z-index: 10;
`
