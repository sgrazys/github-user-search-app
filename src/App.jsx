/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import './App.css';
import profileImg from './assets/img.jpeg';
import Card from './components/Card';

import Header from './components/Header';
import HeaderTop from './components/HeaderTop';
import Search from './components/Search';

const URL = 'https://api.github.com/users/';

function App() {
	useEffect(() => {
		async function getUser() {
			const resp = await fetch(`${URL}belauzas`);
			const data = await resp.json();

			console.log(data);

			const { location, name } = data;
			console.log(location);
			console.log(name);
		}

		getUser();
	}, []);

	return (
		<div className='app'>
			<Header>
				<HeaderTop />
				<Search />
			</Header>

			<main>
				<Card img={profileImg} />
			</main>
			<footer>FOOTER</footer>
		</div>
	);
}

export default App;
