import {
	clean_water,
	climate_action,
	gender_equality,
	good_healthcare,
	instagram,
	quality_education,
	sustainable_cities_business,
} from '../assets';

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
					<div className='overflow-hidden bg-white rounded shadow'>
						<div className='p-8'>
							<div className='flex items-center'>
								<img
									className='flex-shrink-0 w-12 h-auto'
									src={quality_education}
									alt=''
								/>
								<div className='ml-5 mr-auto'>
									<p className='text-xl font-semibold text-black'>
										Quality Education
									</p>
									<p className='mt-px text-sm text-gray-600'>
										(SDG 4)
									</p>
								</div>
								<svg
									className='hidden w-5 h-5 text-blue-600'
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M14 5l7 7m0 0l-7 7m7-7H3'
									/>
								</svg>
							</div>
							<p className='text-base leading-relaxed text-gray-600 mt-7'>
								Through innovative educational tools and platforms, our
								participants are enhancing access to quality education
								and learning resources for all.
							</p>
						</div>
					</div>

					{/* Repeat similar structures for each integration, adjusting only the img src and text */}

					<div className='overflow-hidden bg-white rounded shadow'>
						<div className='p-8'>
							<div className='flex items-center'>
								<img
									className='flex-shrink-0 w-12 h-auto'
									src={gender_equality}
									alt=''
								/>
								<div className='ml-5 mr-auto'>
									<p className='text-xl font-semibold text-black'>
										Gender Equality
									</p>
									<p className='mt-px text-sm text-gray-600'>
										(SDG 5)
									</p>
								</div>
								<svg
									className='block w-6 h-6 text-blue-600'
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M14 5l7 7m0 0l-7 7m7-7H3'
									/>
								</svg>
							</div>
							<p className='text-base leading-relaxed text-gray-600 mt-7'>
								Our programs promote gender equality by empowering girls
								to challenge stereotypes and create solutions that
								advance women’s rights and opportunities.
							</p>
						</div>
					</div>

					<div className='overflow-hidden bg-white rounded shadow'>
						<div className='p-8'>
							<div className='flex items-center'>
								<img
									className='flex-shrink-0 w-12 h-auto'
									src={good_healthcare}
									alt=''
								/>
								<div className='ml-5 mr-auto'>
									<p className='text-xl font-semibold text-black'>
										Good Health and Well-being
									</p>
									<p className='mt-px text-sm text-gray-600'>
										(SDG 3)
									</p>
								</div>
								<svg
									className='hidden w-5 h-5 text-blue-600'
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M14 5l7 7m0 0l-7 7m7-7H3'
									/>
								</svg>
							</div>
							<p className='text-base leading-relaxed text-gray-600 mt-7'>
								From health apps to mental wellness platforms, our girls
								are developing solutions that improve health outcomes
								and promote well-being.
							</p>
						</div>
					</div>

					<div className='overflow-hidden bg-white rounded shadow'>
						<div className='p-8'>
							<div className='flex items-center'>
								<img
									className='flex-shrink-0 w-12 h-auto'
									src={clean_water}
									alt=''
								/>
								<div className='ml-5 mr-auto'>
									<p className='text-xl font-semibold text-black'>
										Clean Water and Sanitation
									</p>
									<p className='mt-px text-sm text-gray-600'>
										(SDG 6)
									</p>
								</div>
								<svg
									className='hidden w-5 h-5 text-blue-600'
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M14 5l7 7m0 0l-7 7m7-7H3'
									/>
								</svg>
							</div>
							<p className='text-base leading-relaxed text-gray-600 mt-7'>
								We are tackling issues of water scarcity and sanitation
								with creative solutions that ensure access to clean
								water and proper hygiene.
							</p>
						</div>
					</div>

					<div className='overflow-hidden bg-white rounded shadow'>
						<div className='p-8'>
							<div className='flex items-center'>
								<img
									className='flex-shrink-0 w-12 h-auto'
									src={sustainable_cities_business}
									alt=''
								/>
								<div className='ml-5 mr-auto'>
									<p className='text-xl font-semibold text-black'>
										Sustainable Cities and Communities
									</p>
									<p className='mt-px text-sm text-gray-600'>
										(SDG 11)
									</p>
								</div>
								<svg
									className='hidden w-5 h-5 text-blue-600'
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M14 5l7 7m0 0l-7 7m7-7H3'
									/>
								</svg>
							</div>
							<p className='text-base leading-relaxed text-gray-600 mt-7'>
								Our participants are working on projects that enhance
								urban living, focusing on waste management, sustainable
								transportation, and resilient infrastructure.
							</p>
						</div>
					</div>

					<div className='overflow-hidden bg-white rounded shadow'>
						<div className='p-8'>
							<div className='flex items-center'>
								<img
									className='flex-shrink-0 w-12 h-auto'
									src={climate_action}
									alt=''
								/>
								<div className='ml-5 mr-auto'>
									<p className='text-xl font-semibold text-black'>
										Climate Action
									</p>
									<p className='mt-px text-sm text-gray-600'>
										(SDG 13)
									</p>
								</div>
								<svg
									className='hidden w-5 h-5 text-blue-600'
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M14 5l7 7m0 0l-7 7m7-7H3'
									/>
								</svg>
							</div>
							<p className='text-base leading-relaxed text-gray-600 mt-7'>
								With a strong commitment to environmental
								sustainability, our girls are creating solutions to
								combat climate change and protect natural resources.
							</p>
						</div>
					</div>
				</div>

				<div className='mt-12 text-center'>
					<a
						href='https://sdgs.un.org/goals'
						target='_blank'
						title=''
						className='inline-flex p-3 font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline'
					>
						Check all the UNSDG&apos;s
					</a>
				</div>
			</div>
		</section>
	);
};

export default Benefits;
