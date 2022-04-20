import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

const JobApplication = (props) => {
	return (
		<Modal show={props.showDetails} onHide={props.handleHideDetails}>
			<Card>
				<Card.Header className='row justify-content-between'>
					<Col>Job 1</Col>
					<Col>
						<Button variant='primary'>Edit</Button>
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
		</Modal>
	);
};

export default JobApplication;
