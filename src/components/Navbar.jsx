'use client';

import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { technovation_logo_white } from '../assets';

const navigation = [
	{
		name: 'About',
		href: 'https://www.technovation.org/about',
	},
	{
		name: 'Get Started',
		href: 'https://technovationchallenge.org/get-involved',
	},
	{
		name: 'Curriculum',
		href: 'https://technovationchallenge.org/technovation-curriculum',
	},
	{
		name: 'Log in',
		href: 'https://my.technovationchallenge.org',
	},
];

export default function Navbar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<div className='bg-[#43B02A] shadow-sm'>
			<header className='fixed w-full top-0 z-50 bg-[#43B02A]'>
				<nav
					className='mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-4'
					aria-label='Global'
				>
					{/* Logo */}
					<div className='flex lg:flex-1'>
						<a href='#' className='-m-1 p-1'>
							<span className='sr-only'>Technovation Uganda</span>
							<img
								alt='Technovation Logo'
								src={technovation_logo_white}
								className='h-10 w-auto lg:h-12'
							/>
						</a>
					</div>

					{/* Mobile Menu Button */}
					<div className='flex lg:hidden'>
						<button
							type='button'
							onClick={() => setMobileMenuOpen(true)}
							className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white'
						>
							<span className='sr-only'>Open main menu</span>
							<Bars3Icon className='h-8 w-8' aria-hidden='true' />
						</button>
					</div>

					{/* Desktop Navigation */}
					<div className='hidden lg:flex lg:gap-x-8 xl:gap-x-12'>
						{navigation.map((item) => (
							<a
								key={item.name}
								href={item.href}
								className='font-poppins text-lg font-normal leading-[30px] text-white hover:text-gray-200'
							>
								{item.name}
							</a>
						))}
					</div>

					{/* Desktop Sign Up */}
					<div className='hidden lg:flex lg:flex-1 lg:justify-end'>
						<a
							href='https://my.technovationchallenge.org/signup'
							className='rounded-lg bg-[#1D1349] px-8 py-3.5 font-poppins text-lg font-bold text-white shadow-sm transition-colors hover:bg-[#180e3a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D1349]'
						>
							Sign up
						</a>
					</div>
				</nav>

				{/* Mobile Menu */}
				<Dialog
					open={mobileMenuOpen}
					onClose={setMobileMenuOpen}
					className='lg:hidden'
				>
					<div className='fixed inset-0 z-50 bg-black/30' />
					<DialogPanel className='fixed inset-x-0 top-0 z-50 bg-[#43B02A] px-6 py-6'>
						<div className='flex items-center justify-between'>
							<a href='#' className='-m-1.5 p-1.5'>
								<img
									alt='Technovation Logo'
									src={technovation_logo_white}
									className='h-12 w-auto'
								/>
							</a>
							<button
								type='button'
								onClick={() => setMobileMenuOpen(false)}
								className='-m-2.5 rounded-md p-2.5 text-white'
							>
								<span className='sr-only'>Close menu</span>
								<XMarkIcon className='h-8 w-8' aria-hidden='true' />
							</button>
						</div>
						<div className='mt-8 flow-root'>
							<div className='-my-6 divide-y divide-white/10'>
								<div className='space-y-4 py-6'>
									{navigation.map((item) => (
										<a
											key={item.name}
											href={item.href}
											className='-mx-3 block rounded-lg px-3 py-3 font-poppins text-lg font-normal text-white hover:bg-[#358b22]'
										>
											{item.name}
										</a>
									))}
								</div>
								<div className='py-6'>
									<a
										href='https://my.technovationchallenge.org/signup'
										className='inline-block rounded-lg bg-[#1D1349] px-8 py-3.5 font-poppins text-lg font-bold text-white shadow-sm transition-colors hover:bg-[#180e3a]'
									>
										Sign up
									</a>
								</div>
							</div>
						</div>
					</DialogPanel>
				</Dialog>
			</header>
		</div>
	);
}
