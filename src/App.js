import { Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import NavBar from './components/NavBar.js';
import JobApplicationList from './components/JobApplicationList.js';
import About from './components/About.js';
import './App.css';

function App() {
	return (
		<main>
			<NavBar />
			<Container>
				<Routes>
					<Route
						path='/applications'
						element={<JobApplicationList />}
					/>
					<Route path='/about' element={<About />} />
				</Routes>
			</Container>
		</main>
	);
}

export default App;
