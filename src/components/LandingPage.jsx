import { Button, Navbar, Typography, List } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { CubeTransparentIcon } from '@heroicons/react/20/solid';

const LandingPage = () => {
	const navigate = useNavigate();
	const handleRegister = (e) => {
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
						<CubeTransparentIcon className='stroke-cyan-600' />
					</span>
					<Typography
						as='a'
						href='/taskflow'
						className='ml-2 mr-4 ml cursor-pointer py-1.5 font-medium'
					>
						TaskFlow
					</Typography>
				</div>
				<List>
					<div className='flex'>
						<Button
							className='mr-4 ml-2 cursor-pointer py-1.5 font-medium bg-cyan-600'
							onClick={handleRegister}
						>
							Sign Up
						</Button>
						<Typography
							className='mr-4 ml-2 cursor-pointer p-1.5 font-medium hover:bg-gray-200 rounded-lg'
							onClick={handleLogin}
						>
							Login
						</Typography>
					</div>
				</List>
			</Navbar>
		</>
	);
};

export default LandingPage;
