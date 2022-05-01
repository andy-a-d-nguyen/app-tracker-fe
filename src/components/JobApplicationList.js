import { useState } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import JobApplication from './JobApplication';
import ListGroup from 'react-bootstrap/ListGroup';

const JobApplicationList = () => {
	const [showDetails, setShowDetails] = useState(false);
	const handleShowDetails = () => setShowDetails(true);
	const handleHideDetails = () => setShowDetails(false);
	const { getAccessTokenSilently } = useAuth0();

	const test = async () => {
		const token = await getAccessTokenSilently();
		console.log(token);
		await axios
			.get(process.env.REACT_APP_SERVER_URL, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((response) => console.log(response))
			.catch((error) => console.log(error));
	};
	return (
		<ListGroup>
			<ListGroup.Item onClick={handleShowDetails}>Job 1</ListGroup.Item>
			<JobApplication
				showDetails={showDetails}
				handleHideDetails={handleHideDetails}
			/>
			<ListGroup.Item onClick={test}>Test</ListGroup.Item>
		</ListGroup>
	);
};

export default JobApplicationList;
