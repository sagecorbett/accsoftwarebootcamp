import React from 'react';
import { NavLink } from 'react-router-dom';

// ACC LOGO
import acc from '../../../assets/images/acc-logo.png';

const Navbar = () => (
	<section>
		<nav>
			<header className='header'>
				<div className='header__logo-box u-center-text'>
					<img
						src={acc}
						alt='Austin Community College'
						className='header__logo-img'
					/>
				</div>
				<div className='header__text-box u-center-text'>
					<h1 className='heading-primary'>acc software development bootcamp</h1>
				</div>
			</header>
			<div className='navbar navbar-desktop'>
				<ul className='navbar__list'>
					<li className='navbar__item'>
						<NavLink className='navbar__link' exact to='/'>
							Home
						</NavLink>
					</li>
					<li className='navbar__item'>
						<NavLink className='navbar__link' to='/education'>
							What You'll Learn
						</NavLink>
					</li>
					<li className='navbar__item'>
						<NavLink className='navbar__link' to='/team'>
							Chat With an Instructor
						</NavLink>
					</li>
					<li className='navbar__item'>
						<NavLink className='navbar__link' to='/FAQ'>
							FAQ
						</NavLink>
					</li>
					<li className='navbar__item'>
						<NavLink className='navbar__link' to='/trialclass'>
							Trial Class
						</NavLink>
					</li>
					<li className='navbar__item'>
						<NavLink className='navbar__link' to='/signup'>
							Sign Up
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	</section>
);

export default Navbar;
