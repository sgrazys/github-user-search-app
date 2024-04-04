import Button from './Button';
import './Search.css';

function Search() {
	return (
		<form className='search-bar'>
			<label
				htmlFor='search'
				className='magnifier'>
				<div className='circle'></div>
				<div className='line'></div>
			</label>
			<input
				id='search'
				className='search-input'
				type='text'
				placeholder='Search GitHub username…'
			/>
			<Button title={'Search'} />
		</form>
	);
}

export default Search;
