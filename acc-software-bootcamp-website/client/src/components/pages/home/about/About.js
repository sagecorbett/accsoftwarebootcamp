import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import computer from '../../../../assets/images/coding-at-computer.png';


import ReactGA from 'react-ga';



const About = () => (
	<div className='about'>
		<div className='about__img-box'>
			<img
				src={computer}
				alt='coding at computer'
				className='about__img-box__photo'
			/>
		</div>
		<div className='about__description-box'>
			<h3 className='heading-tertiary heading-tertiary--sm'>
				about acc software development bootcamp
			</h3>
			<p className='paragraph'>Empowerment Through Education</p>
			<div className='about__btn-box'>
				<a
					href='mailto:info@accsoftwarebootcamp.com'
					className='btn btn--transparent-white btn--lg u-center-text'
				>
					Email an Instructor
				</a>
			</div>
			<div className='about__btn-box'>
				{/* When clicked this will scroll down to the contact box */}
				<Link
					smooth
					onClick={() => ReactGA.event({
						category: "Syllabus",
						action: "User clicked get syllabus",
					})}
					to='/#hash'
					className='btn btn--white btn--lg u-center-text'
				>
					Get a Copy of the Syllabus
				</Link>
			</div>
		</div>
	</div>
);

export default About;
