import React from 'react';

// There wasn't a need to break signup into multiple components
const Signup = () => (
	<div className='signup'>
		<div className='signup__heading-box u-center-text'>
			<h2 className='heading-secondary heading-secondary--lg'>
				ready? let's go.
			</h2>
			<p className='paragraph--sm'>
				Click the button below. You will be redirected to the ACC Continuing
				Education Page.
			</p>
			<div className='signup__heading-box--btn-box'>
				<a
					href='http://continue.austincc.edu/bootcamp'
					rel='noopener noreferrer'
					target='_blank'
					className='btn btn--transparent-white btn--sm btn--margin'
				>
					Sign Up
				</a>
				<a
					href='mailto:info@accsoftwarebootcamp.com'
					className='btn btn--white btn--lg'
				>
					Email an Instructor Directly
				</a>
			</div>
		</div>
		<div className='signup__video-box u-center-text'>
			<iframe
				width='940'
				height='515'
				src='https://www.youtube.com/embed/yNXrR2V9_Lw'
				frameBorder='0'
				allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
				title='Class description'
				allowFullScreen
			></iframe>
		</div>
	</div>
);

export default Signup;
