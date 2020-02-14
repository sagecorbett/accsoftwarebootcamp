import React from 'react';
import FAQheader from './FAQheader/FAQheader';
import FAQgrid from './FAQgrid/FAQgrid';


import ReactGA from 'react-ga';
ReactGA.initialize('UA-150854051-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const FAQ = () => (
	<React.Fragment>
		<FAQheader />
		<FAQgrid />
	</React.Fragment>
);

export default FAQ;
