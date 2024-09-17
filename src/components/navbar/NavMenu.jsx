import { Navbar, Typography } from '@material-tailwind/react';
import { CubeTransparentIcon } from '@heroicons/react/20/solid';

const NavMenu = () => {
	return (
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
			<ul className='flex'>
				<Typography as='a' href='/taskflow' className='mx-2 p-2'>
					Log Out
				</Typography>
			</ul>
		</Navbar>
	);
};

export default NavMenu;
