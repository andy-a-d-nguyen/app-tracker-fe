import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import JobApplicationForm from './JobApplicationForm.js';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

const JobApplicationList = () => {
	const [username, setUsername] = useState('');
	const [userFromDB, setUserFromDB] = useState({});
	const [showDetails, setShowDetails] = useState(false);
	const [showForm, setShowForm] = useState(false);

	const handleShowDetails = () => setShowDetails(true);
	const handleHideDetails = () => setShowDetails(false);

	const handleShowForm = () => setShowForm(true);
	const handleHideForm = () => setShowForm(false);

	const { getAccessTokenSilently, user } = useAuth0();

	const getOrCreateUser = async (token) => {
		await axios
			.get(`http://localhost:3001/user/${username}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((response) =>
				setUserFromDB({
					username: response.data.username,
					jobsApplied: response.data.jobsApplied,
				})
			)
			.catch(async (error) => {
				if (error.response.status === 404) {
					await axios
						.post(
							'http://localhost:3001/user',
							{ username: username },
							{
								headers: {
									Authorization: `Bearer ${token}`,
								},
							}
						)
						.then((res) =>
							setUserFromDB({
								username: res.data.username,
								jobsApplied: res.data.jobsApplied,
							})
						);
				}
			});
	};

	useEffect(() => {
		const retrieveUser = async () => {
			const token = await getAccessTokenSilently();
			setUsername(user.email);
			await getOrCreateUser(token);
		};
		retrieveUser();
	}, [username]);

	return (
		<ListGroup>
			<Stack gap={3}>
				<Button size='lg' onClick={handleShowForm}>
					Add New Application
				</Button>
				<JobApplicationForm
					showForm={showForm}
					handleHideForm={handleHideForm}
					userFromDB={userFromDB}
					setUserFromDB={setUserFromDB}
				/>
				{/* <ListGroup.Item onClick={handleShowDetails}>
					Job 1
				</ListGroup.Item> */}
				{/* <JobApplication
					showDetails={showDetails}
					handleHideDetails={handleHideDetails}
				/> */}
			</Stack>
		</ListGroup>
	);
};

export default JobApplicationList;
