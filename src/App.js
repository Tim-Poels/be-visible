import './App.css';
import styled from "styled-components"
import Footer from './components/Footer.js';
import Register from './components/login_reg/Register'
import LearnerProfilePage from './components/learner-profile/LearnerProfilePage';

function App() {
  return (
<<<<<<< HEAD
    <div className="App">
      
    <div >

      <LearnerProfilePage />
      <Footer />
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
  z-index: 0;
  overflow-x: scroll;
`;
