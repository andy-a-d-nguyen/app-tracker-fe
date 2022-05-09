import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

const JobApplicationForm = (props) => {
	const [job, setJob] = useState({});
	const { getAccessTokenSilently } = useAuth0();
	// const token = await getAccessTokenSilently();
	// TODO: use token to create job for user

	const handleFormInput = (event) => {
		setJob({ ...job, [event.target.name]: event.target.value });
	};

	const handleCheckbox = (event) => {
		setJob({ ...job, [event.target.name]: event.target.checked });
	};

	return (
		<Modal show={props.showForm} onHide={props.handleHideForm}>
			<Card>
				<Card.Header className='row justify-content-between'>
					<Col>
						<Form.Label>Job Title:</Form.Label>
						<Form.Control
							type='text'
							name='jobTitle'
							onChange={handleFormInput}
						/>
					</Col>
					<Col>
						<Button variant='primary'>Submit</Button>
					</Col>
				</Card.Header>
				<Card.Body>
					<Form.Label>Job Posting URL:</Form.Label>
					<Form.Control
						type='url'
						name='jobPostingURL'
						onChange={handleFormInput}
					/>
					<Form.Label>Notes:</Form.Label>
					<Form.Control
						type='text'
						name='notes'
						onChange={handleFormInput}
					/>
				</Card.Body>
				<Card.Footer>
					<Form>
						<Form.Check
							type='checkbox'
							label='Applied'
							name='applied'
							onClick={handleCheckbox}
						/>
						<Form.Check
							type='checkbox'
							label='Interviewed'
							name='interviewed'
							onClick={handleCheckbox}
						/>
						<Form.Check
							type='checkbox'
							label='Offered'
							name='offered'
							onClick={handleCheckbox}
						/>
						<Form.Check
							type='checkbox'
							label='Offer Accepted'
							name='offerAccepted'
							onClick={handleCheckbox}
						/>
						<Form.Check
							type='checkbox'
							label='No Response'
							name='noResponse'
							onClick={handleCheckbox}
						/>
						<Form.Check
							type='checkbox'
							label='Rejected'
							name='rejected'
							onClick={handleCheckbox}
						/>
					</Form>
				</Card.Footer>
			</Card>
		</Modal>
	);
};

export default JobApplicationForm;
