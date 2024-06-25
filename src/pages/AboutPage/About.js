import React from 'react';
import "../../Components/Abouts/About.css"
import About from '../../Components/Abouts/About';
import DataAbout from "../../Components/Abouts/DataAbout.json";

const AboutPage = (re) => {
  return (
    <>
      {DataAbout.map((data, index) => (
        <About
          key={index}
          img={data.img}
          description={data.description}
          title={data.title}
        />
      ))}
    </>
  );
};

export default AboutPage;
