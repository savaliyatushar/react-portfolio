import React from 'react';
import Abouts from "../../Components/Abouts/About"
import Aboutme from '../../Components/Aboutme/Aboutme';
import Header from '../../Components/Headers/Header';
import Skills from "../../Components/Skills/Skills"
const Home = () => {
    return (
        <>
            <Header />
            <Abouts />
            <Aboutme />
            <Skills />
        </>
    );
};

export default Home;
