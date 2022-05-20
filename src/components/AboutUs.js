import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const AboutUs = () => {
	const [chuckNorrisFact, setChuckNorrisFact] = useState('');

	const { getAccessTokenSilently } = useAuth0();

	const getChuckNorrisFact = async () => {
		const token = await getAccessTokenSilently();
		const requestConfig = {
			url: `${process.env.REACT_APP_SERVER_URL}/user`,
			method: 'get',
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};
		axios
			.request(requestConfig)
			.then((response) => {
				console.log('response: ' + JSON.stringify(response.data.value));
				setChuckNorrisFact(JSON.stringify(response.data.value));
			})
			.catch((error) => {
				console.log('error: ' + error);
			});
	};

	return (
		<>
			<Card>
				<Card.Body>
					<Card.Title>This is a job application tracker</Card.Title>
				</Card.Body>
			</Card>
			<Card>
				{chuckNorrisFact.length > 0 ? (
					<Card.Body>
						<Card.Title>{chuckNorrisFact}</Card.Title>
					</Card.Body>
				) : null}
				<Button variant='primary' onClick={getChuckNorrisFact}>
					Click for a Random Chuck Norris fact
				</Button>
			</Card>
		</>
	);
};

export default AboutUs;
