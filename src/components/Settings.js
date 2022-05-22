import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

const Settings = () => {
	const { user, logout, getAccessTokenSilently } = useAuth0();
	const { name, email } = user;

	const [errorResponse, setErrorResponse] = useState('');
	const [alert, setAlert] = useState(false);

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
				setAlert(true);
				setErrorResponse(error);
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
				{alert ?? (
					<Alert onClose={() => setAlert(false)} dismissible>
						<Alert.Heading>{errorResponse}</Alert.Heading>
					</Alert>
				)}
			</Card.Body>
		</Card>
	);
};

export default Settings;
