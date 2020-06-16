import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div id="page-home">
            <div className="content">
                <header>
                    <Navbar bg="primary" variant="dark">
                        <div className="container">
                            <Navbar.Brand as={Link} to="/">Livros</Navbar.Brand>
                            <Nav className="ml-auto">
                                <Nav.Link as={Link} to="/livros">Adicionar Livros</Nav.Link>
                            </Nav>
                        </div>
                    </Navbar>
                </header>
            </div>
        </div>
    )
}

export default Home;