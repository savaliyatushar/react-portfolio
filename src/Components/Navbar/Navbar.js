import './Navbar.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { images } from '../../images';

const Navbars = () => {
    return (
        <div>
            <section>
                <Navbar expand="md"  data-bs-theme="dark" className='main-navbar'>
                    <Container>
                        <Navbar.Brand as={Link} to="/" className='navbar-brand'>
                            <img className='nav-logo' src={images} alt='brand' />WEB.DEV
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                            <Nav className="">
                                <Link className="nav-link" to="/home">Home</Link>
                                <Link className="nav-link" to="/Feature">Features</Link>
                                <Link className="nav-link" to="/about-me">About Me</Link>
                                <Link className='nav-link' to= "/work">Work</Link>
                                <Link className="nav-link" to="/skills">Skills</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </section>
        </div>
    );
};

export default Navbars;
