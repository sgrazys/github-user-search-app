import './Search.css';

function Search() {
	return (
		<form className='search-bar'>
			<div className='magnifier'>
				<div className='circle'></div>
				<div className='line'></div>
			</div>
			<input
				className='search-input'
				type='text'
				placeholder='Search GitHub username…'
			/>
			<button className='btn'>Search</button>
		</form>
	);
}

export default Search;
