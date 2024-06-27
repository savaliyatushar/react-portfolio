import React from 'react';
import "./Skills.css";
import Progressbars from '../Progressbar/Progressbar';
import { Col, Container, Row } from 'react-bootstrap';
import Skillsdata from "./Skilldata.json"
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
                        <Col md={6}  className="skillscol">
                            <div className='skillsdetaile'>
                                <div className='skill-p'>
                                    {Skillsdata.skills.map((paragraph, index) => (
                                        <p key={index}>{paragraph}</p>
                                    ))}
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <Progressbars />
                        </Col>

                    </Row>
                </Container>
            </section>
        </div>
    );
}

export default Skills;
