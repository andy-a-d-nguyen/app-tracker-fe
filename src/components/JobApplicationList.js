import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import JobApplicationForm from './JobApplicationForm.js';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

const JobApplicationList = () => {
	const [showDetails, setShowDetails] = useState(false);
	const [showForm, setShowForm] = useState(false);

	const handleShowDetails = () => setShowDetails(true);
	const handleHideDetails = () => setShowDetails(false);

	const handleShowForm = () => setShowForm(true);
	const handleHideForm = () => setShowForm(false);

	const { getAccessTokenSilently } = useAuth0();

	// const token = await getAccessTokenSilently();
	// TODO: get user from auth0 on component mount and create user in database

	return (
		<ListGroup>
			<Stack gap={3}>
				<Button size='lg' onClick={handleShowForm}>
					Add New Application
				</Button>
				<JobApplicationForm
					showForm={showForm}
					handleHideForm={handleHideForm}
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
