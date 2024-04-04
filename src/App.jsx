import './App.css';
import Header from './components/Header';
import HeaderTop from './components/HeaderTop';
import Search from './components/Search';

function App() {
	return (
		<div className='app'>
			<Header>
				<HeaderTop />
				<Search />
			</Header>

			<main>Dev Card</main>
			<footer>FOOTER</footer>
		</div>
	);
}

export default App;
