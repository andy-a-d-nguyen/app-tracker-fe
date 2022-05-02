import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

const JobApplicationForm = (props) => {
	const { getAccessTokenSilently } = useAuth0();
	// const token = await getAccessTokenSilently();
	// TODO: use token to create job for user

	return (
		<Modal show={props.showForm} onHide={props.handleHideForm}>
			<Card>
				<Card.Header className='row justify-content-between'>
					<Col>
						<Form.Label>Job Title:</Form.Label>
						<Form.Control type='text' />
					</Col>
					<Col>
						<Button variant='primary'>Submit</Button>
					</Col>
				</Card.Header>
				<Card.Body>
					<Form.Label>Job Posting URL:</Form.Label>
					<Form.Control type='url' />
					<Form.Label>Notes:</Form.Label>
					<Form.Control type='text' />
				</Card.Body>
				<Card.Footer>
					<Form>
						<Form.Check type='checkbox' label='Applied' />
						<Form.Check type='checkbox' label='Interviewed' />
						<Form.Check type='checkbox' label='Offered' />
						<Form.Check type='checkbox' label='Offer Accepted' />
						<Form.Check type='checkbox' label='No Response' />
						<Form.Check type='checkbox' label='Rejected' />
					</Form>
				</Card.Footer>
			</Card>
		</Modal>
	);
};

export default JobApplicationForm;
