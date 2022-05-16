import {useState} from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import EditJobApplicationForm from './EditJobApplicationForm.js';

const JobApplication = ( props ) => {
	const [showForm, setShowForm] = useState(false);

	const handleShowForm = () => setShowForm(true);
	const handleHideForm = () => setShowForm( false );

	return (
		<>
			<Accordion.Item eventKey={props.index}>
				<Accordion.Header>
					{props.jobApplied.jobTitle}
				</Accordion.Header>
				<Accordion.Body>
					<Card className="accordion-body">
						<Card.Header className='row justify-content-between'>
							<Col>
								<Card.Title>{props.jobApplied.jobTitle}</Card.Title>
							</Col>
							<Col>
								<Button variant='primary' onClick={handleShowForm}>
									Edit
								</Button>
							</Col>
						</Card.Header>
						<Card.Body>
							<Card.Link>{props.jobApplied.jobPostingURL}</Card.Link>
							<Card.Text>{props.jobApplied.notes}</Card.Text>
							<Card.Footer>
								<Form>
									<Form.Check
										type='checkbox'
										label='Applied'
										name='applied'
										checked={props.jobApplied.applied}
										onChange={()=>{}}
									/>
									<Form.Check
										type='checkbox'
										label='Interviewed'
										name='interviewed'
										checked={ props.jobApplied.interviewed }
										onChange={()=>{}}
									/>
									<Form.Check
										type='checkbox'
										label='Offered'
										name='offered'
										checked={props.jobApplied.offered}
										onChange={()=>{}}
									/>
									<Form.Check
										type='checkbox'
										label='Offer Accepted'
										name='offerAccepted'
										checked={ props.jobApplied.offerAccepted }
										onChange={()=>{}}
									/>
									<Form.Check
										type='checkbox'
										label='No Response'
										name='noResponse'
										checked={props.jobApplied.noResponse}
										onChange={()=>{}}
									/>
									<Form.Check
										type='checkbox'
										label='Rejected'
										name='rejected'
										checked={props.jobApplied.rejected}
										onChange={()=>{}}
									/>
								</Form>
							</Card.Footer>
						</Card.Body>
					</Card>
				</Accordion.Body>
			</Accordion.Item>
			<EditJobApplicationForm
				showForm={showForm}
				handleHideForm={handleHideForm}
				userFromDB={props.userFromDB}
				setUserFromDB={ props.setUserFromDB }
				jobApplied={ props.jobApplied }
				index={ props.index }
			/>
		</>
	);
};

export default JobApplication;
