import { t2, t8, t9, t7 } from "../assets";

const Header = () => {
	return (
		<div className='relative isolate'>
			<svg
				aria-hidden='true'
				className='absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]'
			>
				<defs>
					<pattern
						x='50%'
						y={-1}
						id='1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84'
						width={200}
						height={200}
						patternUnits='userSpaceOnUse'
					>
						<path d='M.5 200V.5H200' fill='none' />
					</pattern>
				</defs>
				<svg x='50%' y={-1} className='overflow-visible fill-gray-50'>
					<path
						d='M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z'
						strokeWidth={0}
					/>
				</svg>
				<rect
					fill='url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)'
					width='100%'
					height='100%'
					strokeWidth={0}
				/>
			</svg>
			<div
				aria-hidden='true'
				className='absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48'
			>
				<div
					style={{
						clipPath:
							'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
					}}
					className='aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30'
				/>
			</div>
			<div className='overflow-hidden'>
				<div className='mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32'>
					<div className='mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center'>
						<div className='relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl'>
							{/* <h1 className='font-rubik-mono text-[56px] font-bold leading-[65px] tracking-tight text-[#1D1349] sm:text-[75px] sm:leading-[75px]'>
								Welcome to Technovation Uganda.
							</h1> */}
							<h1 className='font-rubik-mono text-4xl font-bold leading-tight text-[#1D1349] sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight lg:text-[56px] lg:leading-[65px]'>
								Welcome to Technovation Uganda.
							</h1>
							<p className='mt-6 font-poppins text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none'>
								Every year, girls across the globe step up to solve
								problems in their community with technology through
								Technovation Girls. Supported by a network of mentors,
								ambassadors, volunteers and parents, these girls are
								changing the world—join them.
							</p>
							<div className='mt-10 flex items-center gap-x-6'>
								<a
									href='https://technovationchallenge.org/'
									className='rounded-lg bg-[#1D1349] px-8 py-4 font-poppins text-lg font-bold text-white shadow-sm transition-all hover:bg-[#180e3a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D1349]'
								>
									Join the movement.
								</a>
							</div>
						</div>
						<div className='mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0'>
							<div className='ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80'>
								<div className='relative'>
									<img
										alt=''
										src={t8}
										className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
									/>
									<div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
								</div>
							</div>
							<div className='mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36'>
								<div className='relative'>
									<img
										alt=''
										src={t2}
										className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
									/>
									<div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
								</div>
								<div className='relative'>
									<img
										alt=''
										src={t9}
										className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
									/>
									<div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
								</div>
							</div>
							<div className='w-44 flex-none space-y-8 pt-32 sm:pt-0'>
								<div className='relative'>
									<img
										alt=''
										src={t7}
										className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
									/>
									<div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
								</div>
								<div className='relative'>
									<img
										alt=''
										src='https://kjacksondgmailcom.wordpress.com/wp-content/uploads/2017/03/regional-quiz-competition.jpg'
										className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
									/>
									<div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
