import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Settings = () => {
	const { user, logout, getAccessTokenSilently } = useAuth0();
	const { name, email } = user;

	const deleteAccount = async () => {
		const token = await getAccessTokenSilently();
		const requestConfig = {
			url: `${process.env.REACT_APP_SERVER_URL}/user/${email}`,
			method: 'delete',
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};
		axios
			.request(requestConfig)
			.then(() => {
				logout({
					returnTo: window.location.origin,
				});
			})
			.catch((error) => {
				console.log('error: ' + error);
			});
	};

	return (
		<Card>
			<Card.Body>
				<Card.Title>Name: {name}</Card.Title>
				<Card.Title>Email: {email}</Card.Title>
				<Button variant='primary' onClick={deleteAccount}>
					Delete Account
				</Button>
			</Card.Body>
		</Card>
	);
};

export default Settings;
