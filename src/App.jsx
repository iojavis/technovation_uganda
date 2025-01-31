import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Benefits from './components/Benefits';
import SingleStory from './components/SingleStory';
import GetInTouch from './components/GetInTouch';
import Newsletter from './components/Newsletter';
// import Hero from './components/Hero';
import Faq from './components/Faq';
import Partnerships from './components/Partnerships';
import Header from './components/Header';

const App = () => {
	return (
		<div className='overflow-hidden'>
			<Navbar />
			<Header />
			<Benefits />
			<SingleStory />
			<Partnerships />
			<Newsletter />
			<GetInTouch />
			{/* <Hero /> */}
			<Faq />

			<Footer />
		</div>
	);
};

export default App;
