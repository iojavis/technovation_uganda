import { op_logo, technovation_logo_colored } from '../assets';
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
		description: 'Cultivating Education & Technology.',
		imageSrc: op_logo,
		lightImageSrc: op_logo,
		altText: 'Oysters & Pearls Uganda',
		link: 'https://oystersandpearls.org',
	},
];

export default function Partnerships() {
	return (
		<section className='py-20 lg:py-[120px] bg-gradient-to-b from-[#F8F9FF] to-white'>
			<div className='container mx-auto px-4'>
				<div className='text-center mb-16 max-w-2xl mx-auto'>
					<h2 className='font-rubik-mono text-[38px] md:text-[42px] text-[#1D1349] mb-5 leading-tight'>
						Collaborating for a{' '}
						<span className='bg-gradient-to-r from-[#FF4D6A] to-[#FF8FA3] text-transparent bg-clip-text'>
							brighter future
						</span>
					</h2>
					<p className='text-lg text-[#4A5568] font-poppins-regular leading-relaxed'>
						Together, we are empowering the next generation of leaders in
						Uganda through technology and innovation.
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto'>
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
		<div className='group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-2'>
			<div className='absolute inset-0 bg-gradient-to-br from-[#FF4D6A]/10 to-[#FF8FA3]/5 opacity-0 group-hover:opacity-100 transition-opacity' />

			<div className='p-8 text-center'>
				<a
					href={link}
					target='_blank'
					rel='noopener noreferrer'
					className='inline-block mb-6'
				>
					<div className='relative h-24 w-48 mx-auto'>
						<img
							src={imageSrc}
							alt={altText}
							className='h-full w-full object-contain transition-opacity opacity-100 group-hover:opacity-0 absolute'
						/>
						<img
							src={lightImageSrc}
							alt={altText}
							className='h-full w-full object-contain transition-opacity opacity-0 group-hover:opacity-100 absolute'
						/>
					</div>
				</a>

				<h3 className='font-rubik-mono text-xl text-[#1D1349] mb-3'>
					{name}
				</h3>
				<p className='text-[#4A5568] font-poppins-regular leading-relaxed mb-6'>
					{description}
				</p>

				<a
					href={link}
					target='_blank'
					rel='noopener noreferrer'
					className='inline-flex items-center text-[#FF4D6A] font-poppins-bold hover:text-[#1D1349] transition-colors'
				>
					Learn More
					<svg
						className='w-4 h-4 ml-2'
						fill='currentColor'
						viewBox='0 0 20 20'
					>
						<path
							fillRule='evenodd'
							d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z'
							clipRule='evenodd'
						/>
					</svg>
				</a>
			</div>
		</div>
	);
};
