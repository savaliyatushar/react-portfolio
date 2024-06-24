import React from 'react';
import "./Aboutme.css"
import { Col, Container, Row } from 'react-bootstrap';
// import Cards from '../Cards/Card';
import { profile } from '../../images';
// import Progressbars from '../SkillProgressbar/Progressbar';

const Aboutme = () => {
    return (
        <div>
            <section className='main-profile'>
                <div className='profileabout'>
                    <div className='aboutme'>
                        About me
                    </div>

                </div>
                <div className='sectioncolor'>
                    
                <Container>
                    <div>
                       
                        <Row className='profile-row'>
                           
                            <Col lg={4} className='profile-column mt-3 mb-3'>
                                <div className='outerprofile'>
                                    <div className='profile-div'>
                                        <div className='profile-pic'>
                                            <img src={profile} alt='profile' className='pro-pic' />
                                        </div>
                                    </div>

                                    <div className='pro-details'>
                                        <Col sm={6}>
                                            {/* <div className='main-details'> */}
                                            <div className='details1'>
                                                <h6>Name:</h6>
                                                <h6>age:</h6>
                                                <h6>dob:</h6>
                                                <h6>city:</h6>
                                                <h6>Mo:</h6>
                                                {/* </div> */}
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className='details2'>
                                                <h6>Tushar Savaliya</h6>
                                                <h6>22 years</h6>
                                                <h6>04/11/2002</h6>
                                                <h6>Ahemdabad</h6>
                                                <h6>xxxxxxxxx</h6>  

                                            </div>
                                        </Col>
                                    </div>
                                </div>

                            </Col>
                            <Col className="aboutcol">
                                <div className='aboutdetaile'>
                                  <div className='about-p'>
                                        <p>In many cases, the website itself serves as a testament to a developer’s website design creativity and development skills. Web developer portfolios can be as varied as the web developers themselves. In the next section we’ll dive into nine examples of personal websites from freelance web developers on Upwork.</p>
                                  </div>
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

export default Aboutme;
