import React from 'react';
import TeamHeader from './TeamHeader/TeamHeader';
import TeamMembers from './TeamMembers/TeamMembers';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-150854051-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const Team = () => (
	<React.Fragment>
		<TeamHeader />
		<TeamMembers />
		<hr />
	</React.Fragment>
);

export default Team;
