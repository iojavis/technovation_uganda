import {
	clean_water,
	climate_action,
	gender_equality,
	good_healthcare,
	quality_education,
	sustainable_cities_business,
} from '../assets';

const sdgData = [
	{
		title: 'Quality Education',
		goal: 4,
		icon: quality_education,
		description:
			'Through innovative educational tools and platforms, our participants are enhancing access to quality education and learning resources for all.',
	},
	{
		title: 'Gender Equality',
		goal: 5,
		icon: gender_equality,
		description:
			'Our programs promote gender equality by empowering girls to challenge stereotypes and create solutions that advance women’s rights and opportunities.',
	},
	{
		title: 'Good Health and Well-being',
		goal: 3,
		icon: good_healthcare,
		description:
			'From health apps to mental wellness platforms, our girls are developing solutions that improve health outcomes and promote well-being.',
	},
	{
		title: 'Clean Water and Sanitation',
		goal: 6,
		icon: clean_water,
		description:
			'We tackle water scarcity and sanitation issues with creative solutions ensuring access to clean water and proper hygiene.',
	},
	{
		title: 'Sustainable Cities and Communities',
		goal: 11,
		icon: sustainable_cities_business,
		description:
			'Projects focus on urban living improvements including waste management, sustainable transportation, and resilient infrastructure.',
	},
	{
		title: 'Climate Action',
		goal: 13,
		icon: climate_action,
		description:
			'Solutions combat climate change and protect natural resources through environmental sustainability initiatives.',
	},
];

const Benefits = () => {
	return (
		<section className='py-10 bg-gray-50 sm:py-16 lg:py-24'>
			<div className='px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl'>
				<div className='max-w-2xl mx-auto text-center'>
					<h2 className='text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl'>
						Why Technovation?
					</h2>
					<p className='max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600'>
						Girls are changing the world with technology. Climate change,
						domestic violence, women&apos;s equality, accessibility —
						these are just a few problems 2,100 Technovation Girls teams
						tackled in 2024.
					</p>
				</div>

				<div className='grid grid-cols-1 gap-6 mt-12 lg:mt-16 xl:gap-10 sm:grid-cols-2 lg:grid-cols-3'>
					{sdgData.map((sdg, index) => (
						<div
							key={index}
							className='overflow-hidden bg-white rounded shadow transition-all duration-300 hover:shadow-lg'
						>
							<div className='p-8'>
								<div className='flex items-center gap-5'>
									<img
										className='w-12 h-12'
										src={sdg.icon}
										alt={`${sdg.title} icon`}
										aria-hidden='true'
									/>
									<div className='flex-1'>
										<h3 className='text-xl font-semibold text-black'>
											{sdg.title}
										</h3>
										<p className='mt-1 text-sm text-gray-600'>
											(SDG {sdg.goal})
										</p>
									</div>
								</div>
								<p className='mt-6 text-base leading-relaxed text-gray-600'>
									{sdg.description}
								</p>
							</div>
						</div>
					))}
				</div>

				<div className='mt-12 text-center'>
					<a
						href='https://sdgs.un.org/goals'
						target='_blank'
						rel='noopener noreferrer'
						className='inline-flex items-center font-medium text-blue-600 hover:text-blue-700 transition-colors gap-2 group'
					>
						Explore all UN Sustainable Development Goals
						<svg
							className='w-5 h-5 transition-transform group-hover:translate-x-1'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M14 5l7 7m0 0l-7 7m7-7H3'
							/>
						</svg>
					</a>
				</div>
			</div>
		</section>
	);
};

export default Benefits;
