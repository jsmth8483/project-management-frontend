import { Navbar, Typography } from '@material-tailwind/react';

const NavMenu = () => {
	return (
		<Navbar className='w-full max-w-full p-2 rounded-none border-b border-gray-200 shadow-sm text-blue-gray flex justify-between'>
			<Typography
				as='a'
				href='/'
				className='mr-4 ml-2 cursor-pointer py-1.5 font-medium'
			>
				TaskFlow
			</Typography>
			<ul className='flex'>
				<Typography as='a' href='/taskflow' className='mx-2 p-2'>
					Log Out
				</Typography>
			</ul>
		</Navbar>
	);
};

export default NavMenu;
