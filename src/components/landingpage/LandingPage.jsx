import { Button, Navbar, Typography, List } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { BoltIcon } from '@heroicons/react/20/solid';
import Hero from './hero';

const LandingPage = () => {
	const navigate = useNavigate();
	const handleSignup = (e) => {
		navigate('/signup');
	};
	const handleLogin = (e) => {
		navigate('/login');
	};
	return (
		<>
			<Navbar className='w-full max-w-full p-2 rounded-none border-b border-gray-200 shadow-sm text-blue-gray flex justify-between'>
				<div className='flex items-center'>
					<span className='h-8 w-8'>
						<BoltIcon
							className='stroke-cyan-500'
							color='transparent'
						/>
					</span>
					<Typography
						as='a'
						href='/taskflow'
						className='ml-2 mr-4 ml cursor-pointer py-1.5 font-semibold'
					>
						TaskFlow
					</Typography>
				</div>
				<List>
					<div className='flex'>
						<Button
							className='mr-4 ml-2 cursor-pointer font-medium'
							color='cyan'
							onClick={handleSignup}
						>
							Sign Up
						</Button>
						<Button
							variant='outlined'
							className='mr-4 ml-2 cursor-pointer font-medium rounded-lg border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/40'
							onClick={handleLogin}
						>
							Login
						</Button>
					</div>
				</List>
			</Navbar>
			<Hero onGetStarted={handleSignup} />
		</>
	);
};

export default LandingPage;
