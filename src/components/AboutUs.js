import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

const AboutUs = () => {
	const [chuckNorrisFact, setChuckNorrisFact] = useState('');
	const [errorResponse, setErrorResponse] = useState('');
	const [alert, setAlert] = useState(false);

	const { getAccessTokenSilently } = useAuth0();

	const getChuckNorrisFact = async () => {
		const token = await getAccessTokenSilently();
		const requestConfig = {
			url: `${process.env.REACT_APP_SERVER_URL}/user`,
			method: 'get',
			headers: {
				'Access-Control-Allow-Origin': `${process.env.FRONTEND_URL}`,
				Authorization: `Bearer ${token}`,
			},
		};
		axios
			.request(requestConfig)
			.then((response) => {
				let data = JSON.stringify(response.data.value);
				data = data.replace(/\\"/g, "'");
				setChuckNorrisFact(data);
			})
			.catch((error) => {
				setAlert(true);
				setErrorResponse(error);
			});
	};

	return (
		<>
			<h3>
				This web app uses MongoDB, Mongoose, Node.JS, Express, and React
			</h3>
			{alert ? (
				<Alert onClose={() => setAlert(false)} dismissible>
					<Alert.Heading>{errorResponse}</Alert.Heading>
				</Alert>
			) : (
				<p>{chuckNorrisFact}</p>
			)}
			<Button variant='primary' onClick={getChuckNorrisFact}>
				Click for a Random Chuck Norris fact
			</Button>
		</>
	);
};

export default AboutUs;
