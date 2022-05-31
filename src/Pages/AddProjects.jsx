import { useState, useRef, useContext } from "react";
import { userContext } from "../context";
import Button from "../components/ui_comp/Button.js";
import Input from "../components/ui_comp/Input.js";
import styled from "styled-components";
import Title from "../components/ui_comp/Title.js";
import Checkbox from "../components/ui_comp/Checkbox.js";
import cvImage from "../images/cvImage.png";
import Axios from "axios";
import NavbarMob from "../components/ui_comp/NavbarMob";
// import { Image } from "cloudinary-react"
import { useNavigate } from "react-router-dom";

const NewProfile = () => {
  const { userId, setUserId, token, setToken } = useContext(userContext);
  const [inputs, setInputs] = useState();
  const [inputAccept, setInputAccept] = useState();
  const [url, setUrl] = useState("");
  const [cvVisibility, setCvVisibility] = useState("hidden");
  const [profileVisibility, setProfileVisibility] = useState("hidden");
  const [buttonType, setButtonType] = useState("");
  const inputFile = useRef();
  const incrFiles = 0;
  const navigate = useNavigate();
  //code for setting error messages above the form
  const errRef = useRef("");
  const [errMsg, setErrMsg] = useState("");

  function storeAndUpdate(data) {
    //adding data and update
    setInputs((inputs) => ({ ...inputs, ...data }));
  }

  const myNav = () => {
    navigate("/students", { replace: true });
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submited");
    console.log(inputs);
    console.log(inputAccept);
    // /user/profile/new
    const EDIT_P_URL =
      "https://bevisible-backend.herokuapp.com/user/profile/project/new";
    console.log(userId);
    fetch(EDIT_P_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token,
      },
      mode: "cors",
      body: JSON.stringify({
        //chang62860fa0210230064d61b8c0e coach to email after you can register with an email

        id: userId,
        student_id: userId,
        name: inputs.name,
        image: [inputs.picture, "test"],
        link: inputs.link,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          setErrMsg(data.success);
          setTimeout(() => {
            myNav();
          }, "250");
        } else if (data.error) {
          setErrMsg(data.error);
        } else {
          setErrMsg(data.message);
        }
        //navigate("/students/:id", { replace: true });
        // setErrMsg(data.message);
      });
  }

  function autoClickInput() {
    inputFile.current.click();
  }

  function onLoadFile() {
    visility(buttonType);
  }

  async function uploadFile(e) {
    let myTarget = e.target.textContent;
    if (myTarget.includes("Camera")) {
      console.log("picture");
      await setInputAccept("image/png, image/jpeg, image/jpg");
      //the useState is taking some time to change the variable
      await autoClickInput();
      await setButtonType("picture");
    } else {
      console.log("cv");
      await setInputAccept("application/pdf");
      setTimeout(autoClickInput, 15);
      setButtonType("cv");
    }
  }

  async function readUploaded() {
    const img = inputFile.current.files[incrFiles];
    // setIncrFiles(incrFiles + 1)
    console.log(incrFiles);
    console.log(img.name);
    //create The Image locally
    // const obj = URL.createObjectURL(img)

    if (
      img.name.includes("png") ||
      img.name.includes("jpeg") ||
      img.name.includes("jpg") ||
      img.name.includes("JPG")
    ) {
      const formData = new FormData();
      formData.append("file", img);
      formData.append("upload_preset", "gzllmk5l");
      Axios.post(
        "https://api.cloudinary.com/v1_1/dxq4veqsa/upload",
        formData
      ).then((response) => {
        console.log(response);
        setUrl(response.data.secure_url);
        //add to EditProfile OBJECT the link of the picture of the user
        storeAndUpdate({ picture: response.data.secure_url });
      });
    }
  }

  function visility(type) {
    if (type === "cv") {
      setCvVisibility(!cvVisibility);
    } else {
      setProfileVisibility(!profileVisibility);
    }
  }

  return (
    <Container>
      <NavbarMob></NavbarMob>
      <MainTitle>Add a project</MainTitle>
      <p ref={errRef} id="poppup" className="margin-p">
        {errMsg}
      </p>

      <InputCont>
        <Input
          title={"Project name"}
          placeholder={"My app"}
          icon={0}
          handleChange={storeAndUpdate}
          dataName={"name"}
        ></Input>

        <FlexCont>
          <TitlePic>
            <Title title={"Project picture"}></Title>
            <div style={{ alignSelf: "flex-end", display: "flex", gap: "8px" }}>
              <Button
                width={"80px"}
                marginTop={"0px"}
                buttonImage={9}
                uploadFile={uploadFile}
              ></Button>
              <img
                src={url}
                style={{ height: "45px", visibility: profileVisibility }}
                alt={"profile"}
              ></img>
              {/* <Image cloudName="dxq4veqsa" public_id =" "/> */}
            </div>
          </TitlePic>
        </FlexCont>
        <input
          type="file"
          id="file"
          ref={inputFile}
          style={{ display: "none" }}
          accept={inputAccept}
          onChange={readUploaded}
          name="files[]"
          onInput={onLoadFile}
        />
        <Input
          title={"Github"}
          placeholder={"https://github.com/johndoe01"}
          icon={5}
          marginB={"6px"}
          handleChange={storeAndUpdate}
          dataName={"link"}
        ></Input>
      </InputCont>
      <SpaceFooter>
        <Button
          buttonText={"Add project"}
          width={"318px"}
          submitForm={handleSubmit}
        ></Button>
      </SpaceFooter>
    </Container>
  );
};

export default NewProfile;

const Container = styled.div`
  display: flex;
  justify-content: space-around;

  flex-direction: column;
  justify-content: space-around;

  min-height: 100vh;
`;
const InputCont = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0;
  margin-bottom: 3rem;
`;

const MainTitle = styled.h1`
  align-self: center;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 47px;
  margin: 4rem;
`;
const TitleCont = styled.div`
  width: 300px;
  align-self: center;
`;

const CheckBoxCont = styled.div`
  margin-bottom: 30px;
`;

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
`;
const TitlePic = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
`;

const SpaceFooter = styled.div`
  display: flex;
  height: 10vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 8rem;
`;
