import React, { Component } from 'react';
import NavbarMobileList from './NavbarMobileList';
import Backdrop from '../Backdrop/Backdrop';

class NavbarMobile extends Component {
    state = {
        btnClicked: false,
    };

    // when this is clicked it expands the mobile navbar to fit
    // the width of the screen
    btnHandler = () => {
        let btnToggle = this.state.btnClicked;
        this.setState({ btnClicked: !btnToggle })
    };

    render() {
        return (
            <React.Fragment>
                {/* when the button to show the mobile navbar is clicked it will also
                show this backdrop component */}
                {this.state.btnClicked && <Backdrop clicked={this.btnHandler} />}
                {/* this will either add the open class "navbar-mobile__open" or only show the hamburger icon */}
                <div className={this.state.btnClicked ? "navbar-mobile navbar-mobile__open" : "navbar-mobile"}>
                    <div className={this.state.btnClicked ? "navbar-mobile__btn navbar-mobile__btn--open" : "navbar-mobile__btn"} onClick={this.btnHandler}>
                        {/* this changes the hamburger icon to an X icon */}
                        {!this.state.btnClicked ? <i className="fas fa-bars navbar-mobile__btn__icon"></i> : <i className="fas fa-times"></i>}
                    </div>
                    <div className="navbar-mobile__list">
                        {this.state.btnClicked && <NavbarMobileList btnClicked={this.btnHandler} />}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default NavbarMobile;
