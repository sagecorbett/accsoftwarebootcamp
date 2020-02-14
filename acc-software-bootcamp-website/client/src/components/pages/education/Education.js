import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-150854051-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const Education = () => (
	<div className='education'>
		<div className='education__heading-box u-center-text'>
			<h2 className='heading-secondary'>What you'll learn</h2>
			<div className='education__text-box'>
				<p className='paragraph--sm'>
					Our goal is to provide career advancement opportunities for adults
					through practical and carefully crafted experiential training
					programs. Since our establishment, our reputation has grown as our
					graduates go on to become knowledgeable professionals in their field.
				</p>
			</div>
			<div className='education__text-box'>
				<p className='paragraph--sm'>
					Through engaging and hands-on educational opportunities, ACC Software
					Development Bootcamp continuously cultivates future industry leaders.
				</p>
			</div>
			<div className='education__text-box'>
				<p className='paragraph--sm'>
					You will be learning HTML, CSS, JavaScript, Bootstrap, JQuery, NodeJS,
					ExpressJS, and more. While working on real life projects, and you will
					be learning some of the most in-demand technologies on the market
					today. You will master how to build dynamic web apps from scratch,
					while learning extremely useful code management, version management,
					testing and web software deployment processes.
				</p>
			</div>
			<div className='education__text-box'>
				<ul className="education__text-box--list">
					<li className="u-margin-bottom-2">
						<span className='li-span'>
							A 24 week program that teaches you HTML, CSS, JavaScript, Node.js,
							Express.js, MongoDB, React.js, SQL, React.js. Git, and much more.
						</span>
					</li>
					<li className="u-margin-bottom-2">
						<span className='li-span'>
							Classes are held on nights and weekends so that you don't need to
							quit your day job.
						</span>
					</li>
					<li className="u-margin-bottom-2">
						<span className='li-span'>
							ACC's focus on student needs means that we offer the best value
							for a coding bootcamp anywhere in Austin.
						</span>
					</li>
					<li className="u-margin-bottom-2">
						<span className='li-span'>
							This course is job focused and our primary goal is to make our
							students professional web developers.
						</span>
					</li>
					<li className="u-margin-bottom-2">
						<span className='li-span'>
							You don't need prior programming experience. We'll teach you
							everything you need to know from the ground up.​
						</span>
					</li>
				</ul>
			</div>
			<div className='education__heading-box--btn-box'>
				<a
					href='mailto:info@accsoftwarebootcamp.com'
					className='btn btn--margin btn--transparent-white btn--sm'
				>
					Get in Touch
				</a>
				{/* This when clicked takes you to the contact box on the home page */}
				<Link
					smooth
					to='/#hash'
					className='btn btn--white btn--lg u-center-text'
				>
					Get The Syllabus
				</Link>
			</div>
		</div>
		<div className='education__video-box u-center-text'>
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
	</div>
);

export default Education;
