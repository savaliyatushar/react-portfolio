import React from 'react';
import Aboutme from '../../Components/Aboutme/Aboutme';
import Header from '../../Components/Headers/Header';
import Skills from "../../Components/Skills/Skills"
import Feature from '../../Components/Features/Feature';
import Work from '../../Components/Works/Work';
import Tool from '../../Components/Tools/Tool';
// import Toolspage from '../Toolspage/Toolspage';
const Home = () => {
    return (
        <>
            <Header />
            <Feature />
            <Aboutme />
            <Work/>
            <Skills />
            <Tool/>
        </>
    );
};

export default Home;
