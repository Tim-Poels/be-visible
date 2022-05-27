import './App.css';
import styled from "styled-components"
import Footer from './components/Footer.js';
import LoginPage from './Pages/LoginPage';
import EditProfile from "./components/login_reg/EditProfile";
import LearnerProfilePage from "./Pages/LearnerProfilePage";
import SearchProfiles from "./components/SearchProfiles/SearchProfiles.js"
import React, { useState } from 'react';
import RegisterPage from './Pages/RegisterPage';
import Register from "./components/login_reg/EditProfile"
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/students" element={<SearchProfiles />}>
          <Route path="edit" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
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
