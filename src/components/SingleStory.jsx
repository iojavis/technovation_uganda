import { t12 } from "../assets";

const SingleStory = () => {
	return (
		<div>
			<section className='py-12 bg-white sm:py-16 lg:py-20'>
				<div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
					<div className='grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-8'>
						{/* Image Section */}
						<div className='relative lg:mb-10'>
							<div className='pl-8 pr-4'>
								<img
									className='relative rounded-lg shadow-md'
									src={t12}
									alt='Sacred Heart SS Technovation teams celebrating their success'
								/>
							</div>

							{/* Testimonial Card */}
							<div className='absolute left-0 pr-8 bottom-6 xl:bottom-16'>
								<div className='max-w-xs bg-[#1D1349] rounded-lg sm:max-w-md'>
									<div className='px-4 py-4 sm:px-6 sm:py-6'>
										<div className='flex items-start gap-4'>
											<p className='text-3xl'>🏆</p>
											<blockquote>
												<p className='font-poppins text-base text-white sm:text-lg'>
													“Being semifinalists in Uganda&apos;s
													Technovation Challenge proved innovation
													has no age limits.”
													<br />
													<br />
													<span className='font-poppins-bold'>
														- Super Glady, Team Lead, Genius
														Guild.
													</span>
												</p>
											</blockquote>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Content Section */}
						<div className='xl:pl-12'>
							<h1 className='font-rubik-mono text-[#1D1349] text-4xl leading-tight sm:text-5xl lg:text-[56px] lg:leading-[65px]'>
								Sacred Heart SS Dominates Technovation Uganda
							</h1>

							<div className='mt-8 space-y-6'>
								{/* Farm Rescue Card */}
								<div className='p-5 bg-[#43B02A]/10 rounded-lg'>
									<h4 className='font-poppins-bold text-[#1D1349] text-lg'>
										Genius Guild - Farm Rescue
									</h4>
									<p className='mt-2 font-poppins text-gray-800'>
										AI-powered agricultural solution using image
										recognition to diagnose plant diseases and boost
										crop yields.
									</p>{' '}
									<br />
									<a
										className='text-gray-500 decoration-gray-500 hover:opacity-80 focus:outline-none focus:opacity-80'
										href='https://youtu.be/_vf6f_gzrxo?si=SYo44xKSxEVHQqRI'
									>
										Watch Video.
									</a>
								</div>

								{/* Speak Bridge Card */}
								<div className='p-5 bg-[#1D1349]/10 rounded-lg'>
									<h4 className='font-poppins-bold text-[#1D1349] text-lg'>
										Jaguars Demo - Speak Bridge
									</h4>
									<p className='mt-2 font-poppins text-gray-800'>
										Multilingual translation platform bridging
										communication gaps across Uganda&apos;s diverse
										linguistic communities.
									</p>{' '}
									<br />
									<a
										className='text-gray-500 decoration-gray-500 hover:opacity-80 focus:outline-none focus:opacity-80'
										href='https://youtu.be/WwlMh_xcJRg'
									>
										Watch Video.
									</a>
								</div>

								{/* Achievement Text */}
								<p className='font-poppins text-gray-800'>
									In 2024, Sacred Heart SS became Uganda&apos;s only
									school with dual semifinalist teams, continuing their
									legacy of technological excellence through
									Technovation&apos;s global platform.
								</p>
							</div>

							{/* CTA Button */}
							<a
								href='https://technovationchallenge.org/'
								className='mt-8 inline-block rounded bg-[#1D1349] px-6 py-3 font-poppins-bold text-lg text-white hover:bg-[#180e3a] focus:ring-2 focus:ring-[#1D1349]'
							>
								View Competition Results
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default SingleStory;
