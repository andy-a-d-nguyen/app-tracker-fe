import { useState } from 'react';
import JobApplication from './JobApplication';
import ListGroup from 'react-bootstrap/ListGroup';

const JobApplicationList = () => {
	const [showDetails, setShowDetails] = useState(false);
	const handleShowDetails = () => setShowDetails(true);
	const handleHideDetails = () => setShowDetails(false);
	return (
		<ListGroup>
			<ListGroup.Item onClick={handleShowDetails}>Job 1</ListGroup.Item>
			<JobApplication
				showDetails={showDetails}
				handleHideDetails={handleHideDetails}
			/>
		</ListGroup>
	);
};

export default JobApplicationList;
