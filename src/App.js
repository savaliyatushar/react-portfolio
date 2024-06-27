import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from "./Components/Footers/Footers"
import Home from './pages/Home/Home';
import SkillsPage from './pages/SkillsPage/SkillsPage';
import AboutMePage from './pages/AboutMePage/AboutMe';
import FeaturesPage from './pages/FeaturesPage/Feature';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />}/>
          <Route path="/skills" element={<SkillsPage/>} />
          <Route path="/Feature" element={<FeaturesPage/>} />
          <Route path="/about-me" element={<AboutMePage />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
