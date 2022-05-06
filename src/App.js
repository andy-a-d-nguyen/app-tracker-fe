import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Container from 'react-bootstrap/Container';
import NavBar from './components/NavBar.js';
import LoadingOverlay from 'react-loading-overlay-ts';
import JobApplicationList from './components/JobApplicationList.js';
import About from './components/About.js';
import ProtectedRoute from './components/ProtectedRoute.js';
import './App.css';

const App = () => {
	const { isAuthenticated } = useAuth0();

	return (
		<LoadingOverlay active={!isAuthenticated}>
			<main>
				{isAuthenticated && <NavBar />}
				<Container>
					<Routes>
						<Route
							path='/'
							element={
								<ProtectedRoute
									component={JobApplicationList}
								/>
							}
						/>
						<Route
							path='/about'
							element={<ProtectedRoute component={About} />}
						/>
					</Routes>
				</Container>
			</main>
		</LoadingOverlay>
	);
};

export default App;
