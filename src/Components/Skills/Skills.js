import React, { useEffect, useRef } from 'react';
import "./Skills.css";
import Progressbars from '../Progressbar/Progressbar';
import { Col, Container, Row } from 'react-bootstrap';
import Skillsdata from "./Skilldata.json";

const Skills = () => {
    const skillsRef = useRef(null);

    useEffect(() => {
        const sectionSkills = skillsRef.current;

        const handleScroll = () => {
            if (sectionSkills) {
                const top = sectionSkills.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                // Add or remove 'animate' class based on element's position
                if (top < windowHeight * 0.75) {
                    sectionSkills.classList.add('animate');
                } else {
                    sectionSkills.classList.remove('animate');
                }
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <section ref={skillsRef} className='section-skills'>
                <Container>
                    <div className='skillshead'>
                        <div className='skills'>
                            <span className='main-skills'>Skills</span>
                        </div>
                    </div>
                    <Row>
                        <Col md={6} className="skillscol">
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
