import "./Features.css";
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { MdSpeed } from "react-icons/md";
import { CiMobile2 } from "react-icons/ci";
import { TiLightbulb } from "react-icons/ti";
import { BiLogoReact } from "react-icons/bi";
import DataFeatures from "./DataFeatures.json"

const icons = {
    MdSpeed: <MdSpeed className='aboutimg' />,
    CiMobile2: <CiMobile2 className='aboutimg' />,
    TiLightbulb: <TiLightbulb className='aboutimg' />,
    BiLogoReact: <BiLogoReact className='aboutimg' />
};

const Feature = () => {
    return (
        <div>
            <section className='main-about'>
                <div>
                    <Container>
                        <div className='Features-div d-flex justify-content-center'>
                            <div className='Features pb-5'>
                                <span className="Featureshead">Features</span>
                            </div>
                        </div>
                        <div className="div-row">
                            <Row>
                                {DataFeatures.map((feature, index) => (
                                    <Col lg={3} md={4} sm={6} key={index} className="column">
                                        <div>
                                            <div className="main-img">
                                                <div className="aboutimg1">
                                                    {icons[feature.icon]}
                                                </div>
                                                <div>
                                                    <span className="h4 pt-1">{feature.title}</span>
                                                </div>
                                                <div className="pt-3">
                                                    <span className="imgtext">
                                                        {feature.description}
                                                    </span>
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
