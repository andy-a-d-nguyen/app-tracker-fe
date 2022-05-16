import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

const EditJobApplicationForm = (props) => {
	const [job, setJob] = useState({
		jobPostingURL: props.jobApplied.jobPostingURL,
		jobTitle: props.jobApplied.jobTitle,
		jobLocation: props.jobApplied.jobLocation,
		notes: props.jobApplied.notes,
		applied: props.jobApplied.applied,
		interviewed: props.jobApplied.interviewed,
		offered: props.jobApplied.offered,
		offerAccepted: props.jobApplied.offerAccepted,
		noResponse: props.jobApplied.noResponse,
		rejected: props.jobApplied.rejected,
	} );

	const { getAccessTokenSilently } = useAuth0();

	const handleFormInput = (event) => {
		setJob({ ...job, [event.target.name]: event.target.value });
	};

	const handleCheckbox = (event) => {
		setJob({ ...job, [event.target.name]: event.target.checked });
	};

	const editApplication = async () => {
		const token = await getAccessTokenSilently();
		const requestConfig = {
			url: `${process.env.REACT_APP_SERVER_URL}/user/${props.userFromDB.username}/jobs/${props.index}`,
			method: 'put',
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
							placeholder={props.jobApplied.jobTitle}
							onChange={handleFormInput}
						/>
					</Col>
					<Col>
						<Button variant='primary' onClick={editApplication}>
							Submit
						</Button>
					</Col>
				</Card.Header>
				<Card.Body>
					<Form.Label>Job Posting URL:</Form.Label>
					<Form.Control
						type='url'
						name='jobPostingURL'
						placeholder={props.jobApplied.jobPostingURL}
						onChange={handleFormInput}
					/>
					<Form.Label>Notes:</Form.Label>
					<Form.Control
						type='text'
						name='notes'
						placeholder={props.jobApplied.notes}
						onChange={handleFormInput}
					/>
				</Card.Body>
				<Card.Footer>
					<Form>
						<Form.Check
							type='checkbox'
							label='Applied'
							name='applied'
							defaultChecked={props.jobApplied.applied}
							onClick={handleCheckbox}
						/>
						<Form.Check
							type='checkbox'
							label='Interviewed'
							name='interviewed'
							defaultChecked={props.jobApplied.interviewed}
							onClick={handleCheckbox}
						/>
						<Form.Check
							type='checkbox'
							label='Offered'
							name='offered'
							defaultChecked={props.jobApplied.offered}
							onClick={handleCheckbox}
						/>
						<Form.Check
							type='checkbox'
							label='Offer Accepted'
							name='offerAccepted'
							defaultChecked={props.jobApplied.offerAccepted}
							onClick={handleCheckbox}
						/>
						<Form.Check
							type='checkbox'
							label='No Response'
							name='noResponse'
							defaultChecked={props.jobApplied.noResponse}
							onClick={handleCheckbox}
						/>
						<Form.Check
							type='checkbox'
							label='Rejected'
							name='rejected'
							defaultChecked={props.jobApplied.rejected}
							onClick={handleCheckbox}
						/>
					</Form>
				</Card.Footer>
			</Card>
		</Modal>
	);
};

export default EditJobApplicationForm;
