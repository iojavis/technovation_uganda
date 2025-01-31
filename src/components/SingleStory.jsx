const SingleStory = () => {
	return (
		<div>
			<section className='py-16 bg-white sm:py-20 lg:py-24'>
				<div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
					<div className='grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12'>
						<div className='relative lg:mb-12'>
							<div className='pl-12 pr-6'>
								<img
									className='relative rounded-xl shadow-lg'
									src='https://images.unsplash.com/photo-1519457431-44ccd64a579b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
									alt='Sacred Heart SS Technovation Teams'
								/>
							</div>
							<div className='absolute left-0 pr-12 bottom-8 xl:bottom-20'>
								<div className='max-w-xs bg-[#1D1349] rounded-lg sm:max-w-md xl:max-w-md'>
									<div className='px-3 py-4 sm:px-5 sm:py-8'>
										<div className='flex items-start'>
											<p className='text-3xl sm:text-4xl'>🏆</p>
											<blockquote className='ml-5'>
												<p className='text-sm font-medium text-white sm:text-lg'>
													&quot;Being semifinalists in
													Uganda&apos;s Technovation Challenge has
													shown us that age and gender can&apos;t
													limit innovation&quot;
													<br />
													<br />- Super Gladys, Genius Guild Team
													Lead
												</p>
											</blockquote>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className='2xl:pl-16'>
							<h2 className='text-3xl font-bold leading-tight text-[#1D1349] sm:text-4xl lg:text-5xl lg:leading-tight'>
								Sacred Heart SS Shines at Technovation Global Challenge.
							</h2>

							<div className='mt-9 space-y-6'>
								<div className='p-6 bg-[#43B02A]/10 rounded-xl'>
									<h3 className='text-2xl font-bold text-[#1D1349]'>
										Genius Guild - Farm Rescue App
									</h3>
									<p className='mt-2 text-lg text-gray-800'>
										AI-powered plant disease detection using image
										recognition to help farmers improve crop yields.
									</p>
								</div>

								<div className='p-6 bg-[#1D1349]/10 rounded-xl'>
									<h3 className='text-2xl font-bold text-[#1D1349]'>
										Jaguars Demo - Speak Bridge
									</h3>
									<p className='mt-2 text-lg text-gray-800'>
										Real-time language translation app breaking
										communication barriers in Uganda&apos;s
										multilingual communities.
									</p>
								</div>

								<p className='text-lg text-gray-700'>
									As the only Ugandan school with two semifinalist
									teams in 2024, Sacred Heart SS continues its legacy
									of tech excellence through Technovation&apos;s global
									platform.
								</p>
							</div>

							<a
								href='https://www.youtube.com/@LydiaLaker'
								className='mt-8 inline-block rounded-lg bg-[#1D1349] px-8 py-4 font-poppins text-lg font-bold text-white shadow-sm transition-all hover:bg-[#180e3a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D1349]'
							>
								Meet The Teams
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default SingleStory;
