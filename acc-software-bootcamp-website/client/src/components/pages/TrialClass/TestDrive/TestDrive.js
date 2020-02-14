import React from 'react';

const TestDrive = () => (
	<div className='test-drive'>
		<div className='test-drive__content-box'>
			<div className='test-drive__text-box'>
				<h1 className='heading-tertiary heading-tertiary--grey'>
					take coding for a test drive
				</h1>
			</div>

			<div className='test-drive__text-box'>
				<p className='paragraph paragraph--grey'>
					Not sure if coding is right for you?
				</p>
			</div>
			<div className='test-drive__text-box'>
				<p className='paragraph paragraph--grey'>
					Our 2-day Trial Class is a great way to give coding a try, meet our
					instructors and get a feel for the pace of the bootcamp.
				</p>
			</div>
			<div className='test-drive__text-box'>
				<p className='paragraph--sm paragraph--grey'>
					The Trial Class is designed to introduce you to the fundamentals of
					web development. The fast pace and challenging mini-project will give
					you a taste of the full-blown 24-week full stack web development
					bootcamp (full-bootcamp) that is offered through ACC Continuing
					Education. At the end of the last class, you will get an opportunity
					to meet the instructors of the bootcamp, and have any questions
					answered relating to training approaches, nature of projects you will
					be given, job prospects, career planning approaches etc.
				</p>
			</div>
			<div className='test-drive__btn-box'>
				<a
					href='http://continue.austincc.edu/schedule/courses?name=Software%20Dev%20Bootcamp%20-%20Trial'
					rel='noopener noreferrer'
					target='_blank'
					className='btn btn--margin btn--transparent-black btn--sm btn--transparent-black--white'
				>
					Sign Up
				</a>
				<a href='mailto:info@accsoftwarebootcamp.com' className='btn btn--lg btn--black'>
					Email an Instructor Directly
				</a>
			</div>
		</div>
	</div>
);

export default TestDrive;
