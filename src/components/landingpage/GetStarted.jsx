import { Button, Typography } from '@material-tailwind/react';

const GetStarted = () => {
	return (
		<div className='flex flex-col py-28 md:py-32 lg:py-40 justify-center text-center gap-4'>
			<Typography
				as='h3'
				className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold'
			>
				Ready to Get Started?
			</Typography>
			<Typography
				as='p'
				className='mx-auto max-w-[600px] text-xl text-gray-600'
			>
				Join thousands of teams already using TaskFlow to streamline
				their projects and boost productivity.
			</Typography>
			<div>
				<Button className='mr-4 ml-2' color='cyan'>
					Start Fee Trial
				</Button>
				<Button
					variant='outlined'
					className='border-cyan-500  hover:shadow-lg hover:shadow-cyan-500/40'
				>
					Contact Sales
				</Button>
			</div>
		</div>
	);
};

export default GetStarted;
