import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import LandingPage from './components/landingpage/LandingPage';
import SignupPage from './components/registration/SignupPage';
import LoginPage from './components/login/LoginPage';
import { useAuth } from './contexts/AuthProvider';
import { useCallback, useEffect } from 'react';
import { backendConfig } from './config';

function App() {
	const { login, logout, isAuthenticated, expiresAt } = useAuth();

	const refreshAccessToken = useCallback(async () => {
		try {
			const response = await fetch(
				`${backendConfig.authService}/api/auth/refresh`,
				{
					method: 'POST',
					credentials: 'include',
					headers: {
						'Content-Type': 'application/json',
					},
				}
			);
			const { userId, accessToken, expiresAt } = await response.json();
			if (response.status === 204) {
				logout();
			} else {
				login(userId, accessToken, expiresAt);
			}
		} catch (err) {
			logout();
		}
	}, [login, logout]);

	useEffect(() => {
		refreshAccessToken();
	}, [refreshAccessToken]);

	useEffect(() => {
		let refreshAccessTokenTimerId;

		if (isAuthenticated) {
			refreshAccessTokenTimerId = setTimeout(() => {
				refreshAccessToken();
			}, new Date(expiresAt).getTime() - Date.now() - 10 * 1000);
		}

		return () => {
			if (isAuthenticated && refreshAccessTokenTimerId) {
				clearTimeout(refreshAccessTokenTimerId);
			}
		};
	}, [expiresAt, isAuthenticated, refreshAccessToken]);

	return (
		<>
			<Routes>
				<Route path='/' element={<MainPage />} />
				<Route path='/taskflow' element={<LandingPage />} />
				<Route path='/signup' element={<SignupPage />} />
				<Route path='/login' element={<LoginPage />} />
			</Routes>
		</>
	);
}

export default App;
