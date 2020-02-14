import React from 'react';
import ChatHeader from './ChatHeader/ChatHeader';
import ChatBox from './ChatBox/ChatBox';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-150854051-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const Chat = () => (
	<React.Fragment>
		<ChatHeader />
		<ChatBox />
		<hr />
	</React.Fragment>
);

export default Chat;
