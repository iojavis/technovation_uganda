import { useState } from 'react';

const ChevronIcon = ({ isOpen }) => (
	<svg
		className={`h-6 w-6 transform transition-transform ${
			isOpen ? 'rotate-180' : ''
		}`}
		fill='none'
		stroke='currentColor'
		viewBox='0 0 24 24'
	>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={2}
			d='M19 9l-7 7-7-7'
		/>
	</svg>
);

const faqs = [
	{
		question: 'What is Technovation Global?',
		answer:
			'Technovation is a program that empowers girls to become leaders, creators, and problem-solvers through technology and entrepreneurship.',
	},
	{
		question: 'Who can participate in Technovation?',
		answer:
			'Girls aged 8-18 from anywhere in the world can participate in Technovation. No prior coding experience is required.',
	},
	{
		question: 'How can I register for the program?',
		answer:
			'You can register for the program through the Technovation Official website. Keep an eye on our announcements for the registration dates.',
	},
	{
		question: 'What kind of support is provided during the program?',
		answer:
			'Participants receive mentorship from industry professionals, access to learning resources, and support from the Technovation Team.',
	},
];

const Faq = () => {
	const [openIndex, setOpenIndex] = useState(null);

	return (
		<section
			aria-labelledby='faq-heading'
			className='bg-gray-50 py-16 dark:bg-gray-900'
		>
			<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
				<header className='text-center'>
					<h2
						id='faq-heading'
						className='text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white'
					>
						Frequently Asked Questions
					</h2>
					<p className='mt-4 text-lg text-gray-600 dark:text-gray-300'>
						Common questions about Technovation programs
					</p>
				</header>

				<div className='mt-12 space-y-6'>
					{faqs.map((faq, index) => (
						<div
							key={faq.question}
							className='rounded-lg bg-white shadow-sm dark:bg-gray-800'
						>
							<button
								onClick={() =>
									setOpenIndex(openIndex === index ? null : index)
								}
								className='flex w-full items-center justify-between p-6'
								aria-expanded={openIndex === index}
								aria-controls={`faq-answer-${index}`}
							>
								<h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
									{faq.question}
								</h3>
								<ChevronIcon isOpen={openIndex === index} />
							</button>

							<div
								id={`faq-answer-${index}`}
								role='region'
								className={`grid transition-all duration-300 ease-in-out ${
									openIndex === index
										? 'grid-rows-[1fr] opacity-100 scale-y-100'
										: 'grid-rows-[0fr] opacity-0 scale-y-95'
								}`}
							>
								<p className='overflow-hidden px-6 pb-6 text-gray-600 dark:text-gray-300'>
									{faq.answer}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Faq;
