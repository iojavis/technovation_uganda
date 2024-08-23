import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CallToAction from './components/CallToAction';
import Benefits from './components/Benefits';
import SingleStory from './components/SingleStory';
import GetInTouch from './components/GetInTouch';
// import Hero from './components/Hero';

const App = () => {
	return (
		<div className='overflow-hidden'>
			<Navbar />
			<Benefits />
			<SingleStory />
			<GetInTouch />
			{/* <Hero /> */}
			<CallToAction />

			<Footer />
		</div>
	);
};

export default App;
