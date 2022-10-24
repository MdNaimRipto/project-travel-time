import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import { MdOutlineLuggage } from "react-icons/md";

const Header = () => {
    return (
        <Navbar className="pt-4 pb-4" bg="dark" variant='dark' expand="lg">
            <Container fluid className="container">
                <Navbar.Brand>
                    <Link to="/" className='text-decoration-none text-white'>
                        <MdOutlineLuggage className='fs-2' />
                        Travel Time
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Form className="d-none d-lg-flex w-100 mx-auto ">
                    <Form.Control
                        type="search"
                        placeholder="Search Your Destination"
                        className="me-2 w-75 ms-5 bg-secondary text-light Opacity"
                        aria-label="Search"
                    />
                </Form>
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 ms-3 my-lg-0 w-100 gap-3 justify-content-end align-items-lg-center"
                        navbarScroll
                    >
                        <Link to="/home" className='text-decoration-none text-white'>Home</Link>
                        <Link to="/destinations"
                            className='text-decoration-none text-white'>Destination's</Link>
                        <Link to="/blog" className='text-decoration-none text-white'>Blog</Link>
                        <Link to="/contact" className='text-decoration-none text-white'>Contact</Link>

                        <NavDropdown title="Link" id="navbarScrollingDropdown">
                            <p>
                                <Link href="#action4">
                                    Your Profile
                                </Link>
                            </p>
                            <p>
                                <Link href="#action5">
                                    Log out
                                </Link>
                            </p>
                        </NavDropdown>
                        <Link to="/login" className='text-decoration-none fw-semibold'><Button className='px-4 py-2' variant="warning">Login</Button></Link>
                    </Nav>
                    <Form className="d-flex d-lg-none">
                        <Form.Control
                            type="search"
                            placeholder="Search Your Destination"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;