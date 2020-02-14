import React, { Component } from 'react';

class ChatContact extends Component {

	state = {
		showSpinner: true
	}

	spinnerHandler = () => {
		this.setState({ showSpinner: false });
	}

	render() {
		return (
			<React.Fragment>
				{this.state.showSpinner ? <div className="loader"></div> : null}
				<iframe

					className='chat-contact'
					onLoad={this.spinnerHandler}
					title='booking'
					src='https://softwarebootcampacc.youcanbook.me/?noframe=true&skipHeaderFooter=true'
					id='ycbmiframesoftwarebootcampacc'
					style={{
					
						height: '1000px',
						border: '1px solid black',
						backgroundColor: 'transparent',
						margin: '3%'
					}}
					frameborder='0'
					allowTransparency='true'
				></iframe>
				<script>
					{window.addEventListener &&
						window.addEventListener(
							'message',
							function(event) {
								if (
									event.origin === 'https://softwarebootcampacc.youcanbook.me'
								) {
									document.getElementById(
										'ycbmiframesoftwarebootcampacc'
									).style.height = event.data + 'px';
								}
							},
							false
						)}
				</script>
			</React.Fragment>
		);
	}
}

export default ChatContact;