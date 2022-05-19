import React from 'react'
import Button from '../ui_comp/Button.js'
import Input from '../ui_comp/Input.js'
import styled from 'styled-components'

export const Register = () => {
    return (

        <Container>
            <Title>Register</Title>
            <Input title={"First Name"} placeholder={"John"}> </Input>
            <Input title={"Last Name"} placeholder={"Doe"} > </Input>
            <Input title={"Email"} placeholder={"johndoe@mail.com"} > </Input>

            <Button buttonText={"Register"} width={"318px"}></Button>
        </Container>

    )
}

export default Register

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: space-around;
      }
    height: 100vh;

`
const Title = styled.h1`
    font-size: 40;
    align-self: center;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 47px;
`
