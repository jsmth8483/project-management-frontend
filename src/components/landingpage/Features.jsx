import { Card, Typography } from '@material-tailwind/react';
import { LayoutGrid, ListChecks, Users } from 'lucide-react';

const features = [
	{
		title: 'Flexible Boards',
		text: "Customize your workflow with Kanban boards, lists, or timeline views to match your team's needs.",
		icon: LayoutGrid,
	},
	{
		title: 'Team Collaboration',
		text: 'Foster teamwork with real-time updates, comments, and file sharing capabilities.',
		icon: Users,
	},
	{
		title: 'Task Management',
		text: 'Break down projects into manageable tasks, set priorities, and track progress effortlessly.',
		icon: ListChecks,
	},
];

const FeatureCard = ({ featureDetails }) => {
	return (
		<Card className='flex flex-col p-5'>
			<featureDetails.icon className='h-10 w-10 stroke-cyan-500' />
			<Typography as='h4' className='py-5 text-2xl font-bold text-black'>
				{featureDetails.title}
			</Typography>
			<Typography as='p' className='pt-5 text-gray-600'>
				{featureDetails.text}
			</Typography>
		</Card>
	);
};

const Features = () => {
	return (
		<div className='py-32 px-10 bg-gray-100'>
			<Typography
				as='h1'
				className='pb-10 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold'
			>
				Key Features
			</Typography>
			<div className='grid lg:grid-cols-3 gap-6 lg:gap-12'>
				{features.map((featureDetails) => (
					<FeatureCard
						featureDetails={featureDetails}
						key={featureDetails.text}
					/>
				))}
			</div>
		</div>
	);
};

export default Features;
