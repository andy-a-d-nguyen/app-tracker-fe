import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/NavBar';
import { Link } from 'react-router-dom';
import LoginButton from './LoginButton.js';
import LogoutButton from './LogoutButton.js';

const NavBar = (props) => {
	const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();

	return (
		<Navbar>
			<Container>
				{isAuthenticated ? (
					<Nav>
						<Nav.Link>
							<Link to='/'>Home</Link>
						</Nav.Link>
						<Nav.Link>
							<Link to='/applications'>
								Your Job Applications
							</Link>
						</Nav.Link>
						<Nav.Link>
							<Link to='/about'>About</Link>
						</Nav.Link>
						<LogoutButton />
					</Nav>
				) : (
					<Nav>
						<Nav.Link>
							<Link to='/'>Home</Link>
						</Nav.Link>
						<LoginButton />
					</Nav>
				)}
			</Container>
		</Navbar>
	);
};

export default NavBar;
