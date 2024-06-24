import "./About.css"
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
// import { blube, dynamic, fast, responsive } from "../../images"; 
import { MdSpeed } from "react-icons/md";
import { CiMobile2 } from "react-icons/ci";
import { TiLightbulb } from "react-icons/ti";
import { BiLogoReact } from "react-icons/bi";


const About = () => {
    return (
        <div>
            <section className='main-about'>
                <div>
                    <Container>
                        <div className="div-row">
                            <Row>
                                <Col lg={12} className="column">
                                    <div>
                                        <Col lg={12}>
                                            <div className="main-img">
                                                <div className="aboutimg1">
                                                    <MdSpeed className='aboutimg' />
                                                </div>
                                                <div>
                                                    <span className="h4 pt-1">Fast</span>
                                                </div>
                                                <div className="pt-3">
                                                    <span className="imgtext" >
                                                        Fast load times and lag free interaction,
                                                        <br /> My highest priority.
                                                    </span>
                                                </div>
                                            </div>
                                        </Col>
                                    </div>
                                    <div>
                                        <Col lg={12}>
                                            <div className="main-img">
                                                <div className="aboutimg1">
                                                    <CiMobile2 className='aboutimg' />
                                                </div> 
                                                
                                                <div >
                                                    <span className="h4 pt-1" >Responsive</span>
                                                </div>
                                                <div className="pt-3">
                                                    <span className="imgtext">My layouts will work on<br /> my device, big or small</span>
                                                </div>
                                            </div>
                                        </Col>
                                    </div>
                                    <div>
                                        <Col lg={12}>
                                            <div className="main-img">
                                                <div className="aboutimg1">
                                                    <TiLightbulb className='aboutimg' />
                                                </div>
                                                <div>
                                                    <span className="h4 pt-1">Intuitivi</span>
                                                </div>
                                                <div className="pt-3">
                                                    <span className="imgtext">My layouts will work on<br /> my device, big or small</span>
                                                </div>
                                            </div>
                                        </Col>
                                    </div>
                                    <div>
                                        <Col lg={12}>
                                            <div className="main-img">
                                                <div className="aboutimg1">
                                                    <BiLogoReact className='aboutimg' />
                                                </div>
                                                <div className="">
                                                    <span className="h4 pt-1">Dynamic</span>
                                                </div>
                                                <div className="pt-3">
                                                    <span className="imgtext">Websites don't have to be static <br />i love making pages come to life</span>
                                                </div>
                                            </div>
                                        </Col>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
            </section>
        </div>
    );
}

export default About;
