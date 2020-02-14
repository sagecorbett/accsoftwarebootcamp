import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const FAQgrid = () => (
	<main>
		<section className='faq'>
			<div className='faq__grid-box'>
				<div className='row'>
					<div className='col-1-of-2'>
						<h3 className='heading-grid'>HOW MUCH DOES IT COST?</h3>
						<p className='paragraph--sm paragraph--grey'>
							The 24-week ACC Software Development Bootcamp costs $7,201. &nbsp;
							<a
								href='http://continue.austincc.edu/bootcamp'
								rel='noopener noreferrer'
								target='_blank'
							>
								Details can be found here.
							</a>
						</p>
					</div>
					<div className='col-1-of-2'>
						<h3 className='heading-grid'>WHAT'S COVERED?</h3>
						<p className='paragraph--sm paragraph--grey'>
							This is a Full Stack bootcamp, meaning we cover front end and back
							end technologies. You'll learn: Git, HTML, CSS, jQuery,
							JavaScript, NodeJS, Express, SQL, MongoDB, React, TDD. To view all
							topics,{' '}
							<Link smooth to='/#hash' className=''>
								Get a Copy of the Syllabus
							</Link>
						</p>
					</div>
				</div>

				<div className='row'>
					<div className='col-1-of-2'>
						<h3 className='heading-grid'>WHAT DAY & TIME ARE CLASSES HELD?</h3>
						<p className='paragraph--sm paragraph--grey'>
							We designed this bootcamp with working folks in mind. Classes are
							held on week nights and Saturday mornings.
						</p>
						<p className='paragraph--sm paragraph--grey'>
							Your classes may be one of the following schedules:
						</p>
						<p className='paragraph--sm paragraph--grey'>
							Mondays, Wednesdays (7p-10p) Saturdays (9a-1p)
						</p>
						<p className='paragraph--sm paragraph--grey'>or</p>
						<p className='paragraph--sm paragraph--grey'>
							Tuesdays, Thursdays (7p-10p) Saturdays (9a-1p)
						</p>
					</div>
					<div className='col-1-of-2'>
						<h3 className='heading-grid'>
							HOW MANY HOURS PER WEEK SHOULD I EXPECT TO SET ASIDE?
						</h3>
						<p className='paragraph--sm paragraph--grey'>
							About 30 hours in total. Expect to spend 10 hours per week in
							class and 15-20 hours outside of class on self study assignments
							and projects.
						</p>
					</div>
				</div>

				<div className='row'>
					<div className='col-1-of-2'>
						<h3 className='heading-grid'>
							HOW DO I KNOW IF THIS IS RIGHT FOR ME?
						</h3>
						<p className='paragraph--sm paragraph--grey'>
							Here are the top things you can do to decide if this is right for
							you:
						</p>
						<ul>
							<li className='paragraph--sm paragraph--grey'>
								<Link smooth to='/#hash' className=''>
									Review a copy of the bootcamp syllabus.
								</Link>
							</li>
							<li className='paragraph--sm paragraph--grey'>
								Schedule a free one-on-one phone call with one of our
								instructors. It's not a sales call. We are here to help.
							</li>
							<li className='paragraph--sm paragraph--grey'>
								Enroll in the&nbsp;
								<a
									href='http://continue.austincc.edu/schedule/courses?name=Software%20Dev%20Bootcamp%20-%20Trial'
									rel='noopener noreferrer'
									target='_blank'
								>
									2-day Trial Class.
								</a>{' '}
								The Trial Class will give you a taste for the pace, instructor
								style and teach you the basics of HTML, CSS and jQuery!
							</li>
							<li className='paragraph--sm paragraph--grey'>
								Schedule a free one-on-one phone call with one of our
								instructors. It's not a sales call. We are here to help.
							</li>
						</ul>
					</div>
					<div className='col-1-of-2'>
						<h3 className='heading-grid'>
							WILL I RECEIVE A CERTIFICATE FOR COMPLETING THE CLASS?
						</h3>
						<p className='paragraph--sm paragraph--grey'>
							You will receive an ACC Certificate of Completion.
						</p>
					</div>
				</div>

				<div className='row'>
					<div className='col-1-of-2'>
						<h3 className='heading-grid'>
							WHAT HAPPENS IF I'M SICK OR OUT OF TOWN?
						</h3>
						<p className='paragraph--sm paragraph--grey'>
							You may attend class via live video conference. However such
							virtual attendance is not recommended too often.
						</p>
					</div>
					<div className='col-1-of-2'>
						<h3 className='heading-grid'>WHERE IS CLASS HELD?</h3>
						<p className='paragraph--sm paragraph--grey'>
							Class is held at the ACC Highland Business Center Campus.
						</p>
						<p className='paragraph--sm paragraph--grey'>
							5930 Middle Fiskville Rd, Austin, TX 78752
						</p>
					</div>
				</div>

				<div className='row'>
					<div className='col-1-of-2'>
						<h3 className='heading-grid'>I'M READY! HOW CAN I PREPARE?</h3>
						<p className='paragraph--sm paragraph--grey'>
							Great! Here's how to prepare:
						</p>
						<ul>
							<li className='paragraph--sm paragraph--grey'>
								If you haven't already, be sure to enroll in the next upcoming
								&nbsp;
								<a
									href='http://continue.austincc.edu/schedule/courses?name=Software%20Dev%20Bootcamp%20-%20Trial'
									rel='noopener noreferrer'
									target='_blank'
								>
									2-Day Trial Class.
								</a>
								&nbsp; This is a great way to learn the basics and get to know
								your instructors.
							</li>
							<li className='paragraph--sm paragraph--grey'>
								<Link to='/team'>
									Schedule a time to chat with one of our instructors by phone.
								</Link>
							</li>
						</ul>
					</div>
					<div className='col-1-of-2'>
						<h3 className='heading-grid'>
							WHERE CAN I FIND MORE INFO ON FINANCIAL AID OR EMPLOYER
							REIMBURSEMENT?
						</h3>
						<p className='paragraph--sm paragraph--grey'>
							Contact us and we'll point you in the right direction!
						</p>
					</div>
				</div>
			</div>
			<div className='faq__btn-box u-center-text'>
				<a
					href='mailto:info@accsoftwarebootcamp.com'
					className='btn btn--lg btn--transparent-black btn--transparent-black--white'
				>
					I Still Have a Question
				</a>
			</div>
			<hr />
		</section>
	</main>
);

export default FAQgrid;
