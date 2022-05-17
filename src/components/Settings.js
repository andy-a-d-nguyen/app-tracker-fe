import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Settings = () => {
	const { user, logout } = useAuth0();
	const { name, email } = user;

	const deleteAccount = () => {
		logout({
			returnTo: window.location.origin,
		});
	};

	return (
		<Card>
			<Card.Body>
				<Card.Title>{name}</Card.Title>
				<Card.Title>{email}</Card.Title>
				<Button variant='primary' onClick={deleteAccount}>
					Delete Account
				</Button>
			</Card.Body>
		</Card>
	);
};

export default Settings;
