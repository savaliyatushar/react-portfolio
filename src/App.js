import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from "./Components/Footers/Footers"
import Home from './pages/Home/Home';
import SkillsPage from './pages/SkillsPage/SkillsPage';
import AboutMePage from './pages/AboutMePage/AboutMe';
import FeaturesPage from './pages/FeaturesPage/Feature';
import Workpage from "./pages/Workpage/Workpage"

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
          <Route path="/work" element={<Workpage/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
