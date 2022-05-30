import './App.css';
import styled from "styled-components"
import LoginPage from './Pages/LoginPage';
import EditProfile from "./components/login_reg/EditProfile";
import LearnerProfilePage from "./Pages/LearnerProfilePage";
import SearchProfiles from "./components/SearchProfiles/SearchProfiles.js"
import React, { createContext, useState } from 'react';
import RegisterPage from './Pages/RegisterPage';
import Register from "./components/login_reg/EditProfile"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NewProvider } from './context'


function App() {
  console.log("start loading app comp")
  return (

    <NewProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/students" element={<SearchProfiles />} />
          <Route path="/students/edit/:id" element={<EditProfile />} />
          <Route path="/students/:id" element={<LearnerProfilePage />} />
        </Routes>
      </BrowserRouter>
    </NewProvider>
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
