import './App.css';
import {
	createBrowserRouter,
	RouterProvider,
	useLocation,
	Navigate,
} from 'react-router-dom';
import MainPage from './components/MainPage';
import LandingPage from './components/landingpage/LandingPage';
import SignupPage from './components/signup/SignupPage';
import LoginPage from './components/login/LoginPage';
import { useAuth } from './contexts/AuthProvider';
import { useCallback, useEffect } from 'react';
import { backendConfig } from './config';
import PropTypes from 'prop-types';

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
			// Set a timeout to refresh the access token just before it expires
			refreshAccessTokenTimerId = setTimeout(() => {
				refreshAccessToken();
			}, new Date(expiresAt).getTime() - Date.now() - 10 * 1000);
		}

		// Cleanup function to clear the timeout if dependencies change or component unmounts
		return () => {
			if (isAuthenticated && refreshAccessTokenTimerId) {
				clearTimeout(refreshAccessTokenTimerId);
			}
		};
	}, [expiresAt, isAuthenticated, refreshAccessToken]);

	const router = createBrowserRouter([
		{
			path: '/',
			element: (
				<RequireAuth redirectTo='/signup'>
					<MainPage />
				</RequireAuth>
			),
		},
		{
			path: '/taskflow',
			element: <LandingPage />,
		},
		{
			path: '/login',
			element: (
				<RedirectIfLoggedIn redirectTo='/'>
					<LoginPage />
				</RedirectIfLoggedIn>
			),
		},
		{
			path: '/signup',
			element: (
				<RedirectIfLoggedIn redirectTo='/'>
					<SignupPage />
				</RedirectIfLoggedIn>
			),
		},
	]);

	return (
		<>
			<div className='App'>
				<RouterProvider router={router} />
			</div>
		</>
	);
}

const RequireAuth = ({ children, redirectTo }) => {
	const { isAuthenticated } = useAuth();
	const location = useLocation();

	return isAuthenticated ? (
		children
	) : (
		<Navigate to={redirectTo} state={{ from: location }} />
	);
};

const RedirectIfLoggedIn = ({ children, redirectTo }) => {
	const { isAuthenticated } = useAuth();
	const location = useLocation();

	return isAuthenticated ? (
		<Navigate
			to={location.state?.from?.pathname || redirectTo}
			state={{ from: location }}
		/>
	) : (
		children
	);
};

RequireAuth.propTypes = {
	children: PropTypes.element.isRequired,
	redirectTo: PropTypes.string.isRequired,
};

RedirectIfLoggedIn.propTypes = {
	children: PropTypes.element.isRequired,
	redirectTo: PropTypes.string.isRequired,
};

export default App;
