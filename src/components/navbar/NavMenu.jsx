import { Button, List, Navbar, Typography } from '@material-tailwind/react';
import Logo from '../logo/Logo';
import { useNavigate } from 'react-router-dom';
import { backendConfig } from '../../config';

const NavMenu = () => {
	const navigate = useNavigate();

	const handleLogout = async () => {
		try {
			const response = await fetch(
				`${backendConfig.authService}/api/auth/logout`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
				}
			);

			if (response.status === 204) {
				navigate('/taskflow');
			}
		} catch (err) {
			console.log('Error during logout: ' + err.message);
		}
	};

	return (
		<Navbar className='w-full max-w-full p-2 rounded-none border-b border-gray-200 shadow-sm text-blue-gray flex justify-between'>
			<Logo />
			<List className='flex'>
				<Button variant='text' className='' onClick={handleLogout}>
					Log Out
				</Button>
			</List>
		</Navbar>
	);
};

export default NavMenu;
