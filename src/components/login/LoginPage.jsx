import { Typography } from '@material-tailwind/react';
import LoginForm from './LoginForm';
import { ChevronLeftIcon } from '@heroicons/react/20/solid';

const LoginPage = () => {
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
				<LoginForm />
			</div>
		</>
	);
};

export default LoginPage;
