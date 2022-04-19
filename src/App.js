import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import JobApplications from './components/JobApplications';
import './App.css';

function App() {
	return (
		<Container>
			<Navbar>
				<Nav.Link>Your Job Applications</Nav.Link>
				<Nav.Link>About</Nav.Link>
			</Navbar>
			<JobApplications />
		</Container>
	);
}

export default App;
