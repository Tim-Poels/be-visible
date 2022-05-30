import './App.css';
import styled from "styled-components"
import EditProfile from './components/login_reg/EditProfile';
import LoginPage from './Pages/LoginPage';
import LearnerProfilePage from "./Pages/LearnerProfilePage";
import SearchProfiles from "./components/SearchProfiles/SearchProfiles.js"
import React, { createContext, useState } from 'react';
import RegisterPage from './Pages/RegisterPage';
import Register from "./components/login_reg/EditProfile"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NewProvider } from './context'


function App() {
  return (
    <NewProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/students" element={<SearchProfiles />} />
          <Route path="/students/:id" element={<LearnerProfilePage />} />
          <Route path="/edit" element={<EditProfile />} />

        </Routes>
      </BrowserRouter>
    </NewProvider>
  );

}

export default App;

//standard padding for  each page
// const Content = styled.div`
//   min-height: 120vh;
//   width: 100vw;
//   background-color: white;
//   display: flex;
//   flex-direction: column;
//   overflow-x: scroll;
// `;
