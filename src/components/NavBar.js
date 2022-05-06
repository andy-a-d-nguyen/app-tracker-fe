import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/NavBar';
import { Link } from 'react-router-dom';
import LogoutButton from './LogoutButton.js';

const NavBar = () => {
	return (
		<Navbar>
			<Container>
				<Nav>
					<Nav.Link>
						<Link to='/'>Your Job Applications</Link>
					</Nav.Link>
					<Nav.Link>
						<Link to='/about'>About</Link>
					</Nav.Link>
					<LogoutButton />
				</Nav>
			</Container>
		</Navbar>
	);
};

export default NavBar;
