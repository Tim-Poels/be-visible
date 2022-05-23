import React, { createElement } from 'react'
import { useState,useRef } from 'react'
import Button from '../ui_comp/Button.js'
import Input from '../ui_comp/Input.js'
import styled from 'styled-components'
import Title from '../ui_comp/Title.js'
import Checkbox from '../ui_comp/Checkbox.js'

const Register = () => {

    const [inputs, setInputs] = useState();
    const [inputAccept, setInputAccept] = useState();
    const inputFile = useRef()
    const [profilePic, setProfilePic] = useState()
    const refProfilePic = useRef()
    

    function storeAndUpdate(data) {
        //adding data and update
        setInputs(inputs => ({ ...inputs, ...data }))
    }

    function handleSubmit() {
        console.log("submited")
        console.log(inputs)
    }

    // function forceClickHiddenElement(){
    //     inputFile.current.click();
    // }


    function uploadFile(e) {
        let myTarget =e.target.textContent
        if (myTarget.includes('Camera')){
            console.log('picture')
            setInputAccept("image/png, image/jpeg")
            inputFile.current.click();
        }else{
            console.log("cv");
            setInputAccept("pdf")
            inputFile.current.click();
        }
    
    }




    function readUploaded(e) {
        console.log(e.target.files)
        var file = e.target.files[0];
        var reader = new FileReader();

        reader.onload = function() {
          console.log(e.target.files[0])
        
          
          setProfilePic(reader.result) 
        //   refProfilePic.current

          
        //   profilePic.current.style={display : "block"}
        //   e.target.style = {backgroundImage: `url(${e.target.files[0].src}) `}
        };
        
        reader.readAsText(file);
        // let objectURL = URL.createObjectURL(reader.result);
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
                        <Button width={"100px"} marginTop={"0px"} buttonImage={8} uploadFile={uploadFile}></Button>
                    </TitlePic>
                    <TitlePic>
                        <Title title={"Picture Profile"} ><img className='myProfilePic' src={profilePic} ref={refProfilePic}></img></Title>
                        <div style={{ alignSelf: "flex-end" }}>
                            <Button width={"100px"} marginTop={"0px"} buttonImage={9}  uploadFile={uploadFile}></Button>
                        </div>
                    </TitlePic>
                </FlexCont>
            <input type="file" id='file' ref={inputFile} style={{display: 'none'}} accept={inputAccept} onChange={readUploaded} name="files[]"/>
                <Input title={"Github"} placeholder={"https://github.com/johndoe01"} icon={5} marginB={"6px"} handleChange={storeAndUpdate}></Input>
                <Input title={"Linkedin"} placeholder={"https://linkedin.com/johndoe01"} icon={6} marginB={"6px"} handleChange={storeAndUpdate}></Input>
                <Input title={"Website"} placeholder={"https://www.johndoe01.com"} icon={7} handleChange={storeAndUpdate}></Input>
            </InputCont>
            <Button buttonText={"Register"} width={"318px"} submitForm={handleSubmit}>
            </Button>
           {/*  hidden inputFile */}
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