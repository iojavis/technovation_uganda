import { technovation_logo_1 } from '../assets';

const partnershipsData = [
	{
		name: 'Technovation Uganda',
		description:
			'Empowering girls and young women to become tech entrepreneurs and leaders.',
		imageSrc: { technovation_logo_1 }, // Replace with Technovation Uganda logo
		lightImageSrc: 'https://via.placeholder.com/150', // Replace with Technovation Uganda light logo
		altText: 'Technovation Uganda',
		link: 'https://technovation.org', // Replace with actual link
	},
	{
		name: 'Oysters & Pearls Uganda',
		description:
			'Transforming lives through education, mentorship, and community development.',
		imageSrc: 'https://via.placeholder.com/150', // Replace with Oysters and Pearls Uganda logo
		lightImageSrc: 'https://via.placeholder.com/150', // Replace with Oysters and Pearls Uganda light logo
		altText: 'Oysters & Pearls Uganda',
		link: 'https://oystersandpearlsuganda.org', // Replace with actual link
	},
];

export default function Partnerships() {
	return (
		<section className='bg-white py-20 lg:py-[120px] dark:bg-dark'>
			<div className='container mx-auto'>
				<div className='text-center mb-12'>
					<h2 className='text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white'>
						Collaborating for a brighter future.
					</h2>
					<p className='mt-4 text-lg text-gray-600 dark:text-gray-300'>
						Together, we are empowering the next generation of leaders in
						Uganda.
					</p>
				</div>

				<div className='flex flex-wrap justify-center gap-8'>
					{partnershipsData.map((partnership, i) => (
						<PartnershipCard key={i} partnership={partnership} />
					))}
				</div>
			</div>
		</section>
	);
}

const PartnershipCard = ({ partnership }) => {
	const { name, description, imageSrc, lightImageSrc, altText, link } =
		partnership;

	return (
		<div className='w-full sm:w-[45%] lg:w-[30%] text-center'>
			<div className='bg-white rounded-lg shadow-md p-6 dark:bg-gray-800'>
				<a href={link} target='_blank' rel='noopener noreferrer'>
					<img
						src={imageSrc}
						alt={altText}
						className='h-24 mx-auto mb-4 dark:hidden'
					/>
					<img
						src={lightImageSrc}
						alt={altText}
						className='h-24 mx-auto mb-4 hidden dark:block'
					/>
				</a>
				<h3 className='text-xl font-bold text-gray-900 dark:text-white'>
					{name}
				</h3>
				<p className='mt-2 text-gray-600 dark:text-gray-300'>
					{description}
				</p>
			</div>
		</div>
	);
};
