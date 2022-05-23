import React from 'react'
import { useState } from 'react'
import Button from '../ui_comp/Button.js'
import Input from '../ui_comp/Input.js'
import styled from 'styled-components'
import Title from '../ui_comp/Title.js'
import Checkbox from '../ui_comp/Checkbox.js'

const Register = () => {

    const [inputs, setInputs] = useState([]);
    

    function storeAndUpdate(data) {
        //adding data and to the current
        setInputs(inputs => ({ ...inputs, ...data }))
    }

    function handleSubmit() {
        console.log("submited")
        console.log(inputs)
    }



    return (

        <Container>
            <MainTitle>Register</MainTitle>
            <InputCont>
                <Input title={"First Name"} placeholder={"John"} icon={0} handleChange={storeAndUpdate}></Input>
                <Input title={"Last Name"} placeholder={"Doe"} icon={1} handleChange={storeAndUpdate}></Input>
                <Input title={"Email"} placeholder={"johndoe@mail.com"} icon={2} type={"email"} handleChange={storeAndUpdate}></Input>
                <Input title={"Password"} placeholder={"Password"} icon={3} type={"password"} handleChange={storeAndUpdate}></Input>
                <Input title={"Confirm Password"} placeholder={"Password"} icon={3} type={"password"} handleChange={storeAndUpdate}></Input>
                <Input title={"Phone Number"} placeholder={"+32474123456"} icon={4} type={"tel"} handleChange={storeAndUpdate}></Input>
                <TitleCont>
                    <Title title={"Back-End / Front-End"} ></Title>
                    <CheckBoxCont>
                        <Checkbox svg={11} myTitle={"Back-End"} handleChange={storeAndUpdate}></Checkbox>
                        <Checkbox svg={11} myTitle={"Front-End"} handleChange={storeAndUpdate}></Checkbox>
                    </CheckBoxCont>
                </TitleCont>
                <FlexCont>
                    <TitlePic>
                        <Title title={"CV"}></Title>
                        <Button width={"100px"} marginTop={"0px"} buttonImage={8}></Button>
                    </TitlePic>
                    <TitlePic>
                        <Title title={"Picture Profile"}></Title>
                        <div style={{ alignSelf: "flex-end" }}>
                            <Button width={"100px"} marginTop={"0px"} buttonImage={9} ></Button>
                        </div>
                    </TitlePic>
                </FlexCont>
                <Input title={"Github"} placeholder={"https://github.com/johndoe01"} icon={5} marginB={"6px"} handleChange={storeAndUpdate}></Input>
                <Input title={"Linkedin"} placeholder={"https://linkedin.com/johndoe01"} icon={6} marginB={"6px"} handleChange={storeAndUpdate}></Input>
                <Input title={"Website"} placeholder={"https://www.johndoe01.com"} icon={7} handleChange={storeAndUpdate}></Input>
            </InputCont>
            <Button buttonText={"Register"} width={"318px"} submitForm={handleSubmit}>
            </Button>
            <SpaceFooter />
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
    min-height: 100vh;
`
const InputCont = styled.div`
    display: flex;
    flex-direction: column;
    margin-top:0;
    margin-bottom: 3rem;
`

const MainTitle = styled.h1`
    align-self: center;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 47px;
    margin: 4rem;
`
const TitleCont = styled.div`
    width:300px;
    align-self: center;
`

const CheckBoxCont = styled.div`
    margin-bottom: 30px;
`

// const CheckBox = styled.div`
//     font-size: 14px;
//     align-self: center;
//     font-family: 'Raleway';
//     font-style: normal;
//     font-weight: 400;
//     line-height: 20px;
//     width:300px;
// `

const FlexCont = styled.div`
    display: flex;
    width: 300px;
    align-self: center;
    justify-content: space-between;
    margin-bottom: 30px;
`
const TitlePic = styled.div`
    display:flex;
    flex-direction: column;
    align-self: center;
`

const SpaceFooter = styled.div`
    height: 10vh;
    width: 100%;
`