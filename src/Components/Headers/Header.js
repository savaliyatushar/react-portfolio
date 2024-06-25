import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./Header.css";
import HeaderData from "./HeaderData.json";
import {  cartoon, css, html, javascript, react, reactbs5, sass,  } from '../../images';
const Header = () => {
    return (
        <div>
            <section className='main-header'>
                <Container fluid>
                    <Row
                        className="d-flex align-items-center justify-content-center"
                        style={{ height: '70vh' }}>
                        <Col lg={5}
                            className="d-flex justify-content-center">
                            {HeaderData.map(item => (
                                <div key={item.id}>
                                    <h1
                                        className='text-white text-center animated-fade-in'>
                                        {item.heading}
                                        <span className='text-success'>
                                            {item.developerText}
                                        </span>
                                    </h1>
                                </div>
                            ))}
                        </Col>
                        <Col lg={7} 
                        className='d-flex justify-content-center'>
                            <div 
                            className="d-flex justify-content-center image-container">
                                <img 
                                src={html} alt="html" 
                                 className="corner html-top-left" />
                                <img 
                                src={sass}  alt="sass" 
                                className="corner sass-top-left" />   
                                <img 
                                src={javascript} 
                                alt="javascript" 
                                className="corner javascript-top-right" />  
                                <img
                                 src={cartoon} 
                                 alt="" 
                                 className="cartton1" />
                                <img 
                                src={css} 
                                alt="css" 
                                className="corner css-bottom-left" />
                                <img 
                                src={react} 
                                alt="react" 
                                className="corner react-bottom-right" />
                                <img 
                                    src={reactbs5} 
                                alt="reactbs5" 
                                className="corner reactbs5-bottom-right" />
                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>
        </div>
    );
}

export default Header;
