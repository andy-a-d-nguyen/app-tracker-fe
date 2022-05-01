import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/NavBar';
import { Link } from 'react-router-dom';
import AuthenticationButton from './AuthenticationButton.js';

const NavBar = () => {
	return (
		<Navbar>
			<Container>
				<Nav>
					<Link to='/applications'>Your Job Applications</Link>
					<Link to='/about'>About</Link>
					<AuthenticationButton />
				</Nav>
			</Container>
		</Navbar>
	);
};

export default NavBar;
