import { Button, Navbar, Typography, List } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import Hero from './hero';
import Features from './Features';
import GetStarted from './GetStarted';
import Footer from './Footer';
import Logo from '../logo/Logo';

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
				<Logo />
				<List>
					<div className='flex'>
						<Button
							className='mr-4 ml-2'
							color='cyan'
							onClick={handleSignup}
						>
							Sign Up
						</Button>
						<Button
							variant='outlined'
							className='mr-4 ml-2 rounded-lg border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/40'
							onClick={handleLogin}
						>
							Login
						</Button>
					</div>
				</List>
			</Navbar>
			<Hero onGetStarted={handleSignup} />
			<Features />
			<GetStarted />
			<Footer />
		</>
	);
};

export default LandingPage;
