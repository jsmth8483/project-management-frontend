import { Card, Typography, Input, Button } from '@material-tailwind/react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { backendConfig } from '../../config';
import { useAuth } from '../../contexts/AuthProvider';
import { STATUS } from '../../util/status';

const LoginForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();

	const { login, setAuthenticationStatus } = useAuth();

	const handleLogin = async () => {
		try {
			setAuthenticationStatus(STATUS.PENDING);
			const response = await fetch(
				`${backendConfig.authService}/api/auth/login`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						email: email,
						password: password,
					}),
				}
			);

			if (response.status === 200) {
				setAuthenticationStatus(STATUS.SUCCEEDED);
				const { user, accessToken, accessTokenExpires } =
					await response.json();
				login(user, accessToken, accessTokenExpires);
				navigate('/');
			}
		} catch (err) {
			console.log('Error during login: ' + err.message);
		}
	};

	return (
		<Card color='transparent' shadow={false} className='w-fit m-10'>
			<Typography variant='h4' color='blue-gray'>
				Log In
			</Typography>
			<form className='mt-8 mb-2 w-80 max-w-screen-lg sm:w-96'>
				<div className='flex flex-col mb-1 gap-6'>
					<Typography
						variant='h6'
						color='blue-gray'
						className='-mb-3'
					>
						Email
					</Typography>
					<Input
						type='email'
						size='lg'
						placeholder='email@mail.com'
						className='!border-t-blue-gray-200 focus:!border-t-blue-gray-900'
						labelProps={{
							className: 'before:content-none after:content-none',
						}}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<Typography
						variant='h6'
						color='blue-gray'
						className='-mb-3'
					>
						Password
					</Typography>
					<Input
						type='password'
						size='lg'
						placeholder='********'
						className='!border-t-blue-gray-200 focus:!border-t-blue-gray-900'
						labelProps={{
							className: 'before:content-none after:content-none',
						}}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<Button color='cyan' onClick={handleLogin}>
						Log In
					</Button>
					<Typography
						color='gray'
						className='mt-4 text-center font-normal'
					>
						Need an account?{' '}
						<Link
							to='/signup'
							className='font-medium text-gray-900 hover:underline'
						>
							Sign Up
						</Link>
					</Typography>
				</div>
			</form>
		</Card>
	);
};

export default LoginForm;
