import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/NavBar';
import { Link } from 'react-router-dom';
import LoginButton from './LoginButton.js';
import LogoutButton from './LogoutButton.js';

const NavBar = () => {
	const { isAuthenticated } = useAuth0();

	return (
		<Navbar className='bg-info'>
			<Container>
				{isAuthenticated ? (
					<Nav variant='pills'>
						<Nav.Link>
							<Link to='/'>Home</Link>
						</Nav.Link>
						<Nav.Link>
							<Link to='/applications'>
								Your Job Applications
							</Link>
						</Nav.Link>
						<Nav.Link>
							<Link to='/settings'>Settings</Link>
						</Nav.Link>
						<Nav.Link>
							<Link to='/about'>About Us</Link>
						</Nav.Link>
						<LogoutButton />
					</Nav>
				) : (
					<Nav variant='pills'>
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
