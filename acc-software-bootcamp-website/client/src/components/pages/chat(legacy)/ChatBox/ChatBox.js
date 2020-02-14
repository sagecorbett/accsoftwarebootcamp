import React from 'react';
import ChatComponent from './ChatComponent/ChatComponent';

const ChatBox = () => (
	<div className='chat-box u-center-text'>
		<div className='chat-box__text-box'>
			<p className='paragraph--blue paragraph u-margin-bottom-2'>
				One-on-One Phone Call
			</p>
		</div>
		<div className='chat-box__chat-component'>
			<ChatComponent />
		</div>
	</div>
);

export default ChatBox;
