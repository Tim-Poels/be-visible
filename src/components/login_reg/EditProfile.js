import { useState, useRef, useContext } from 'react'
import { userContext } from "../../context";
import Button from '../ui_comp/Button.js'
import Input from '../ui_comp/Input.js'
import styled from 'styled-components'
import Title from '../ui_comp/Title.js'
import Checkbox from '../ui_comp/Checkbox.js'
import cvImage from '../../images/cvImage.png'
import Axios from 'axios'
import NavbarMob from '../ui_comp/NavbarMob';
// import { Image } from "cloudinary-react"


const EditProfile = () => {
    const { userId, setUserId, token, setToken } = useContext(userContext);
    const [inputs, setInputs] = useState()
    const [inputAccept, setInputAccept] = useState()
    const [url, setUrl] = useState('')
    const [cvVisibility, setCvVisibility] = useState('hidden')
    const [profileVisibility, setProfileVisibility] = useState('hidden')
    const [buttonType, setButtonType] = useState('')
    const inputFile = useRef()
    const incrFiles = 0

    console.log(userId + " test " + token)
    function storeAndUpdate(data) {
        //adding data and update
        setInputs(inputs => ({ ...inputs, ...data }))
    }

    function handleSubmit() {
        console.log("submited")
        console.log(inputs)
        console.log(inputAccept)
        // /user/profile/new
        const EDIT_P_URL = "https://bevisible-backend.herokuapp.com/user/profile/edit";


    fetch(EDIT_P_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-access-token":
					token ? token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTQ5OTUyYzU5OTQ4N2IyMzc5ZmMxMyIsImlhdCI6MTY1MzkwNTc2MywiZXhwIjoxNjUzOTkyMTYzfQ.J4QO7JSuoDETfIxadhNni24zeOhQ1Mjh5xnikZL4O-c"
                    
      },
      mode: "cors",
      body: JSON.stringify({
        //chang62860fa0210230064d61b8c0e coach to email after you can register with an email
        
        
        picture: inputs.picture,
        firstname: inputs.firstname,
        lastname: inputs.lastname,
        title: {
            frontend: inputs.frontend,
            backend:inputs.backend
        },
        about:"",
        status:"",
        tags:"",
        work: {
            position:"",
            duration:""
        },
        education: {
            school:"",
            graduation:""
        },
        interests:"",
        cvlink:"",
       // phonenumber:"blabla",
        socials: {
            email:"",
            github:inputs.github,
            linkedin:inputs.linkedin,
            website:inputs.website
        },
            id: userId
        

        // inputs
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // setErrMsg(data.message);
      });
  


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
            await setInputAccept("image/png, image/jpeg, image/jpg")
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

        const img = inputFile.current.files[incrFiles]
        // setIncrFiles(incrFiles + 1)
        console.log(incrFiles);
        console.log(img.name)
        //create The Image locally
        // const obj = URL.createObjectURL(img)

        if (img.name.includes("png") || ("jpeg") || ("jpg")) {
            const formData = new FormData()
            formData.append('file', img)
            formData.append("upload_preset", "gzllmk5l")
            Axios.post("https://api.cloudinary.com/v1_1/dxq4veqsa/upload", formData)
                .then((response) => {
                    console.log(response)
                    setUrl(response.data.secure_url)
                    //add to EditProfile OBJECT the link of the picture of the user
                    storeAndUpdate({ picture: response.data.secure_url })
                })
        } else {
            const formData = new FormData()
            formData.append('document', img)
            console.log(formData)
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer pdf_live_2vvVa1YPciVwfM4vhy9q437mjNvbRaxuMoVOUB0RJ01'
                },
                mode: "no-  cors",

            }

            Axios.post('https://api.pspdfkit.com/build', formData, requestOptions)

                .then((response) => {
                    console.log(response)
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
            <NavbarMob></NavbarMob>
            <MainTitle>EditProfile</MainTitle>
            <InputCont>
                <Input title={"First Name"} placeholder={"John"} icon={0} handleChange={storeAndUpdate} dataName={"firstname"}></Input>
                <Input title={"Last Name"} placeholder={"Doe"} icon={1} handleChange={storeAndUpdate} dataName={"lastname"}></Input>
                <Input title={"Phone Number"} placeholder={"+32474123456"} icon={4} handleChange={storeAndUpdate} dataName={"phoneNumber"}></Input>
                <TitleCont>
                    <Title title={"Back-End / Front-End"} ></Title>
                    <CheckBoxCont>
                        <Checkbox svg={11} myTitle={"Back-End"} handleChange={storeAndUpdate} dataName={"backend"}></Checkbox>
                        <Checkbox svg={11} myTitle={"Front-End"} handleChange={storeAndUpdate} dataName={"frontend"}></Checkbox>
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
                <Input title={"Github"} placeholder={"https://github.com/johndoe01"} icon={5} marginB={"6px"} handleChange={storeAndUpdate} dataName={"github"}></Input>
                <Input title={"Linkedin"} placeholder={"https://linkedin.com/johndoe01"} icon={6} marginB={"6px"} handleChange={storeAndUpdate} dataName={"linkedin"}></Input>
                <Input title={"Website"} placeholder={"https://www.johndoe01.com"} icon={7} handleChange={storeAndUpdate} dataName={"website"}></Input>
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