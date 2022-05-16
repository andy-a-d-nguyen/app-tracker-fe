import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

const SubmitJobApplicationForm = (props) => {
	const [job, setJob] = useState({
		jobPostingURL: '',
		jobTitle: '',
		jobLocation: '',
		notes: '',
		applied: false,
		interviewed: false,
		offered: false,
		offerAccepted: false,
		noResponse: false,
		rejected: false,
	});
	const { getAccessTokenSilently } = useAuth0();

	const handleFormInput = (event) => {
		setJob({ ...job, [event.target.name]: event.target.value });
	};

	const handleCheckbox = (event) => {
		setJob({ ...job, [event.target.name]: event.target.checked });
	};

	const saveApplication = async () => {
		const token = await getAccessTokenSilently();
		const requestConfig = {
			url: `${process.env.REACT_APP_SERVER_URL}/user/${props.userFromDB.username}/jobs`,
			method: 'post',
			headers: {
				Authorization: `Bearer ${token}`,
			},
			data: {
				job,
			},
		};
		axios
			.request(requestConfig)
			.then((response) => {
				props.setUserFromDB({
					...props.userFromDB,
					jobsApplied: JSON.parse(
						JSON.stringify(response.data.jobsApplied)
					),
				});
			})
			.catch((error) => {
				console.log('error: ' + error);
			});
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
						<Button variant='primary' onClick={saveApplication}>
							Submit
						</Button>
					</Col>
				</Card.Header>
				<Card.Body>
					<Form.Label>Job Posting URL:</Form.Label>
					<Form.Control
						type='url'
						name='jobPostingURL'
						onChange={handleFormInput}
					/>
					<Form.Label>Location:</Form.Label>
					<Form.Control
						type='text'
						name='jobLocation'
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

export default SubmitJobApplicationForm;
