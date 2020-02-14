import React, { Component } from 'react';
import Member from './Member';

// youcanbookme component
import ChatContact from '../../chat(legacy)/ChatBox/ChatContact/ChatContact';

// Instructor Photos
import Piyush from '../../../../assets/images/Piyush.png';
import Jon from '../../../../assets/images/Jon.png';
import Sevy from '../../../../assets/images/Sevy.png';
import JonMikel from '../../../../assets/images/Jon-Mikel.png';
import JM from '../../../../assets/images/JM.png'

class TeamMembers extends Component {
	state = {
		showBooking: false
	};

	// if someone clicks book a one on one phone call button, this will show the
	// youcanbookme component
	showBookingHandler = () => {
		let showBooking = !this.state.showBooking;
		this.setState({ showBooking });
	};

	render() {
		return (
			<div className='team-members u-center-text'>
				<div className='team-members__member-box'>
					<div className='row'>
						<div className='col-1-of-4'>
							<Member
								image={Piyush}
								name={'Piyush Mehta'}
								description='Piyush has worked with software and databases for over 20 years. He has also been an ACC instructor in Software Programming and Database Courses since 2004.'
							/>
						</div>
						<div className='col-1-of-4'>
							<Member
								image={Jon}
								name={'Jonathan Lue'}
								description='Jonathan is a programmer who loves learning and teaching. In his free time, he enjoys visiting coffee shops and traveling.'
							/>
						</div>
						<div className='col-1-of-4'>
							<Member
								image={Sevy}
								name={'Severine Cushing'}
								description='Severine is a DevOps engineer by day, bootcamp instructor by night - and competitive axe thrower the rest of the time. ⚒'
							/>
						</div>
						<div className='col-1-of-4'>
							<Member
								image={JM}
								name={'Jon-mikel pearson'}
								description='Movie junkie working on the ultimate NPM module while finishing up my BS in Software Development.'
							/>
						</div>
					</div>
				</div>
				<div className='team-members__btn-box'>
					<a
						href='mailto:info@accsoftwarebootcamp.com'
						className='btn btn--lg btn--margin btn--transparent-black btn--transparent-black--white'
					>
						Email an Instructor Directly
					</a>
					<span
						className='btn btn--lg btn--margin btn--black'
						onClick={this.showBookingHandler}
					>
						Book a One-on-One Call
					</span>
				</div>

				<div>{this.state.showBooking ? <ChatContact /> : ''}</div>
			</div>
		);
	}
}

export default TeamMembers;
