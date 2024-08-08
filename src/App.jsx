import AppDemo from './components/AppDemo';
import Header from './components/Header';
import Stats from './components/Stats';
import StatsFigures from './components/StatsFigures';
import Footer from './components/Footer';
const App = () => {
	return (
		<div className='overflow-hidden'>
			<Header />
			<Stats />
			<StatsFigures />
			<AppDemo />
			<Footer />
		</div>
	);
};
export default App;
