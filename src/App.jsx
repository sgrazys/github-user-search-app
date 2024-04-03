import './App.css';
import HeaderTop from './components/HeaderTop';
import Search from './components/Search';

function App() {
	return (
		<div className='app'>
			<header>
				<HeaderTop />
				<Search />
			</header>
			<main>Dev Card</main>
			<footer>FOOTER</footer>
		</div>
	);
}

export default App;
