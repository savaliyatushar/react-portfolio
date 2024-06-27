import React from 'react';
import Aboutme from '../../Components/Aboutme/Aboutme';
import Header from '../../Components/Headers/Header';
import Skills from "../../Components/Skills/Skills"
import Feature from '../../Components/Features/Feature';
const Home = () => {
    return (
        <>
            <Header />
            <Feature />
            <Aboutme />
            <Skills />
        </>
    );
};

export default Home;
