import React, {
	createContext,
	useCallback,
	useContext,
	useMemo,
	useReducer,
} from 'react';
import PropTypes from 'prop-types';

import { STATUS } from '../util/status.js';

const initialState = {
	user: '',
	token: null,
	expiresAt: null,
	isAuthenticated: false,
	status: STATUS.PENDING,
};

const AuthContext = createContext({
	...initialState,
	login: (user = '', token = '', expiresAt = '') => {},
	logout: () => {},
	setAuthenticationStatus: () => {},
});

const authReducer = (state, action) => {
	switch (action.type) {
		case 'login': {
			return {
				user: action.payload.user,
				token: action.payload.token,
				expiresAt: action.payload.expiresAt,
				isAuthenticated: true,
				verifyingToken: false,
				status: STATUS.SUCCEEDED,
			};
		}
		case 'logout': {
			return {
				...initialState,
				status: STATUS.IDLE,
			};
		}
		case 'status': {
			return {
				...state,
				status: action.payload.status,
			};
		}
		default: {
			throw new Error(`Unhandled action type: ${action.type}`);
		}
	}
};

const AuthProvider = ({ children }) => {
	const [state, dispatch] = useReducer(authReducer, initialState);

	const login = useCallback((user, token, expiresAt) => {
		dispatch({
			type: 'login',
			payload: {
				user,
				token,
				expiresAt,
			},
		});
	}, []);

	const logout = useCallback(() => {
		dispatch({
			type: 'logout',
		});
	}, []);

	const setAuthenticationStatus = useCallback((status) => {
		dispatch({
			type: 'status',
			payload: {
				status,
			},
		});
	}, []);

	const value = useMemo(
		() => ({
			...state,
			login,
			logout,
			setAuthenticationStatus,
		}),
		[state, setAuthenticationStatus, login, logout]
	);

	return (
		<AuthContext.Provider value={value}>{children}</AuthContext.Provider>
	);
};

const useAuth = () => {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error('useAuth must be used within a AuthProvider');
	}

	return context;
};

AuthProvider.propTypes = {
	children: PropTypes.element.isRequired,
};

export { AuthProvider, useAuth };
