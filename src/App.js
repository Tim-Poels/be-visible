import './App.css';
import styled from "styled-components"
import Footer from './components/Footer.js';
import Register from './components/login_reg/Register'
import LoginPage from './Pages/LoginPage';
import Register from "./components/login_reg/Register";
import LearnerProfilePage from "./components/learner-profile/LearnerProfilePage";
import SearchProfiles from "./components/SearchProfiles/SearchProfiles.js"

const profiles = {
  data: [
    {
      id: "0",
      name: "Wade Warren",
      photo_id: "0",
      role: "React Dev",
      description:
        "lorem ipsum fvoibiu zib ozib iu zi bebi foizuehfozihuefio uheofzuih zeiu h?! lorem ipsum fvoibiu zib ozib iu zi bebi foizuehfozihuefio uheofzuih zeiu h?! lorem ipsum fvoibiu zib ozib iu zi bebi foizuehfozihuefio uheofzuih zeiu h?!",
    },
    {
      id: "1",
      name: "Billy Burger",
      photo_id: "1",
      role: "Vue.js Dev",
      description:
        "lorem ipsum fvoibiu zib ozib iu zi bebi foizuehfozihuefio uheofzuih zeiu h?!",
    },
    {
      id: "2",
      name: "Tina Turner",
      photo_id: "2",
      role: "Software Engineer",
      description:
        "lorem ipsum fvoibiu zib ozib iu zi bebi foizuehfozihuefio uheofzuih zeiu h?!",
    },
    {
      id: "3",
      name: "Don Domingo",
      photo_id: "3",
      role: "Security Consultant",
      description:
        "lorem ipsum fvoibiu zib ozib iu zi bebi foizuehfozihuefio uheofzuih zeiu h?!",
    },
    {
      id: "4",
      name: "Fred Firefox",
      photo_id: "4",
      role: "Web Designer",
      description:
        "lorem ipsum fvoibiu zib ozib iu zi bebi foizuehfozihuefio uheofzuih zeiu h?!",
    },
    {
      id: "5",
      name: "Mary Monroe",
      photo_id: "5",
      role: "Backend Developer",
      description:
        "lorem ipsum fvoibiu zib ozib iu zi bebi foizuehfozihuefio uheofzuih zeiu h?!",
    },
    {
      id: "6",
      name: "Sara short",
      photo_id: "6",
      role: "Freelancer",
      description:
        "lorem ipsum fvoibiu zib ozib iu zi bebi foizuehfozihuefio uheofzuih zeiu h?!",
    },
    {
      id: "7",
      name: "Captain Crunch",
      photo_id: "7",
      role: "CEO",
      description:
        "lorem ipsum fvoibiu zib ozib iu zi bebi foizuehfozihuefio uheofzuih zeiu h?!",
    },
  ],
};

function App() {
  return (
    <div className='app'>
      <Content>
        <SearchProfiles profiles={profiles} />
      </Content>
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
  overflow-x: scroll;
`;
