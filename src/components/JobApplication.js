import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

const JobApplication = () => {
	return (
		<DropdownButton size='lg' title='Job Application<Card>
				<Card.Body>
					<Card.Title>Job Title</Card.Title>
					<Card.Link>Job Posting URL</Card.Link>
					<Card.Text>Notes</Card.Text>
					<Card.Footer>
						<Form>
							<Form.Check
								type='checkbox'
								label='Applied'
								name='applied'
							/>
							<Form.Check
								type='checkbox'
								label='Interviewed'
								name='interviewed'
							/>
							<Form.Check
								type='checkbox'
								label='Offered'
								name='offered'
							/>
							<Form.Check
								type='checkbox'
								label='Offer Accepted'
								name='offerAccepted'
							/>
							<Form.Check
								type='checkbox'
								label='No Response'
								name='noResponse'
							/>
							<Form.Check
								type='checkbox'
								label='Rejected'
								name='rejected'
							/>
						</Form>
					</Card.Footer>
				</Card.Body>
			</Card>
		</DropdownButton>
	);
};

export default JobApplication;
