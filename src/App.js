import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import NavBar from './components/NavBar.js';
import LoadingOverlay from 'react-loading-overlay-ts';
import JobApplicationList from './components/JobApplicationList.js';
import Settings from './components/Settings.js';
import ProtectedRoute from './components/ProtectedRoute.js';
import Home from './components/Home.js';
import './App.css';

const App = () => {
	return (
		<main>
			<NavBar />
			<Container>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route
						path='/applications'
						element={
							<ProtectedRoute component={JobApplicationList} />
						}
					/>
					<Route
						path='/about'
						element={<ProtectedRoute component={Settings} />}
					/>
				</Routes>
			</Container>
		</main>
	);
};

export default App;
