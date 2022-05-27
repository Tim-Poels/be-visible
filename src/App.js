import './App.css';
import styled from "styled-components"
import Footer from './components/Footer.js';
import LoginPage from './Pages/LoginPage';
import EditProfile from "./components/login_reg/EditProfile";
import LearnerProfilePage from "./Pages/LearnerProfilePage";
import SearchProfiles from "./components/SearchProfiles/SearchProfiles.js"
import React, { useState } from 'react';
import RegisterPage from './Pages/RegisterPage';


function App() {
  return (

    <div >
      {/* <RegisterPage /> */}
      <LearnerProfilePage />

    </div>

  );
}

export default App;

//standard padding for  each page
const Content = styled.div`
  min-height: 120vh;
  width: 100vw;
  background-color: white;
  display: flex;
  flex-direction: column;
  overflow-x: scroll;
`;
