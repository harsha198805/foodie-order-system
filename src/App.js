import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Button } from '@mui/material';
import styled from 'styled-components';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import UseNavigatePage from './components/UseNavigatePage';
import ParamsPage from './components/ParamsPage';
import MoreInfo from './components/MoreInfo';
import Navigation from './components/Navigation';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    
    
    <Router>
<Navigation />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/usenavigate" element={<UseNavigatePage />} />
        <Route path="/params/:id" element={<ParamsPage />} />
        <Route path="/more-info" element={<MoreInfo />}>
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contact-us" element={<ContactUs />} /> 
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
