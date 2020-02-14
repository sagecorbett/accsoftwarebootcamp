import React from 'react';

const FAQheader = () => (
	<div className='faq-header u-center-text'>
		<div className='faq-header__text-box'>
			<h2 className='heading-secondary heading-secondary--grey'>FAQ</h2>
			<p className='paragraph paragraph--grey'>
				Check out answers to our frequently asked questions. If you have a
				question about something that's not listed below, reach out and we'll be
				happy to help!
			</p>
			<div className='faq-header__btn-box'>
				<a
					href='mailto:info@accsoftwarebootcamp.com'
					className='btn btn--transparent-black btn--transparent-black--yellow'
				>
					Get in Touch
				</a>
			</div>
		</div>
	</div>
);

export default FAQheader;
