import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
<<<<<<< HEAD
import Payments from './Payments'
=======
>>>>>>> 7927c19a9d9bc7e99cc9cbd37896f1fb15a028b8

class Header extends Component {

    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <li><a href="/auth/google">Login With Google</a></li>
                )
            default:
<<<<<<< HEAD
                return [
                <li><Payments /></li>,
                <li><a href="/api/logout">Logout</a></li>]
=======
                return <li><a href="/api/logout">Logout</a></li>
>>>>>>> 7927c19a9d9bc7e99cc9cbd37896f1fb15a028b8
        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link
                        to={this.props.auth ? '/surveys' : '/'} 
                        className="left-brand-logo">
                        Oauth Template
                    </Link>
                    <ul id="nav-mobile" className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        )
    }
};

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);