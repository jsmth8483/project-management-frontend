import { BoltIcon } from '@heroicons/react/20/solid';
import {
	SiFacebook,
	SiGithub,
	SiLinkedin,
	SiX,
} from '@icons-pack/react-simple-icons';
import { Button, Input, Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const productListItems = ['Features', 'FAQ', 'Support'];
const companyListItems = ['About', 'Blog', 'Careers'];

const Footer = () => {
	return (
		<div className='py-10 px-8 grid grid-cols-1 lg:grid-cols-4 gap-8 bg-gray-100'>
			<div className='flex flex-col gap-4'>
				<div className='flex items-center'>
					<span className='h-6 w-6'>
						<BoltIcon
							className='stroke-cyan-500'
							color='transparent'
						/>
					</span>
					<Typography
						as='a'
						href='/taskflow'
						className='ml-2 mr-4 cursor-pointer py-1.5 font-semibold'
					>
						TaskFlow
					</Typography>
				</div>
				<Typography
					as='p'
					className='text-gray-600 font-medium text-sm'
				>
					Streamline your projects and boost productivity with
					TaskFlow.
				</Typography>
				<div className='flex gap-4'>
					<SiX color='gray' size='20px' />
					<SiFacebook color='gray' size='20px' />
					<SiLinkedin color='gray' size='20px' />
					<SiGithub color='gray' size='20px' />
				</div>
			</div>
			<div>
				<Typography className='uppercase font-bold text-sm mb-5'>
					Product
				</Typography>
				<ul className='space-y-2'>
					{productListItems.map((item) => (
						<li className='text-gray-500'>
							<Link href='#' key={item}>
								{item}
							</Link>
						</li>
					))}
				</ul>
			</div>
			<div>
				<Typography className='uppercase font-bold text-sm mb-5'>
					Company
				</Typography>
				<ul className='space-y-2'>
					{companyListItems.map((item) => (
						<li className='text-gray-500'>
							<Link href='#' key={item}>
								{item}
							</Link>
						</li>
					))}
				</ul>
			</div>
			<div className='space-y-5'>
				<Typography className='uppercase font-bold text-sm mb-5'>
					Stay Updated
				</Typography>
				<Typography className='text-gray-600 text-sm font-medium mb-5'>
					Subscribe to our newsletter for the latest updates and
					features.
				</Typography>
				<form className='space-y-2'>
					<Input
						className='w-full !border-t-blue-gray-200 focus:!border-t-blue-gray-900'
						placeholder='Enter your email'
						labelProps={{
							className: 'before:content-none after:content-none',
						}}
					/>
					<Button className='w-full' color='cyan'>
						Subscribe
					</Button>
				</form>
			</div>
		</div>
	);
};

export default Footer;
