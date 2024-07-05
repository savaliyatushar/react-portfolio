import "./Features.css";
import React, { useEffect, useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { MdSpeed } from "react-icons/md";
import { CiMobile2 } from "react-icons/ci";
import { TiLightbulb } from "react-icons/ti";
import { BiLogoReact } from "react-icons/bi";
import DataFeatures from "./DataFeatures.json";
 
const icons = {
    MdSpeed: <MdSpeed className='aboutimg' />,
    CiMobile2: <CiMobile2 className='aboutimg' />,
    TiLightbulb: <TiLightbulb className='aboutimg' />,
    BiLogoReact: <BiLogoReact className='aboutimg' />
};

const Feature = () => {
    const featureref = useRef(null);

    useEffect(() => {
        const mainfeature = featureref.current;

        const handleScroll = () => {
            if (mainfeature) {
                const top = mainfeature.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if (top < windowHeight * 0.5) {
                    mainfeature.classList.add('animate');
                } else {
                    mainfeature.classList.remove('animate');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <section ref={featureref} className='main-feature'>
                <div>
                    <Container>
                        <div className='Features-div d-flex justify-content-center'>
                            <div className='Features pb-5'>
                                <span className="Featureshead">Features</span>
                            </div>
                        </div>
                        <div className="div-row">
                            <Row className="main-row">
                                {DataFeatures.map((feature, index) => (
                                    <Col lg={3} md={4} sm={6} xs={6} key={index} className="column">
                                        <div>
                                            <div className="main-img">
                                                <div className="aboutimg1">
                                                    {icons[feature.icon]}
                                                </div>
                                                <div>
                                                    <span className="h4 pt-1">{feature.title}</span>
                                                </div>
                                                <div className="pt-3">
                                                    <div className="imgtext">
                                                        <span className="imgtextdes">{feature.description}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                ))}
                            </Row>  
                        </div>
                    </Container>
                </div>
            </section>
        </div>
    );
}

export default Feature;
