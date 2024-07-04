import React, { useEffect, useRef } from 'react';
import "./Aboutme.css"
import { Col, Container, Row } from 'react-bootstrap';
import Data from "./Data.json"
import { profile } from '../../images';
import Cv from '../Resume/cv';

const Aboutme = () => {
    const aboutmeref = useRef(null);

    useEffect(() => {
        const mainprofile = aboutmeref.current;

        const handleScroll = () => {
            if (mainprofile) {
                const top = mainprofile.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if (top < windowHeight * 0.5) {
                    mainprofile.classList.add('animate');
                } else {
                    mainprofile.classList.remove('animate');
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
            <section  className='main-profile'>
                <div className='sectioncolor'>
                    <div className='profileabout'>
                        <div className='aboutme'>
                            About me
                        </div>
                    </div>
                    <Container>
                        <Row ref={aboutmeref} className="profile-row">
                            <Col lg={4} className="profile-column mt-3 mb-3">
                                <div className="outerprofile">
                                    <div className="profile-div">
                                        <div className="profile-pic">
                                            <img src={profile} alt="profile" className="pro-pic" />
                                        </div>
                                    </div>
                                    <div className='pro-details'>
                                        <Row>
                                            <Col sm={12}>
                                                <div className='details1'>
                                                    <h6>Name:   Tushar Savaliya</h6>
                                                    <h6>Age:22 years</h6>
                                                    <h6>DOB:04/11/2002</h6>
                                                    <h6>City:Ahemdabad</h6>
                                                    <h6>Mo:9426658006</h6>
                                                    <h6><a className='text-success' href='https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRlRQfpdWvPwlFjSRltKGvXbLvTcSmcTmVLNjxfmfRxDvHSvntXBLbhPFBPdFClgDrjpTqq'>savaliyatushar100@gmail.com</a></h6>

                                                </div>
                                                
                                            </Col>
                                            <div className='d-flex justify-content-center'>
                                                <Cv />
                                            </div>
                                            {/* <Col sm={6}>
                                                <div className='details2'>
                                                    <h6>Tushar Savaliya</h6>
                                                    <h6>22 years</h6>
                                                    <h6>04/11/2002</h6>
                                                    <h6>Ahemdabad</h6>
                                                    <h6>xxxxxxxxx</h6>
                                                </div>
                                            </Col> */}
                                        </Row>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={8} className="aboutcol mt-3 mb-3">
                                <div className="aboutdetaile">
                                    {Data.map((section, index) => (
                                        <div key={index} className="about-p">
                                            <h2 className='text-success'>{section.title}</h2>
                                            {section.entries.map((entry, i) => (
                                                <div key={i}>
                                                    <p className=''>{entry.duration}</p>
                                                    {entry.degree ?     <h6>{entry.degree}</h6> : <h6>{entry.role}</h6>}
                                                    <p className='pera-p'>{entry.description}</p>
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </div>
    );
}

export default Aboutme;
