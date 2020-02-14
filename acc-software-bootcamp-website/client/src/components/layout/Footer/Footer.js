import React from 'react';

const Footer = () => (
	<footer className='footer'>
		<div className='footer__social-box'>
			<a
				href='https://www.facebook.com/ACCcodingbootcamp'
				rel='noopener noreferrer'
				target='_blank'
				className='footer__link'
			>
				<i className='fab fa-facebook-f'></i>
			</a>
		</div>
		<div className='footer__copyright-box'>
			<p className='paragraph paragraph--sm'>
				©2019 by ACC Software Development Bootcamp.
			</p>
		</div>
	</footer>
);

export default Footer;
