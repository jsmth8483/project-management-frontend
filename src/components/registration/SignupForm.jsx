import { Card, Typography, Input, Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const SignupForm = () => {
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
						type='text'
						size='lg'
						placeholder='FirstName LastName'
						className='!border-t-blue-gray-200 focus:!border-t-blue-gray-900'
						labelProps={{
							className: 'before:content-none after:content-none',
						}}
					/>
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
					/>
					<Button>Sign Up</Button>
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
