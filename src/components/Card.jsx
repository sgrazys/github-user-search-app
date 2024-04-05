/* eslint-disable react/prop-types */
import './Card.css';
import location from '../assets/icon-location.svg';
// import search from '../assets/icon-search.svg';
// import sun from '../assets/icon-sun.svg';
import twitter from '../assets/icon-twitter.svg';
import website from '../assets/icon-website.svg';
import company from '../assets/icon-company.svg';

function Card({ img }) {
	return (
		<div className='card'>
			<div className='card-header'>
				<img
					className='profile-img'
					src={img}
					alt='User profile image'
				/>
				<div className='card-header-content'>
					<p className='name'>The Octocat</p>
					<p className='user-name'>@octocat</p>
					<p className='registered-date'>Joined 25 Jan 2011</p>
				</div>
			</div>
			<p className='card-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam magnam quasi sapientetium?</p>

			<ul className='stats list'>
				<li className='list-item'>
					<p className='stat-headline'>Repos</p>
					<p className='stats-value'>8</p>
				</li>
				<li className='list-item'>
					<p className='stat-headline'>Followers</p>
					<p className='stats-value'>1009</p>
				</li>
				<li className='list-item'>
					<p className='stat-headline'>Following</p>
					<p className='stats-value'>1991</p>
				</li>
			</ul>

			<ul className='card-footer list'>
				<li className='card-footer-item'>
					<img
						className='footer-icon'
						src={location}
						alt=''
					/>
					<p className='city'>San Francisco</p>
				</li>
				<li className='card-footer-item'>
					<img
						className='footer-icon'
						src={website}
						alt=''
					/>
					<p>San Francisco</p>
				</li>
				<li className='card-footer-item'>
					<img
						className='footer-icon'
						src={twitter}
						alt=''
					/>
					<p>San Francisco</p>
				</li>
				<li className='card-footer-item'>
					<img
						className='footer-icon'
						src={company}
						alt=''
					/>
					<p>San Francisco</p>
				</li>
			</ul>
		</div>
	);
}

export default Card;
