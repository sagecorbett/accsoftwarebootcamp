import React from 'react';
import Navbar from './Navbar/Navbar';
import NavbarMobile from './Navbar/NavbarMobile';
import Footer from './Footer/Footer';

const Layout = props => (
	<React.Fragment>
		<NavbarMobile />
		<Navbar />
		{props.children}
		<Footer />
	</React.Fragment>
);

export default Layout;
