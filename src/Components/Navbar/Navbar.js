import './Navbar.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaFacebook } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { ImMail4 } from "react-icons/im";

import { images } from '../../images';

const Navbars = () => {


    return (
        <div>
            <section>
                <Navbar expand="md" bg="transperent" data-bs-theme="dark" className='main-navbar'>
                    <Container>
                        <Navbar.Brand
                            to="/"
                            className='/'>
                            <img
                                className='nav-logo'
                                src={images}
                                alt='brand' />WEB.DEV
                        </Navbar.Brand>
                        <Navbar.Toggle
                            aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse
                            id="basic-navbar-nav"
                            className="justify-content-between">
                            <Nav
                                className="mx-auto">
                                <Nav.Link
                                    to="#home">
                                    Home
                                </Nav.Link>
                                <Nav.Link
                                    to="#features">
                                    Features
                                </Nav.Link>
                                <Nav.Link
                                    to="#pricing">
                                    Pricing
                                </Nav.Link>
                            </Nav>
                            <div
                                >
                                <Nav
                                    className="mx-auto ">
                                    <Nav.Link
                                        to="/">
                                        <FaFacebook className='FaFacebook' />
                                        Facebook
                                    </Nav.Link>
                                    <Nav.Link
                                        to="/">
                                        <IoLogoGithub className='IoLogoGithub' />
                                        Github</Nav.Link>
                                    <Nav.Link
                                        to="/">
                                        <FaLinkedin className='FaLinkedin' />
                                        LinkedinIn
                                        </Nav.Link>
                                    <Nav.Link
                                        to="/">
                                        <ImMail4 className='ImMail4' />
                                        Mail
                                    </Nav.Link>
                                </Nav>
                            </div>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </section>
        </div>
    );
};

export default Navbars;
