import { Card, Typography, Input, Button } from '@material-tailwind/react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { backendConfig } from '../../config';

const SignupForm = () => {
	const [fullName, setFullName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();

	const handleSignup = async () => {
		try {
			const response = await fetch(
				`${backendConfig.authService}/api/auth/register`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						email: email,
						fullName: fullName,
						password: password,
					}),
				}
			);
			const json = await response.json();
			if (json.user) {
				navigate('/');
			}
		} catch (err) {
			console.log('Error during registration: ' + err.message);
		}
	};

	return (
		<Card color='transparent' shadow={false} className='w-fit m-10'>
			<Typography variant='h4' color='blue-gray'>
				Sign Up
			</Typography>
			<form className='mt-8 mb-2 w-80 max-w-screen-lg sm:w-96'>
				<div className='flex flex-col mb-1 gap-6'>
					<Typography
						variant='h6'
						color='blue-gray'
						className='-mb-3'
					>
						Full Name
					</Typography>
					<Input
						id='fullNameInput'
						type='text'
						size='lg'
						placeholder='FirstName LastName'
						className='!border-t-blue-gray-200 focus:!border-t-blue-gray-900'
						labelProps={{
							className: 'before:content-none after:content-none',
						}}
						onChange={(e) => setFullName(e.target.value)}
					/>
					<Typography
						variant='h6'
						color='blue-gray'
						className='-mb-3'
					>
						Email
					</Typography>
					<Input
						id='emailInput'
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
						id='passwordInput'
						type='password'
						size='lg'
						placeholder='********'
						className='!border-t-blue-gray-200 focus:!border-t-blue-gray-900'
						labelProps={{
							className: 'before:content-none after:content-none',
						}}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<Button id='signUpBtn' onClick={handleSignup}>
						Sign Up
					</Button>
					<Typography
						color='gray'
						className='mt-4 text-center font-normal'
					>
						Already have an account?{' '}
						<Link
							to='/login'
							className='font-medium text-gray-900 hover:underline'
						>
							Login
						</Link>
					</Typography>
				</div>
			</form>
		</Card>
	);
};

export default SignupForm;
