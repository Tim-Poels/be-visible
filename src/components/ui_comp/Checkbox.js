import React from "react"
import styled from "styled-components"

const Checkbox = ({myTitle}) => {
  return (
    <CheckB> <input type="checkbox"></input> <Title>{myTitle}</Title></CheckB>
  )
}

export default Checkbox

const CheckB = styled.div`
    font-size: 14px;
    align-self: center;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    width:300px;
    display flex;
`

const Title = styled.div`
font-size: 14px;
align-self: center;
font-family: 'Raleway';
font-style: normal;
font-weight: 400;
line-height: 20px;
`