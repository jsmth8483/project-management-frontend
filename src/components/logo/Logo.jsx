import { BoltIcon } from '@heroicons/react/20/solid';
import { Typography } from '@material-tailwind/react';

const Logo = () => {
	return (
		<div className='flex items-center'>
			<span className='h-6 w-6'>
				<BoltIcon className='stroke-cyan-500' color='transparent' />
			</span>
			<Typography
				as='a'
				href='/taskflow'
				className='ml-2 mr-4 cursor-pointer py-1.5 font-semibold'
			>
				TaskFlow
			</Typography>
		</div>
	);
};

export default Logo;
