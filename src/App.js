import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from "./Components/Footers/Footers"
import Home from './pages/Home/Home';
import AboutPage from './pages/AboutPage/About';
import SkillsPage from './pages/SkillsPage/SkillsPage';
import AboutMePage from './pages/AboutMePage/AboutMe';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/skills" element={<SkillsPage/>} />
          <Route path="/about-me" element={<AboutMePage />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
