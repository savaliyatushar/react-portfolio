import React from 'react';
import "./Footers.css"
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { images } from '../../images';
import { IoLogoWhatsapp } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoFacebook } from "react-icons/io5";

const Footers = () => {
    return (
        <div>
            <section className='footer-section'>
                <Container>
                    <Row className='footerrow'>
                        <Col lg={5} className='footerleft'>
                            <div className='footer-img'>
                                <img src={images} alt='logo' className='footer-logo' />
                                WEB.DEV
                            </div>
                            <div className='text-center'>
                                <h4>Tushar Savaliya</h4>
                                <h4>I m React js Developer</h4>
                            </div>
                        </Col>
                        <Col lg={5} className='footerright'>
                            <div>
                                <h4 className='text-uppercase'>contact us</h4>
                            </div>
                            <div className='media-co'>
                                <div className='media-icon'>
                                    <Nav.Link href='https://www.linkedin.com/in/tushar-savaliya-90a5a1250/'> <IoLogoLinkedin className='LinkedinIn' />  LinkedinIn</Nav.Link>
                                </div>
                                <div className='media-icon'>
                                    <Nav.Link href='/'> <IoLogoWhatsapp className='whatsapp' /> +9426658006</Nav.Link>
                                </div>   
                                <div className='media-icon'>
                                    <Nav.Link href='https://github.com/savaliyatushar'> <IoLogoGithub className='Github' />  Github</Nav.Link>
                                </div>
                                <div className='media-icon'>
                                    <Nav.Link href='/'> <IoLogoFacebook className='Facebook' />  Facebook</Nav.Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
}

export default Footers;
