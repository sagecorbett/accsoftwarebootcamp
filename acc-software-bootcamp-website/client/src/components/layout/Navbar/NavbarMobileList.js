import React from 'react';
import { NavLink } from 'react-router-dom';

const NavbarMobileList = props => (
	<div className='navbar-mobile__list-box'>
		<ul className='navbar-mobile__list'>
			<li className='navbar-mobile__item' onClick={props.btnClicked}>
				<NavLink className='navbar-mobile__link' exact to='/'>
					Home
				</NavLink>
			</li>
			<li className='navbar-mobile__item' onClick={props.btnClicked}>
				<NavLink className='navbar-mobile__link' to='/education'>
					What You'll Learn
				</NavLink>
			</li>
			<li className='navbar-mobile__item' onClick={props.btnClicked}>
				<NavLink className='navbar-mobile__link' to='/team'>
					Chat With an Instructor
				</NavLink>
			</li>
			<li className='navbar-mobile__item' onClick={props.btnClicked}>
				<NavLink className='navbar-mobile__link' to='/FAQ'>
					FAQ
				</NavLink>
			</li>
			<li className='navbar-mobile__item' onClick={props.btnClicked}>
				<NavLink className='navbar-mobile__link' to='/trialclass'>
					Trial Class
				</NavLink>
			</li>
			<li className='navbar-mobile__item' onClick={props.btnClicked}>
				<NavLink className='navbar-mobile__link' to='/signup'>
					Sign Up
				</NavLink>
			</li>
		</ul>
	</div>
);

export default NavbarMobileList;
