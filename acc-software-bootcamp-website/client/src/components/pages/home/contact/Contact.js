import React, { Component } from 'react';
import axios from 'axios';
class Contact extends Component {
	state = {
		contactInfo: {
			name: '',
			email: '',
			phone: '',
			address: '',
			subject: '',
			message: '',
			syllabus: false
		},
		sent: false,
		validationError: false,
		error: false,
		showSpinner: false
	};

	// Handle all text inputs on the contact form
	inputHandler = e => {
		e.preventDefault();
		const name = e.target.name;
		const value = e.target.value;

		this.setState(prevState => ({
			contactInfo: {
				...prevState.contactInfo,
				[name]: value
			}
		}));
	};

	// handle wether or not they want a syllabus
	checkboxHandler = e => {
		e.preventDefault();

		// to set the syllabus state either to true or false.
		let syllabus = !this.state.contactInfo.syllabus;
		this.setState(prevState => ({
			contactInfo: {
				...prevState.contactInfo,
				syllabus: syllabus
			}
		}));
	};

	// When the user presses the send button
	sendHandler = () => {
		const contactInfo = {
			email: this.state.contactInfo.email,
			message: this.state.contactInfo.message,
			name: this.state.contactInfo.name,
			phone: this.state.contactInfo.phone,
			address: this.state.contactInfo.address,
			subject: this.state.contactInfo.subject,
			syllabus: this.state.contactInfo.syllabus
		};

		// Validate the required fields are at least filled with one character.
		// we can definitely improve this.
		if (!contactInfo.email && !contactInfo.name) {
			return this.setState({ validationError: true });
		} else {
			this.setState({ 
				validationError: false,
				showSpinner: true, 
			});
		}

		// send all of the data to our server.
		axios
			.post('/contact', contactInfo)
			.then(res => {
				console.log(res)
				console.log('made it this far');
				this.setState({
					sent: true,
					error: false,
					showSpinner: false,
					contactInfo: {
						name: '',
						email: '',
						phone: '',
						address: '',
						subject: '',
						message: '',
						syllabus: true
					}
				});
			})
			.catch(err => {
				this.setState({ error: true });
			});
	};

	render() {
		return (
			<div className='contact' id='hash'>
				<div className='contact__box'>
					<div className='row contact__row'>
						<div className='col-1-of-2'>
							<div className='contact__box-header u-center-text'>
								<h2 className='heading-tertiary'>Get in touch</h2>
							</div>
						</div>
						<div className='col-1-of-2 contact--custom'>
							{/* THIS WILL SHOW A SPINNER WHILE THE CONTACT INFO IS BEING SENT */}
							<div className={this.state.showSpinner ? 'loader u-center-text' : 'contact__box-form'}>
								<input
									type='text'
									name='name'
									onChange={this.inputHandler}
									value={this.state.contactInfo.name}
									placeholder='Name *'
									className='input'
								/>
								<input
									type='text'
									name='email'
									onChange={this.inputHandler}
									value={this.state.contactInfo.email}
									placeholder='Email *'
									className='input'
								/>
								<input
									type='text'
									name='phone'
									onChange={this.inputHandler}
									value={this.state.contactInfo.phone}
									placeholder='Phone'
									className='input'
								/>
								<input
									type='text'
									name='address'
									onChange={this.inputHandler}
									value={this.state.contactInfo.address}
									placeholder='Address'
									className='input'
								/>
								<input
									type='text'
									name='subject'
									onChange={this.inputHandler}
									value={this.state.contactInfo.subject}
									placeholder='Subject'
									className='input'
								/>
								{/* Handles wether or not to send the syllabus */}
								<span className='checkbox'>
									I would like to receive a copy of the syllabus: &nbsp;
									<span onClick={this.checkboxHandler}>{this.state.contactInfo.syllabus ? <i className="far fa-check-square"></i> :<i className="far fa-square"></i>}</span>
									{/* <input
										type='checkbox'
										name='syllabus'
										style={{height:'1vw', width:'1vw'}}
										onFocus={this.checkboxHandler}
									/> */}
								</span>
								<textarea
									name='message'
									onChange={this.inputHandler}
									value={this.state.contactInfo.message}
									cols='30'
									rows='10'
									placeholder='Message'
									className='input input--text-area'
								></textarea>
								{!this.state.sent ? (
									<React.Fragment>
									<button
										className='contact__send-btn'
										onClick={this.sendHandler}
									>
										Send
									</button>
									</React.Fragment>
								) : (
									<button className='contact__send-btn'>Sent ✓</button>
								)}
								{/* This will only show if name and email is not filled out */}
								{this.state.validationError ? (
									<span className='u-error-message u-center-text'>
										Please make sure all required fields are filled out *
									</span>
								) : (
									''
								)}
								{/* If there was an error submitting the contact form */}
								{this.state.error ? (
									<span className='u-error-message u-center-text'>
										There was an error sending your information. Please try
										again
									</span>
								) : (
									''
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Contact;
