import React from 'react';
import TestDrive from './TestDrive/TestDrive';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-150854051-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const TrialClass = () => (
	<React.Fragment>
		<TestDrive />
	</React.Fragment>
);

export default TrialClass;
