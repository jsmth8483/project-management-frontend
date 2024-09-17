import {
	ListBulletIcon,
	QueueListIcon,
	ViewColumnsIcon,
} from '@heroicons/react/20/solid';
import {
	Card,
	Typography,
	List,
	ListItem,
	ListItemPrefix,
} from '@material-tailwind/react';

const Sidebar = () => {
	return (
		<Card className='h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 rounded-none'>
			<div className='mb-2 p-4'>
				<Typography variant='h5' color='blue-gray'>
					Project Name
				</Typography>
			</div>
			<List>
				<ListItem>
					<ListItemPrefix>
						<QueueListIcon className='h-5 w-5' />
					</ListItemPrefix>
					Backlog
				</ListItem>
				<ListItem>
					<ListItemPrefix>
						<ViewColumnsIcon className='h-5 w-5' />
					</ListItemPrefix>
					Board
				</ListItem>
				<ListItem>
					<ListItemPrefix>
						<ListBulletIcon className='h-5 w-5' />
					</ListItemPrefix>
					Issues
				</ListItem>
			</List>
		</Card>
	);
};

export default Sidebar;
