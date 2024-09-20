import { Button, Typography } from '@material-tailwind/react';

const Hero = ({ onGetStarted }) => {
	return (
		<div className='py-28 px-10 flex flex-col items-center text-center space-y-4 bg-white'>
			<Typography
				as='h1'
				className='justify-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold'
			>
				Streamline Your Projects with TaskFlow
			</Typography>
			<Typography
				as='p'
				className='mx-auto max-w-[700px] text-gray-500 sm:text-lg md:text-xl'
			>
				Boost productivity and collaboration with our intuitive project
				management tool. Organize, track, and deliver projects
				effortlessly.
			</Typography>
			<div className='space-x-4'>
				<Button color='cyan' onClick={onGetStarted}>
					Get Started
				</Button>
				<Button
					variant='outlined'
					className='border-cyan-500  hover:shadow-lg hover:shadow-cyan-500/40'
				>
					Learn More
				</Button>
			</div>
		</div>
	);
};

export default Hero;
