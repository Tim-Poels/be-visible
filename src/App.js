import './App.css';
import styled from "styled-components"
import Footer from './components/Footer.js';
import Register from './components/login_reg/Register'
import LearnerProfilePage from './components/learner-profile/LearnerProfilePage';

function App() {
  return (
    <div >

      <LearnerProfilePage />
    </div>

  );
}

export default App;

//standard padding for  each page
const Content = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 20px 40px 20px 40px;
  z-index: 0;
  overflow-x: scroll;
`;