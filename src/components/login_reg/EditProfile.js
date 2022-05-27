import { useState, useRef } from 'react'
import Button from '../ui_comp/Button.js'
import Input from '../ui_comp/Input.js'
import styled from 'styled-components'
import Title from '../ui_comp/Title.js'
import Checkbox from '../ui_comp/Checkbox.js'
import cvImage from '../../images/cvImage.png'
import Axios from 'axios'
// import { Image } from "cloudinary-react"

const EditProfile = () => {

    const [inputs, setInputs] = useState()
    const [inputAccept, setInputAccept] = useState()
    const [url, setUrl] = useState('')
    const [cvVisibility, setCvVisibility] = useState('hidden')
    const [profileVisibility, setProfileVisibility] = useState('hidden')
    const [buttonType, setButtonType] = useState('')
    const [incrFiles, setIncrFiles] = useState(0)

    const inputFile = useRef()


    function storeAndUpdate(data) {
        //adding data and update
        setInputs(inputs => ({ ...inputs, ...data }))
    }

    function handleSubmit() {
        console.log("submited")
        console.log(inputs)
        console.log(inputAccept)

    }

    function autoClickInput() {
        inputFile.current.click();
    }

    function onLoadFile() {
        visility(buttonType)
    }

    async function uploadFile(e) {
        let myTarget = e.target.textContent
        if (myTarget.includes('Camera')) {
            console.log('picture')
            await setInputAccept("image/png, image/jpeg")
            //the useState is taking some time to change the variable
            await autoClickInput()
            await setButtonType('picture')
        } else {
            console.log("cv");
            await setInputAccept("application/pdf")
            setTimeout(autoClickInput, 15)
            setButtonType('cv')
        }
    }



    async function readUploaded() {
        setIncrFiles(incrFiles + 1)
        const img = inputFile.current.files[incrFiles]
        console.log(img.name)
        //create The Image locally
        // const obj = URL.createObjectURL(img)

        if (img.name.includes("png" || "jpeg" || "jpg")) {
            const formData = new FormData()
            formData.append('file', img)
            formData.append("upload_preset", "gzllmk5l")
            Axios.post("https://api.cloudinary.com/v1_1/dxq4veqsa/upload", formData)
                .then((response) => {
                    console.log(response)
                    setUrl(response.data.secure_url)
                    //add to EditProfile OBJECT the link of the picture of the user
                    storeAndUpdate({picture : response.data.secure_url})
                })
        }
    }





    function visility(type) {
        if (type === "cv") {
            setCvVisibility(!cvVisibility)
        } else {
            setProfileVisibility(!profileVisibility)
        }

    }


    return (

        <Container>
            <MainTitle>EditProfile</MainTitle>
            <InputCont>
                <Input title={"First Name"} placeholder={"John"} icon={0} handleChange={storeAndUpdate} dataName={"name"}></Input>
                <Input title={"Last Name"} placeholder={"Doe"} icon={1} handleChange={storeAndUpdate} dataName={"lastname"}></Input>
                {/* <Input title={"Email"} placeholder={"johndoe@mail.com"} icon={2} type={"email"} handleChange={storeAndUpdate} dataName={"socials.email"}></Input>
                <Input title={"Password"} placeholder={"Password"} icon={3} type={"password"} handleChange={storeAndUpdate}></Input>
                <Input title={"Confirm Password"} placeholder={"Password"} icon={3} type={"password"} handleChange={storeAndUpdate}></Input> */}
                <Input title={"Phone Number"} placeholder={"+32474123456"} icon={4} type={"tel"} handleChange={storeAndUpdate} dataName={"phoneNumber"}></Input>
                <TitleCont>
                    <Title title={"Back-End / Front-End"} ></Title>
                    <CheckBoxCont>
                        <Checkbox svg={11} myTitle={"Back-End"} handleChange={storeAndUpdate} dataName={"status.backend"}></Checkbox>
                        <Checkbox svg={11} myTitle={"Front-End"} handleChange={storeAndUpdate} dataName={"status.frontend"}></Checkbox>
                    </CheckBoxCont>
                </TitleCont>
                <FlexCont>
                    <TitlePic>
                        <Title title={"CV"}></Title>
                        <div style={{ display: "flex" }}>
                            <Button width={"80px"} marginTop={"0px"} buttonImage={8} uploadFile={uploadFile}></Button>
                            <img src={cvImage} style={{ height: "45px", backgroundRepeat: "no-repeat", visibility: cvVisibility }} alt={"cv"} ></img>
                        </div>
                    </TitlePic>
                    <TitlePic>
                        <Title title={"Picture Profile"} ></Title>
                        <div style={{ alignSelf: "flex-end", display: "flex", gap: "8px" }}>
                            <Button width={"80px"} marginTop={"0px"} buttonImage={9} uploadFile={uploadFile}></Button>
                            <img src={url} style={{ height: "45px", visibility: profileVisibility }} alt={"profile"}></img>
                            {/* <Image cloudName="dxq4veqsa" public_id =" "/> */}
                        </div>
                    </TitlePic>
                </FlexCont>
                <input type="file" id='file' ref={inputFile} style={{ display: 'none' }} accept={inputAccept} onChange={readUploaded} name="files[]" onInput={onLoadFile} />
                <Input title={"Github"} placeholder={"https://github.com/johndoe01"} icon={5} marginB={"6px"} handleChange={storeAndUpdate} dataName={"socials.github"}></Input>
                <Input title={"Linkedin"} placeholder={"https://linkedin.com/johndoe01"} icon={6} marginB={"6px"} handleChange={storeAndUpdate}dataName={"socials.linkedin"}></Input>
                <Input title={"Website"} placeholder={"https://www.johndoe01.com"} icon={7} handleChange={storeAndUpdate} dataName={"socials.website"}></Input>
            </InputCont>
            <Button buttonText={"Edit Profile"} width={"318px"} submitForm={handleSubmit}>
            </Button>
            <SpaceFooter />
        </Container>
    )
}

export default EditProfile

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