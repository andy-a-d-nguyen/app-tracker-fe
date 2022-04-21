import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from 'react';

const JobApplication = (props) => {
	const [showInfo, setShowInfo] = useState(true);
	const [showForm, setShowForm] = useState(false);
	const handleEditForm = () => {
		setShowInfo(false);
		setShowForm(true);
	};
	const handleInfo = () => {
		props.handleHideDetails();
		// setShowInfo(true);
		setShowForm(false);
	};

	useEffect(() => {
		setShowInfo(props.showDetails);
	}, [props.showDetails]);

	return (
		<Modal show={props.showDetails} onHide={handleInfo}>
			{showInfo && (
				<Card>
					<Card.Header className='row justify-content-between'>
						<Col>Job 1</Col>
						<Col>
							<Button variant='primary' onClick={handleEditForm}>
								Edit
							</Button>
						</Col>
					</Card.Header>
					<Card.Body>
						<Card.Link>Job 1 URL</Card.Link>
						<Card.Text>Job 1 Notes</Card.Text>
					</Card.Body>
					<Card.Footer>
						<Form>
							<Form.Check
								disabled
								type='checkbox'
								label='Applied'
								checked='checked'
							/>
							<Form.Check
								disabled
								type='checkbox'
								label='Coding Interview'
							/>
							<Form.Check
								disabled
								type='checkbox'
								label='Behavioral Interview'
							/>
							<Form.Check
								disabled
								type='checkbox'
								label='Offer Accepted'
							/>
						</Form>
					</Card.Footer>
				</Card>
			)}
			{showForm && (
				<Card>
					<Form>
						<Form.Label>URL:</Form.Label>
						<Form.Control placeholder='www.example.com' />
						<Form.Label>Notes:</Form.Label>
						<Form.Control placeholder='notes' />
					</Form>
				</Card>
			)}
		</Modal>
	);
};

export default JobApplication;
