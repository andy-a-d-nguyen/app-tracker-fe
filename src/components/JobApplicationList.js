import { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const JobApplicationList = () => {
	const [showDetails, setShowDetails] = useState(false);
	return (
		<ListGroup>
			<ListGroup.Item onClick={setShowDetails(true)}>
				Job 1
			</ListGroup.Item>
		</ListGroup>
	);
};

export default JobApplicationList;
