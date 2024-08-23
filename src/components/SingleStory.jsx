const SingleStory = () => {
	return (
		<div>
			<section className='py-10 bg-white sm:py-16 lg:py-24'>
				<div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
					<div className='grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12'>
						<div className='relative lg:mb-12'>
							<img
								className='absolute -right-0 -bottom-8 xl:-bottom-12 xl:-right-4'
								src='https://cdn.rareblocks.xyz/collection/celebration/images/content/3/dots-pattern.svg'
								alt=''
							/>
							<div className='pl-12 pr-6'>
								<img
									className='relative'
									src='https://images.unsplash.com/photo-1507427254987-7be33d0321d3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
									alt=''
								/>
							</div>
							<div className='absolute left-0 pr-12 bottom-8 xl:bottom-20'>
								<div className='max-w-xs bg-blue-600 rounded-lg sm:max-w-md xl:max-w-md'>
									<div className='px-3 py-4 sm:px-5 sm:py-8'>
										<div className='flex items-start'>
											<p className='text-3xl sm:text-4xl'>👋</p>
											<blockquote className='ml-5'>
												<p className='text-sm font-medium text-white sm:text-lg'>
													“Joining Technovation was a life-changing
													experience for me. The program gave me
													the skills and confidence to build an app
													that addresses a real need in my
													community.”
												</p>
											</blockquote>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className='2xl:pl-16'>
							<h2 className='text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight'>
								Technovation changes girls’ lives.
							</h2>
							<p className='text-xl leading-relaxed text-gray-900 mt-9'>
								Students express a greater interest in technology and
								leadership after participating in our program, and 58%
								of our alumni enroll in more computer science courses
								after Technovation.
							</p>
							<p className='mt-6 text-xl leading-relaxed text-gray-900'>
								Most join with no previous tech experience, but are
								ready to learn.
							</p>
						</div>
					</div>
				</div>
			</section>
			;
		</div>
	);
};

export default SingleStory;
