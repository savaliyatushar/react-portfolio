import React from 'react';
import Aboutme from '../../Components/Aboutme/Aboutme';
import Header from '../../Components/Headers/Header';
import Skills from "../../Components/Skills/Skills"
import Feature from '../../Components/Features/Feature';
import Work from '../../Components/Works/Work';
const Home = () => {
    return (
        <>
            <Header />
            <Feature />
            <Aboutme />
            <Work/>
            <Skills />
        </>
    );
};

export default Home;
