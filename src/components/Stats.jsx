import {
	ArrowPathIcon,
	CloudArrowUpIcon,
	Cog6ToothIcon,
	FingerPrintIcon,
	LockClosedIcon,
	ServerIcon,
} from '@heroicons/react/20/solid';

const features = [
	{
		name: 'No Poverty',
		description: 'End poverty in all its forms everywhere.',
		icon: CloudArrowUpIcon,
	},
	{
		name: 'Zero Hunger',
		description:
			'End hunger, achieve food security and improved nutrition, and promote sustainable agriculture.',
		icon: LockClosedIcon,
	},
	{
		name: 'Good Health and Well-being.',
		description:
			'Ensure healthy lives and promote well-being for all at all ages.',
		icon: ArrowPathIcon,
	},
	{
		name: 'Quality Education.',
		description:
			'Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.',
		icon: FingerPrintIcon,
	},
	{
		name: 'Gender Equality.',
		description: 'Achieve gender equality and empower all women and girls.',
		icon: Cog6ToothIcon,
	},
	{
		name: 'Clean Water and Sanitation.',
		description:
			'Ensure availability and sustainable management of water and sanitation for all.. ',
		icon: ServerIcon,
	},
];

export default function Stats() {
	return (
		<div className='bg-white py-24 sm:py-32'>
			<div className='mx-auto max-w-7xl px-6 lg:px-8'>
				<div className='mx-auto max-w-2xl sm:text-center'>
					<h2 className='text-base font-semibold leading-7 text-indigo-600'>
						A glimpse into the future.
					</h2>
					<p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
						Technovation changes girl&apos;s lives.
					</p>
					<p className='mt-6 text-lg leading-8 text-gray-600'>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit.
						Maiores impedit perferendis suscipit eaque, iste dolor
						cupiditate blanditiis.
					</p>
				</div>
			</div>
			<div className='relative overflow-hidden pt-16'>
				<div className='mx-auto max-w-7xl px-6 lg:px-8'>
					<img
						alt='Technovation Screenshot'
						src='https://technovationchallenge.org/wp-content/uploads/2019/09/Alumni_Interests_Pie.png'
						width={2432}
						height={1442}
						className='mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10'
					/>
					<div aria-hidden='true' className='relative'>
						<div className='absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]' />
					</div>
				</div>
			</div>
			<div className='mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8'>
				<dl className='mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16'>
					{features.map((feature) => (
						<div key={feature.name} className='relative pl-9'>
							<dt className='inline font-semibold text-gray-900'>
								<feature.icon
									aria-hidden='true'
									className='absolute left-1 top-1 h-5 w-5 text-indigo-600'
								/>
								{feature.name}
							</dt>{' '}
							<dd className='inline'>{feature.description}</dd>
						</div>
					))}
				</dl>
			</div>
		</div>
	);
}
