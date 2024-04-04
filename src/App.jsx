import './App.css';
import profileImg from './assets/img.jpeg';
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

			<main>
				<div className='card'>
					<div className='card-header'>
						<img
							className='profile-img'
							src={profileImg}
							alt='User profile image'
						/>
						<div className='card-header-content'>
							<p className='name'>THE OCTOCAT</p>
							<p className='user-name'>@octocat</p>
							<p className='registered-date'>1410 07 15</p>
						</div>
					</div>
					<p className='card-content'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam magnam quasi sapiente tenetur dicta explicabo amet excepturi mollitia iusto impedit veniam
						velit aperiam vitae tempore modi voluptatem, voluptatum accusantium. Laudantium?
					</p>

					<div className='stats'>
						<div className='repos'>
							<p>Repos</p>
							<p>8</p>
						</div>
						<div className='followers'>
							<p>Followers</p>
							<p>1009</p>
						</div>
						<div className='following'>
							<p>Following</p>
							<p>1991</p>
						</div>
					</div>
				</div>
			</main>
			<footer>FOOTER</footer>
		</div>
	);
}

export default App;
