import React from 'react';
import { Link } from 'react-router-dom';
import { Button,Nav,Container,  Navbar } from 'react-bootstrap';


import './Header.css';
import useFirebase from '../../hooks/useFirebase';
const Header = () => {
    const { user, logOut,admin } = useFirebase();
    return (
        <div>
          <Navbar  collapseOnSelect expand="lg" >
                <Container className="header">
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Link  to="/home">Home</Link>
                        <Link to="/bikes">Bikes</Link>
                      <Link to="/register">Register</Link>
                      {admin && <>
                        <Link to="/makeadmin">makeAdmin</Link>
                        <Link to="/addone">AddOne</Link>
                        <Link to="/manageproducts">ManageProducts</Link>
                      </>}
                        {user?.email?
                            <>
                                <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link> <br/>
                                <Button onClick={logOut} variant="light">Logout</Button>
                            </> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;