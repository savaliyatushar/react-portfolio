import React from 'react';
import "./Skills.css";
import Progressbars from '../Progressbar/Progressbar';
import { Col, Container, Row } from 'react-bootstrap';

const Skills = () => {
    return (
        <div>
            <section className='section-skills'>
                <Container>
                    <div className='skillshead'>
                        <div className='skills'>
                            <span className='main-skills'>Skills</span>
                        </div>
                    </div>
                    <Row>
                      <Col>1223466</Col>
                            <Col>
                                <Progressbars />
                            </Col>
                        
                    </Row>
                </Container>
            </section>
        </div>
    );
}

export default Skills;
