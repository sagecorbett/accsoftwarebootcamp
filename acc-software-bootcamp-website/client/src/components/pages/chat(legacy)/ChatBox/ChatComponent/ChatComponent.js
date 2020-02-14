import React, { Component } from 'react';
// import Cellphone from '../../../../../assets/images/cellphone.jpeg';
import ChatContact from '../ChatContact/ChatContact';

class ChatComponent extends Component {
	state = {
		showContact: false,
		contactInfo: {
			date: '',
			email: '',
			message: '',
			name: '',
			phone: '',
			time: ''
		},
		sent: false,
		validationError: false,
		error: false
	};

	// When "Book It" btn is clicked this will show the contact form
	bookBtnClickHandler = () => {
		this.setState({ showContact: true });
	};

	render() {
		return (
			<React.Fragment>
				<div className='chat-component'>
					<div className='chat-component__img-box'>
						{/* <img
							src={Cellphone}
							alt='book a one on one call'
							className='chat-component__img-box--img'
						/> */}
					</div>
					<div className='chat-component__book-box u-center-text'>
						<h3 className='heading-primary'>Chat with an Instructor!</h3>
						<p className='paragraph paragraph--blue'>20 min | Free</p>
						<span
							className='btn btn--transparent-black btn--transparent-black--white'
							onClick={this.bookBtnClickHandler}
						>
							Book It
						</span>
					</div>
				</div>
				<div className="booking">
					{this.state.showContact && (
						<ChatContact
							show={this.state.showContact}
							modalClicked={this.modalClickHandler}
							inputHandler={this.inputHandler}
							sendHandler={this.sendHandler}
							sent={this.state.sent}
							error={this.state.error}
							validationError={this.state.validationError}
						/>
					)}
				</div>
			</React.Fragment>
		);
	}
}

export default ChatComponent;
