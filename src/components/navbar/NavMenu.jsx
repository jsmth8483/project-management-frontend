import { Button, List, Navbar, Typography } from '@material-tailwind/react';
import Logo from '../logo/Logo';
import { useNavigate } from 'react-router-dom';
import { backendConfig } from '../../config';
import { useAuth } from '../../contexts/AuthProvider';

const NavMenu = () => {
	const navigate = useNavigate();
	const { user, token, logout } = useAuth();

	const handleLogout = async () => {
		try {
			const response = await fetch(
				`${backendConfig.authService}/api/auth/logout`,
				{
					method: 'POST',
					credentials: 'include',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${token}`,
					},
				}
			);

			if (response.status === 204) {
				logout();
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
