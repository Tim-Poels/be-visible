import React from 'react'
import './input.css'
import styled from 'styled-components'

const Title = ({ title }) => {
  return (
    <Container>
      <InpTitle>{title}</InpTitle>
    </Container>
  )
}

export default Title

const Container = styled.div`
display: flex;
align-self: left;
`


const InpTitle = styled.h2`
font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 24px;
text-align: left;
margin-top:0;
`