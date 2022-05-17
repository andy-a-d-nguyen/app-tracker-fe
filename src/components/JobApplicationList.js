import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import SubmitJobApplicationForm from './SubmitJobApplicationForm.js';
import JobApplication from './JobApplication.js';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Accordion from 'react-bootstrap/Accordion';

const JobApplicationList = () => {
	const { getAccessTokenSilently, user } = useAuth0();
	const [username, setUsername] = useState(user.email);

	const [userFromDB, setUserFromDB] = useState({});
	const [showForm, setShowForm] = useState(false);

	const handleShowForm = () => setShowForm(true);
	const handleHideForm = () => setShowForm(false);

	const getOrCreateUser = async () => {
		const token = await getAccessTokenSilently();
		const requestConfig = {
			url: `${process.env.REACT_APP_SERVER_URL}/user`,
			method: 'post',
			headers: {
				Authorization: `Bearer ${token}`,
			},
			data: {
				username,
			},
		};
		axios
			.request(requestConfig)
			.then((response) => {
				setUserFromDB({
					username: response.data.username,
					jobsApplied: response.data.jobsApplied,
				});
			})
			.catch((err) => {
				console.log('error: ' + err);
			});
	};

	useEffect(() => {
		getOrCreateUser();
	}, [username, userFromDB]);

	return (
		<ListGroup>
			<Stack gap={3}>
				<Button size='lg' onClick={handleShowForm}>
					Add New Application
				</Button>
				<SubmitJobApplicationForm
					showForm={showForm}
					handleHideForm={handleHideForm}
					userFromDB={userFromDB}
					setUserFromDB={setUserFromDB}
				/>
				<Accordion>
					{Object.keys(userFromDB).length > 0 &&
						userFromDB.jobsApplied.map((jobApplied, index) => {
							return (
								<JobApplication
									key={index}
									index={index}
									jobApplied={jobApplied}
									userFromDB={userFromDB}
									setUserFromDB={setUserFromDB}
								/>
							);
						})}
				</Accordion>
			</Stack>
		</ListGroup>
	);
};

export default JobApplicationList;
