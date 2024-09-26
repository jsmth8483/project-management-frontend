import { Typography } from '@material-tailwind/react';
import SignupForm from './SignupForm';
import { ChevronLeftIcon } from '@heroicons/react/20/solid';

const SignupPage = () => {
	return (
		<>
			<Typography
				as='a'
				href='/taskflow'
				className='flex items-center m-5 '
				color='blue-gray'
			>
				<ChevronLeftIcon className='h-5 w-5 ' color='blue-gray' />
				Back
			</Typography>
			<div className='flex items-center justify-center'>
				<SignupForm />
			</div>
		</>
	);
};

export default SignupPage;
