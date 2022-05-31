import './App.css';
import EditProfile from './components/login_reg/EditProfile';
import LoginPage from './Pages/LoginPage';
import LearnerProfilePage from "./Pages/LearnerProfilePage";
import SearchProfiles from "./components/SearchProfiles/SearchProfiles.js"
import RegisterPage from './Pages/RegisterPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NewProvider } from './context'
import NewProfile from './components/login_reg/NewProfile';


function App() {
  return (
    <NewProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/students" element={<SearchProfiles />} />
          <Route path="/edit" element={<EditProfile />} />
          <Route path="/students/:id" element={<LearnerProfilePage />} />
          <Route path="/newprofile" element={<NewProfile />} />
        </Routes>
      </BrowserRouter>
    </NewProvider>
  );

}


export default App;

