import React, { useState } from 'react';
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
				setChuckNorrisFact(JSON.stringify(response.data.value));
			})
			.catch((error) => {
				console.log('error: ' + error);
			});
	};

	return (
		<>
			<h3>
				This web app uses MongoDB, Mongoose, Node.JS, Express, and React
			</h3>
			{chuckNorrisFact.length > 0 ? <p>{chuckNorrisFact}</p> : null}
			<Button variant='primary' onClick={getChuckNorrisFact}>
				Click for a Random Chuck Norris fact
			</Button>
		</>
	);
};

export default AboutUs;
