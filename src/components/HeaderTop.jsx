import './HeaderTop.css';
import MoonIcon from './MoonIcon';

function HeaderTop() {
	return (
		<div className='header-top'>
			<div className='logo'>devfinder</div>
			<div className='mode-box'>
				<p className='theme-mode'>Dark</p>
				<MoonIcon />
			</div>
		</div>
	);
}

export default HeaderTop;
