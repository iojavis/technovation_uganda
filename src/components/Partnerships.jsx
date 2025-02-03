import { technovation_logo_colored } from '../assets';
import { technovation_logo_bw } from '../assets';

const partnershipsData = [
	{
		name: 'Technovation Uganda',
		description:
			'Empowering girls and young women to become tech entrepreneurs and leaders.',
		imageSrc: technovation_logo_colored,
		lightImageSrc: technovation_logo_bw,
		altText: 'Technovation Uganda',
		link: 'https://technovation.org',
	},
	{
		name: 'Oysters & Pearls Uganda',
		description:
			'Transforming lives through education, mentorship, and community development.',
		imageSrc: technovation_logo_bw,
		lightImageSrc: technovation_logo_colored,
		altText: 'Oysters & Pearls Uganda',
		link: 'https://oystersandpearlsuganda.org',
	},
];

export default function Partnerships() {
	return (
		<section className='py-20 lg:py-[120px] bg-white'>
			<div className='container mx-auto'>
				<div className='text-center mb-12'>
					<h2 className='text-[32px] font-poppins-bold text-primary-navy leading-[42px] mb-4'>
						Collaborating for a brighter future.
					</h2>
					<p className='text-body text-black font-poppins-regular'>
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
	const { name, description, imageSrc, altText, link } =
		partnership;

	return (
		<div className='w-full sm:w-[45%] lg:w-[30%] text-center'>
			<div className='bg-white rounded-lg shadow-md p-6'>
				<a href={link} target='_blank' rel='noopener noreferrer'>
					<img
						src={imageSrc}
						alt={altText}
						className='h-24 mx-auto mb-4'
					/>
				</a>
				<h3 className='text-xl font-poppins-bold text-primary-navy mb-2'>
					{name}
				</h3>
				<p className='text-body text-black font-poppins-regular'>
					{description}
				</p>
			</div>
		</div>
	);
};
