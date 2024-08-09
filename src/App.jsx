import Header from './components/Header';
import Stats from './components/Stats';
import StatsFigures from './components/StatsFigures';
import AppDemo from './components/AppDemo';
import Footer from './components/Footer';

const App = () => {
	return (
		<div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
			<Header />
			<Stats />
			<StatsFigures />
			<AppDemo />
			<Footer />
		</div>
	);
};

export default App;
