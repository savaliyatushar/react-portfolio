import React from 'react';
import "./Footers.css"
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { images, pc } from '../../images';
import { IoLogoWhatsapp } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoFacebook } from "react-icons/io5";
import { LuCopyright } from "react-icons/lu";

const Footers = () => {
    return (
        <div>
            <section className='footer-section'>
              
                <Container>
                    <Row className='footerrow'>
                        {/* <div className='pc-back'>
                            <img src={pc} alt='pc' className='pc-img' />
                        </div> */}
                        <div className='footer-img'>
                            <img src={images} alt='logo' className='footer-logo' />

                            WEB.DEV
                        </div>
                        <Col lg={5} className='footerleft'>
                            <div className='text-center'>
                                <h4>Tushar Savaliya</h4>
                                <h4>I m React js Developer</h4>
                            </div>
                        </Col>
                        {/* <img src={pc} alt='pcimg' /> */}
                        <Col lg={5} className='footerright'>
                            <div>
                                <h4 className='text-uppercase'>contact us</h4>
                            </div>
                            <div className='media-co'>
                                {/* <div className='media-link'> */}
                                <div className='li-git'>
                                    <Nav.Link href='https://www.linkedin.com/in/tushar-savaliya-90a5a1250/'> <IoLogoLinkedin className='LinkedinIn' />  LinkedinIn</Nav.Link>
                                        <Nav.Link href='https://github.com/savaliyatushar'> <IoLogoGithub className='Github' />  Github</Nav.Link>
                                </div>
                               
                               {/* </div> */}
                                {/* <div className='media-link'> */}
                                    <div className='wp-face'>
                                        <Nav.Link href='/'> <IoLogoWhatsapp className='whatsapp' /> +9426658006</Nav.Link>
                                        <Nav.Link href='/'> <IoLogoFacebook className='Facebook' />  Facebook</Nav.Link>
                                    </div>
                                   
                                {/* </div> */}
                            </div>
                            
                        </Col>
                    </Row>
                    
                </Container>
                <div className='copyright  mt-5'>
                    <p className='LuCopyright'><LuCopyright />Tushar Savaliya</p>
                </div>
            </section>
        </div>
    );
}

export default Footers;
