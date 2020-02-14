// This is no longer going to be used.
import React from 'react';

const Video = () => (
	<div className='video'>
		<div className='video__content-box u-center-text'>
			<div className='video__video-box u-center-text'>
				<iframe
					title='Class description'
					width='940'
					height='515'
					src='https://www.youtube.com/embed/yNXrR2V9_Lw'
					frameBorder='0'
					allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
					allowFullScreen
				></iframe>
			</div>
			<div className='video__btn-box'>
				<a
					href='http://continue.austincc.edu/schedule/view?id=83822&term=219SCE'
					rel='noopener noreferrer'
					target='_blank'
					className='btn btn--margin btn--transparent-black btn--transparent-black--white'
				>
					Sign Up
				</a>
				<a href='mailto:info@accsoftwarebootcamp.com' className='btn btn--black'>
					Email an Instructor Directly
				</a>
			</div>
		</div>
	</div>
);

export default Video;
