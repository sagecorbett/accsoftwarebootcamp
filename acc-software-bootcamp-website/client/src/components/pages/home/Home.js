import React, { Component } from 'react';

// Home page components
import Contact from './contact/Contact';
import Hero from './hero/Hero';
import About from './about/About';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-150854051-1');
ReactGA.pageview(window.location.pathname + window.location.search);




class Home extends Component {

	
	componentDidMount = () => {
		
	}

	render() {
		return (
			<React.Fragment>
				<Hero />
				<About />
				<Contact />
			</React.Fragment>
		);
	}
}

export default Home;
