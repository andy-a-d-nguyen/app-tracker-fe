import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import NavBar from './components/NavBar.js';
import Stack from 'react-bootstrap/Stack';
import JobApplicationList from './components/JobApplicationList.js';
import Settings from './components/Settings.js';
import ProtectedRoute from './components/ProtectedRoute.js';
import Home from './components/Home.js';
import './App.css';

const App = () => {
	return (
		<main>
			<Stack gap={3}>
				<NavBar />
				<Container>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route
							path='/applications'
							element={
								<ProtectedRoute
									component={JobApplicationList}
								/>
							}
						/>
						<Route
							path='/about'
							element={<ProtectedRoute component={Settings} />}
						/>
					</Routes>
				</Container>
			</Stack>
		</main>
	);
};

export default App;
